import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {AiFillHome} from 'react-icons/ai'
import {MdWhatshot, MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import CartContext from '../../context/CartContext'
import Banner from '../Banner'
import TrendingItems from '../TrendingItems'
import SideBar from '../SideBar'
import {RowVideo, Unordered, Input} from './styledComponents'
import Header from '../Header'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

export default class Trending extends Component {
  state = {
    videosList: [],

    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="products failure"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
      <Link to="/trending">
        <button type="button" className="btn btn-primary retry-btn">
          Retry
        </button>
      </Link>
    </div>
  )

  renderAllTrendingProducts = () => {
    const {apiStatus} = this.state
    console.log(apiStatus)
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrending()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  renderTrending = () => (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

        const homeTextClassName = isDarkTheme
          ? 'home-text-light'
          : 'home-text-dark'

        const IconBgClassName = isDarkTheme
          ? 'trend-icon-dark'
          : 'trend-icon-light'

        const HeadingBgClassName = isDarkTheme
          ? 'trend-head-dark'
          : 'trend-head-light'
        const {videosList} = this.state
        const shouldShowVideosList = videosList.length > 0
        console.log(shouldShowVideosList)
        return shouldShowVideosList ? (
          <RowVideo>
            <div className="trending">
              <p className={`${HeadingBgClassName}`}>
                <MdWhatshot
                  className={`${IconBgClassName}`}
                  size={40}
                  color="red"
                />
                Trending
              </p>
              <Unordered>
                <ul>
                  {videosList.map(video => (
                    <li className="none" key={video.id}>
                      <Link to={`/video/${video.id}`}>
                        <TrendingItems key={video.id} videos={video} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Unordered>
            </div>
          </RowVideo>
        ) : (
          <div className="no-products-view">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
              className="no-products-img"
              alt="no products"
            />
            <h1 className="no-products-heading">No Products Found</h1>
            <p className="no-products-description">
              We could not find any products. Try other filters.
            </p>
          </div>
        )
      }}
    </CartContext.Consumer>
  )

  getVideos = async () => {
    const api = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'GET',
    }
    console.log('jwtToken', jwtToken)
    const response = await fetch(api, options)
    console.log(response)
    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log('fetchedData: ', fetchedData)
      const updatedData = fetchedData.videos.map(video => ({
        title: video.title,
        channel: video.channel,
        channelName: video.channel.name,
        profileImage: video.channel.profile_image_url,
        published: video.published_at,
        id: video.id,
        thumbnail: video.thumbnail_url,
        views: video.view_count,
      }))
      console.log('Updated Data: ', updatedData)
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const homeBgClassName = isDarkTheme
            ? 'trend-bg-dark'
            : 'trend-bg-light'

          const homeTextClassName = isDarkTheme
            ? 'home-text-light'
            : 'home-text-dark'
          return (
            <div className={`${homeBgClassName}`}>
              {this.renderAllTrendingProducts()}
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

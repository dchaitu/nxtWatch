import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Banner from '../Banner'
import CartContext from '../../context/CartContext'
import GamingItems from '../GamingItems'
import SideBar from '../SideBar'
import {RowVideo, Unordered, Input, SidePage} from './styledComponents'
import Header from '../Header'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

export default class Gaming extends Component {
  state = {
    videosList: [],
    isLoading: true,
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
    </div>
  )

  renderAllGamingProducts = () => {
    const {apiStatus} = this.state
    console.log(apiStatus)
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGaming()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  renderGaming = () => (
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
            <SideBar />
            <SidePage>
              <div className="trending">
                <p className={`${HeadingBgClassName}`}>
                  <SiYoutubegaming
                    className={`${IconBgClassName}`}
                    size={40}
                    color="red"
                  />
                  Gaming
                </p>
                <Unordered>
                  {videosList.map(video => (
                    <GamingItems
                      videos={video}
                      textColor={`${homeTextClassName}`}
                    />
                  ))}
                </Unordered>
              </div>
            </SidePage>
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
    const api = 'https://apis.ccbp.in/videos/gaming'
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
        id: video.id,
        title: video.title,

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

          const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

          const homeTextClassName = isDarkTheme
            ? 'home-text-light'
            : 'home-text-dark'
          return (
            <div className={`${homeBgClassName}`}>
              {this.renderAllGamingProducts()}
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

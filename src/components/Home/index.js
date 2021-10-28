import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import Banner from '../Banner'
import CartContext from '../../context/CartContext'
import ThumbNail from '../ThumbNail'
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

export default class Home extends Component {
  state = {
    videosList: [],
    isLoading: true,
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
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

  renderAllHomeVideos = () => {
    const {apiStatus} = this.state
    console.log('apiStatus', apiStatus)
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  renderProductsListView = () => (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

        const homeTextClassName = isDarkTheme
          ? 'home-text-light'
          : 'home-text-dark'
        const {videosList} = this.state
        const shouldShowVideosList = videosList.length > 0

        return shouldShowVideosList ? (
          <RowVideo>
            <div className="flex-item">
              <Banner />
              <div className="input-group">
                <div className="form-outline">
                  <input
                    type="search"
                    // onChange={this.onChangeSearchInput}
                    onKeyDown={this.onEnterSearchInput}
                    id="form1"
                    className="form-control"
                  />
                </div>
                <button
                  type="button"
                  onClick={this.onChangeSearchInput}
                  className="btn btn-secondary"
                >
                  <AiOutlineSearch />
                </button>
              </div>
              <Unordered>
                {videosList.map(video => (
                  <Link to={`/video/${video.id}`}>
                    <ThumbNail
                      videos={video}
                      textColor={`${homeTextClassName}`}
                    />
                  </Link>
                ))}
              </Unordered>
            </div>
          </RowVideo>
        ) : (
          <div className="no-products-view d-flex flex-column align-items-center">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              className="no-products-img"
              alt="no videos"
            />
            <div className={`d-flex flex-column ${homeTextClassName}`}>
              <h1 className="no-products-heading">No Search results found</h1>
              <p className="no-products-description">
                Try different key words or remove search filter.
                <br />
                <Link to="/">
                  <button type="button" className="retry-btn">
                    Retry
                  </button>
                </Link>
              </p>
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )

  getVideos = async () => {
    const api = 'https://apis.ccbp.in/videos/all?search='
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

  onEnterSearchInput = async event => {
    this.setState({searchInput: event.target.value})
    console.log(event.target.value)
  }

  onChangeSearchInput = async event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
    console.log('searchInput =', searchInput)

    this.setState({
      videosList: this.getSearchResults(),
    })
  }

  getSearchResults = () => {
    const {searchInput, videosList} = this.state
    const searchResults = videosList.filter(eachVideo =>
      eachVideo.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return searchResults
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
              <div className="d-flex flex-row">
                <div>{this.renderAllHomeVideos()}</div>
              </div>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

//   render() {
//     return (
//       <>
//         <Header />
//         {this.renderAllProducts()}
//       </>
//     )
//   }
// }

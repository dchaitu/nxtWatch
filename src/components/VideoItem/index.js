import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Banner from '../Banner'
import VideoItemDetails from '../VideoItemDetails'
import TrendingItems from '../TrendingItems'
import SideBar from '../SideBar'
import {RowVideo, Unordered, Input} from './styledComponents'
import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

export default class VideoItem extends Component {
  state = {
    videoDetails: '',
    isLoading: true,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.showVideo()
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

  renderTrending = () => {
    const {videoDetails} = this.state
    return (
      <RowVideo>
        <SideBar />

        <VideoItemDetails videoDetails={videoDetails} />
      </RowVideo>
    )
  }

  showVideo = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const api = `https://apis.ccbp.in/videos/${id}`
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
      console.log('fetchedData: ', fetchedData.video_details)
      const details = fetchedData.video_details
      const updatedData = {
        title: details.title,
        showVideo: details.video_url,
        channel: details.channel,
        channelName: details.channel.name,
        profileImage: details.channel.profile_image_url,
        subscribers: details.channel.subscriber_count,
        totalViews: details.view_count,
        published: details.published_at,
        id: details.id,
        thumbnail: details.thumbnail_url,
        description: details.description,
      }
      console.log('Updated Data: ', updatedData)
      this.setState({
        videoDetails: updatedData,
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
    const {videosList, isLoading} = this.state
    return (
      <>
        <Header />
        <Banner />
        <Input type="search" placeholder="Search" />
        {this.renderAllTrendingProducts()}
      </>
    )
  }
}

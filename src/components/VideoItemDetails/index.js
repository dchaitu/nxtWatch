import {Component} from 'react'
import ReactPlayer from 'react-player'
import {
  format,
  parseISO,
  formatISO,
  formatDistance,
  formatRelative,
  subDays,
  isValid,
  parse,
} from 'date-fns'
import {BiDislike} from 'react-icons/bi'
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'

import {MdPlaylistAdd} from 'react-icons/md'
import CartContext from '../../context/CartContext'
import {Row, Col, Box, ThumbNailImg, Icon, Grey} from './styledComponents'
import './index.css'

// const formatDate = date => {
const formatDate = date => {
  const {dateString} = date
  //   console.log('date = ', dateString)
  //   const stringVal = dateString
  //   const date = parseISO(stringVal)

  //   console.log(format(new Date(), 'P'))
  //   console.log(formatISO(date, {representation: 'date'}))
  //   return format(new Date(), 'P')
  if (isValid(parseISO(dateString))) {
    console.log(parse(dateString, 'yyyy-MM-dd', new Date()))
  }
}
const formatDates = date => {
  const {dateString} = date
  console.log(dateString)
  console.log('Date is ', format(parseISO('2019-02-11T14:00:00'), 'MM/dd/yyyy'))
}

// formatDate={published => format(published, 'yyyy.MM.dd')}
// const VideoItemDetails = props => (
class VideoItemDetails extends Component {
  state = {
    like: false,
    dislike: false,
    save: false,
    quantity: 1,
  }

  formatDates = date => {
    const {dateString} = date
    console.log(dateString)
    console.log(
      'Date is ',
      format(parseISO('2019-02-11T14:00:00'), 'MM/dd/yyyy'),
    )
  }

  likeButton = () => {
    const {like} = this.state
    console.log('like: ', like)
    this.setState(prevState => ({like: !prevState.like}))
    this.setState({dislike: false})
  }

  dislikeButton = () => {
    this.setState(prevState => ({dislike: !prevState.dislike}))
    this.setState({like: false})
  }

  saveButton = () => {
    this.setState(this.setState(prevState => ({save: !prevState.save})))
  }

  render() {
    const {like, dislike, save, quantity} = this.state
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme, addCartItem} = value

          const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

          const homeTextClassName = isDarkTheme
            ? 'home-text-light'
            : 'home-text-dark'
          const {videoDetails} = this.props

          const {
            id,
            thumbnail,
            title,
            totalViews,
            subscribers,
            profileImage,
            channelName,
            showVideo,
            published,
          } = videoDetails

          const onClickAddToCart = () => {
            addCartItem({...videoDetails, quantity})
            this.saveButton()
          }

          return (
            <div className={`width ${homeBgClassName}`}>
              <ReactPlayer width="1040px" height="660px" url={showVideo} />
              <div className={`${homeTextClassName}`}>
                <p>{title}</p>
                <Box>
                  <Row>
                    <Grey>{totalViews} views </Grey>{' '}
                    <Grey>
                      <li>{published}</li>
                    </Grey>
                  </Row>
                  <Row>
                    {like && (
                      <p className="pad icon-selected">
                        <AiOutlineLike
                          className="pt"
                          size={35}
                          color="blue"
                          onClick={this.likeButton}
                        />
                        <span className="icon-selected"> Like</span>
                      </p>
                    )}
                    {!like && (
                      <p className="pad">
                        <AiOutlineLike
                          className="pt"
                          size={35}
                          onClick={this.likeButton}
                        />
                        Like
                      </p>
                    )}

                    {dislike && (
                      <p className="pad icon-selected">
                        <AiOutlineDislike
                          size={35}
                          className="pt"
                          color="blue"
                          onClick={this.dislikeButton}
                        />

                        <span className="icon-selected"> Dislike</span>
                      </p>
                    )}
                    {!dislike && (
                      <p className="pad">
                        <AiOutlineDislike
                          size={35}
                          background="blue"
                          onClick={this.dislikeButton}
                          className="pt"
                        />
                        Dislike
                      </p>
                    )}
                    {!save && (
                      <p className="pad">
                        <MdPlaylistAdd
                          size={35}
                          onClick={onClickAddToCart}
                          className="pt"
                        />
                        Save
                      </p>
                    )}
                    {save && (
                      <p className="pad icon-selected">
                        <MdPlaylistAdd
                          size={35}
                          color="blue"
                          onClick={onClickAddToCart}
                          className="pt"
                        />
                        Saved
                      </p>
                    )}
                  </Row>
                </Box>
                <hr />
                <Row>
                  <Icon src={profileImage} alt="icon" />
                  <Col>
                    <p className="mb">{channelName}</p>
                    <Grey>{subscribers} subscribers</Grey>
                  </Col>
                </Row>
              </div>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default VideoItemDetails

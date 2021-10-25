import ReactPlayer from 'react-player'
import {
  format,
  parseISO,
  formatISO,
  formatDistance,
  formatRelative,
  subDays,
} from 'date-fns'
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import {Row, Col, Box, ThumbNailImg, Icon, Grey} from './styledComponents'
import './index.css'

const formatDate = date => {
  const {dateString} = date
  console.log('date = ', dateString)
  //   const stringVal = dateString
  //   const date = parseISO(stringVal)

  //   console.log(format(new Date(), 'P'))
  //   console.log(formatISO(date, {representation: 'date'}))
  //   return format(new Date(), 'P')
  return dateString
}

const VideoItemDetails = props => {
  const {videoDetails} = props
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

  return (
    <div>
      <ReactPlayer url={showVideo} />
      <p>{title}</p>
      <Box>
        <Row>
          <Grey>{totalViews} views </Grey>{' '}
          <Grey>
            <li>{published}</li>
          </Grey>
        </Row>
        <Row>
          <p className="pad">
            <AiOutlineLike className="pt" /> Like
          </p>
          <p className="pad">
            <AiOutlineDislike className="pt" />
            Dislike
          </p>
          <p className="pad">
            <MdPlaylistAdd className="pt" />
            Save
          </p>
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
  )
}

export default VideoItemDetails

import {Component} from 'react'
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
const TrendingVideos = props => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

      const homeTextClassName = isDarkTheme
        ? 'home-text-light'
        : 'home-text-dark'
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
        <div className={`width ${homeBgClassName}`}>
          <p>{title}</p>
          <Box>
            <Row>
              <Grey>{totalViews} views </Grey>
              <Grey>
                <li>{published}</li>
              </Grey>
            </Row>
          </Box>

          <Col>
            <p className="mb">{channelName}</p>
            <Grey>{subscribers} subscribers</Grey>
          </Col>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default TrendingVideos

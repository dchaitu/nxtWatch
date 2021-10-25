import {format, formatDistance, formatRelative, subDays} from 'date-fns'
import {Row, Col, Box, ThumbNailImg, Info, Bold, Gray} from './styledComponents'

import './index.css'

// const NumberOfDays = date => formatDistance(date, new Date(), {addSuffix: true})
// (
//   console.log(
//     'formatDistance = ',
//     formatDistance(subDays(date), new Date(), {addSuffix: true}),
//   )
//   return formatDistance(subDays(date), new Date(), {addSuffix: true})
// )

const TrendingItems = props => {
  const {videos} = props
  const {
    channelName,
    profileImage,
    id,
    published,
    thumbnail,
    title,
    views,
  } = videos

  return (
    <Box>
      <Row>
        <ThumbNailImg src={thumbnail} alt="thumbnail" />
        <Info>
          <Col>
            <Bold className="heading"> {title}</Bold>
            <Gray>{channelName}</Gray>

            <Row>
              <Gray>{views} views</Gray> <Gray>{published}</Gray>
            </Row>
          </Col>
        </Info>
      </Row>
    </Box>
  )
}

export default TrendingItems

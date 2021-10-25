import {Row, Col, Box, ThumbNailImg} from './styledComponents'

import './index.css'

const GamingItems = props => {
  const {videos} = props
  const {id, thumbnail, title, views} = videos
  //   const {channelName, profileImage} = channel

  return (
    <li className="none" key={id}>
      <Box>
        <div className="center">
          <ThumbNailImg src={thumbnail} alt="thumbnail" />
          <Col>
            <h3>{title}</h3>

            <p>{views} views</p>
          </Col>
        </div>
      </Box>
    </li>
  )
}

export default GamingItems

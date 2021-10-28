import {Link} from 'react-router-dom'
import {Row, Col, Box, ThumbNailImg} from './styledComponents'

import './index.css'

const GamingItems = props => {
  const {videos, textColor} = props
  const {id, thumbnail, title, views} = videos
  //   const {channelName, profileImage} = channel

  return (
    <li className="none" key={id}>
      <Box>
        <div className="center">
          <Link to={`/video/${videos.id}`}>
            <ThumbNailImg src={thumbnail} alt="thumbnail" />
            <Col className={`${textColor}`}>
              <h3>{title}</h3>
              <p className="light-color">{views} Watching Worldwide</p>
            </Col>
          </Link>
        </div>
      </Box>
    </li>
  )
}

export default GamingItems

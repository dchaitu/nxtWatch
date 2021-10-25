import {Row, Col, Box, ThumbNailImg} from './styledComponents'

import './index.css'

const ThumbNail = props => {
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
  //   const {channelName, profileImage} = channel

  //   videos.map(video => ({
  //     title: video.title,
  //     channelName: video.channel.channel_name,
  //     profileImage: video.channel.profile_image_url,
  //     published: video.published_at,
  //     id: video.id,
  //     thumbnail: video.thumbnail_url,
  //     views: video.view_count,
  //   }))
  //   console.log('profileImage: ', channel)
  return (
    <li className="none" key={id}>
      <Box>
        <div className="center">
          <ThumbNailImg src={thumbnail} alt="thumbnail" />
          <Row>
            <img src={profileImage} className="profileImg" alt="profile img" />
            <Col>
              <p className="heading"> {title}</p>
              <p>{channelName}</p>

              <Row>
                <p>{views} views</p> <p>{published}</p>
              </Row>
            </Col>
          </Row>
        </div>
      </Box>
    </li>
  )
}

export default ThumbNail

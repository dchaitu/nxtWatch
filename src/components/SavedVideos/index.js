import {Row, Col, Box, ThumbNailImg, NoVideos} from './styledComponents'
import CartContext from '../../context/CartContext'

import './index.css'

const SavedVideos = props => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      const onClickRemoveAllBtn = () => {
        removeAllCartItems()
      }
      //   const {videos} = props
      //   const {id, thumbnail, title, views} = videos
      //   const {channelName, profileImage} = channel
      // <li className="none" key={id}>
      //   <Box>
      //     <div className="center">
      //       <ThumbNailImg src={thumbnail} alt="thumbnail" />
      //       <Col>
      //         <h3>{title}</h3>

      //         <p>{views} views</p>
      //       </Col>
      //     </div>
      //   </Box>
      // </li>
      return (
        <NoVideos
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
        />
      )
    }}
  </CartContext.Consumer>
)
// }

export default SavedVideos

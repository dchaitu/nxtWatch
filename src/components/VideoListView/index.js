import {Row, Col, Box, ThumbNailImg, NoVideos} from './styledComponents'
import CartContext from '../../context/CartContext'

import './index.css'

import TrendingItems from '../TrendingItems'

const VideoListView = () => (
  <CartContext.Consumer>
    {value => {
      const {videosList} = value

      return (
        <ul className="cart-list">
          {videosList.map(video => (
            <TrendingItems videos={video} />
          ))}
        </ul>
      )
    }}
  </CartContext.Consumer>
)

export default VideoListView

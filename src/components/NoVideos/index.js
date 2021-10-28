// import {Link} from 'react-router-dom'

import './index.css'

const NoVideos = props => {
  const {homeBgClassName, homeTextClassName} = props

  return (
    <div className={`cart-empty-view-container ${homeBgClassName} `}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        className="cart-empty-image"
        alt="no saved videos"
      />
      <h1 className={`cart-empty-heading ${homeTextClassName}`}>
        No saved videos found
      </h1>
    </div>
  )
}
export default NoVideos

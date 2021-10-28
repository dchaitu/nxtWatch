import {MdPlaylistAdd} from 'react-icons/md'
import NoVideos from '../NoVideos'
import Header from '../Header'
import SideBar from '../SideBar'
import {Row, Col, Box, ThumbNailImg} from './styledComponents'
import CartContext from '../../context/CartContext'
import VideoListView from '../VideoListView'
import './index.css'

const SavedVideos = () => (
  <CartContext.Consumer>
    {value => {
      const {videosList, isDarkTheme} = value
      const showEmptyView = videosList.length === 0
      const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

      const homeTextClassName = isDarkTheme
        ? 'home-text-light'
        : 'home-text-dark'

      return (
        <>
          <div className={`cart-container ${homeBgClassName}`}>
            <Header />
            <div className="d-flex flex-row">
              <SideBar />
              {showEmptyView ? (
                <NoVideos
                  homeBgClassName={homeBgClassName}
                  homeTextClassName={homeTextClassName}
                />
              ) : (
                <>
                  <div className="d-flex flex-column">
                    <p className="trend-head">
                      <MdPlaylistAdd color="red" /> Saved Videos
                    </p>
                    <VideoListView />
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
// }

export default SavedVideos

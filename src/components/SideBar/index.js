import {Link} from 'react-router-dom'
import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {MdWhatshot, MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import './index.css'
import SideBarRow from '../SideBarRow'
import {Row, Col, Box, ImgIcon, Space} from './styledComponents'
import CartContext from '../../context/CartContext'

class SideBar extends Component {
  state = {
    homeSelect: false,
    trendingSelect: false,
    gamingSelect: false,
    savedSelect: false,
  }

  click = event => {
    console.log(event.target)
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const homeBgClassName = isDarkTheme ? 'sidebar-dark' : 'home-bg-light'
          const homeTextClassName = isDarkTheme
            ? 'home-text-light'
            : 'home-text-dark'
          return (
            <Space className={`${homeBgClassName}`}>
              <div className={` height ${homeTextClassName}`}>
                <Link to="/">
                  <SideBarRow
                    id="Home"
                    //   selected
                    onClick={this.click}
                    checkSelected={this.click}
                    Icon={AiFillHome}
                    title="Home"
                    selected={`${homeTextClassName}`}
                  />
                </Link>
                <Link to="/trending">
                  <SideBarRow
                    trendingSelect
                    onClick={this.click}
                    checkSelected={this.click}
                    Icon={MdWhatshot}
                    title="Trending"
                    selected={`${homeTextClassName}`}
                  />
                </Link>
                <Link to="/gaming">
                  <SideBarRow
                    onClick={this.click}
                    checkSelected={this.click}
                    Icon={SiYoutubegaming}
                    title="Gaming"
                    selected={`${homeTextClassName}`}
                  />
                </Link>
                <Link to="/saved-videos">
                  <SideBarRow
                    onClick={this.click}
                    checkSelected={this.click}
                    Icon={MdPlaylistAdd}
                    title="Saved videos"
                    selected={`${homeTextClassName}`}
                  />
                </Link>
              </div>
              <div className={`m-4 ${homeTextClassName}`}>
                <p className="bold">CONTACT US</p>
                <ImgIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ImgIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ImgIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
                <p>Enjoy! Now to see your channels and recommendations</p>
              </div>
            </Space>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default SideBar

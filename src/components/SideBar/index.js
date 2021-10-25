import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {MdWhatshot, MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import './index.css'
import SideBarRow from '../SideBarRow'
import {Row, Col, Box, ImgIcon, Space} from './styledComponents'

const SideBar = () => (
  <Space>
    <div className="height">
      <Link to="/">
        <SideBarRow selected Icon={AiFillHome} title="Home" />
      </Link>
      <Link to="/trending">
        <SideBarRow Icon={MdWhatshot} title="Trending" />
      </Link>
      <Link to="/gaming">
        <SideBarRow Icon={SiYoutubegaming} title="Gaming" />
      </Link>
      <Link to="/saved-videos">
        <SideBarRow Icon={MdPlaylistAdd} title="Saved videos" />
      </Link>
    </div>
    <div>
      <h3>CONTACT US</h3>
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

export default SideBar

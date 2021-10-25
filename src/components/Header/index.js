import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {FiSun} from 'react-icons/fi'
import {
  Background,
  Rules,
  ModalContainer,
  Row,
  PopupContainer,
  Buttons,
} from './styledComponents'
import CartContext from '../../context/CartContext'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="light img"
        />
        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <FiSun className="sun" />
          </Link>
          <Link to="/products" className="nav-link">
            <img
              className="profile"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
          </Link>
        </ul>
        {/* // <button type="button" className="trigger-button">
            //   Logout
            // </button> */}
        <Popup
          modal
          trigger={
            <button
              type="button"
              onClick={onClickLogout}
              //   className="logout-desktop-btn btn btn-outline-primary"
              className="btn btn-outline-primary"
            >
              Logout
            </button>
          }
        >
          {close => (
            <ModalContainer>
              <p>Are you sure you want to logout?</p>

              <Buttons>
                <button
                  type="button"
                  className="btn btn-outline-primary m-3"
                  onClick={() => close()}
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={onClickLogout}
                  className="btn btn-primary m-3"
                >
                  Confirm
                </button>
              </Buttons>
            </ModalContainer>
          )}
        </Popup>

        {/* <button
          type="button"
          onClick={onClickLogout}
          className="logout-mobile-btn"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button> */}
      </div>
    </nav>
  )
}
export default withRouter(Header)

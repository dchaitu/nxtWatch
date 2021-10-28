import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
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

const Header = props => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        console.log('isDarkTheme', isDarkTheme)
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const themeImageURL = isDarkTheme ? (
        <FiSun color="white" size={40} />
      ) : (
        <FaMoon size={40} />
      )
      const HeaderColor = isDarkTheme ? 'header-dark' : 'header-light'

      const websiteLogoImageURL = !isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

      return (
        <nav className={`${HeaderColor}`}>
          <div className="nav-content">
            <img
              className="website-logo"
              src={websiteLogoImageURL}
              alt="light img"
            />
            <ul className="nav-icons">
              <button
                data-testid="theme"
                className="theme-button"
                type="button"
                onClick={onToggleTheme}
              >
                {themeImageURL}
              </button>
              <Link to="/" className="nav-link">
                <img
                  className="profile"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </Link>
            </ul>

            <Popup
              modal
              trigger={
                <button
                  type="button"
                  onClick={onClickLogout}
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
          </div>
        </nav>
      )
    }}
  </CartContext.Consumer>
)
export default withRouter(Header)

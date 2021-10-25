import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'

import './index.css'

const LIGHT_IMG =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const DARK_IMG =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMessage: '',
    type: 'password',
    notChecked: true,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    console.log(errorMessage)
    this.setState({
      showSubmitError: true,
      errorMessage: "Username and Password didn't match",
    })
  }

  showPassword = event => {
    const {notChecked} = this.state
    console.log('event', event)
    this.setState(prevState => ({notChecked: !prevState.notChecked}))
    if (notChecked === true) {
      this.setState({type: 'text'})
    } else this.setState({type: 'password'})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <br />
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, type} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <br />
        <input
          type={type}
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMessage, notChecked} = this.state
    const jwtToken = Cookies.get('jwt_token')
    console.log('notChecked: ', notChecked)
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <>
        <div className="backgroundImg">
          <div className="box align-items-center p-5">
            <div className="d-flex justify-content-center signIn">
              <img src={LIGHT_IMG} className="img" alt="light img" />
            </div>
            <div>
              <form className="form-container" onSubmit={this.submitForm}>
                <div className="input-container">
                  {this.renderUsernameField()}
                </div>
                <div className="input-container">
                  {this.renderPasswordField()}
                </div>
                <input
                  type="checkbox"
                  id="password"
                  onClick={this.showPassword}
                  name="password"
                />
                <label htmlFor="password"> Show Password</label>
                {showSubmitError && (
                  <p className="error-message">*{errorMessage}</p>
                )}
                <div className="d-flex justify-content-center">
                  <button type="submit" className="login-button">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Login

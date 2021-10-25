import {Component} from 'react'
import {Background, Col, Button} from './styledComponents'

export default class Banner extends Component {
  render() {
    return (
      <Background>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="light img"
        />
        <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
        <Button>Get it Now</Button>
      </Background>
    )
  }
}

import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {Background, Col, Button} from './styledComponents'

export default class Banner extends Component {
  state = {
    closeButton: false,
  }

  clickClose = () => {
    this.setState({closeButton: true})
  }

  render() {
    const {closeButton} = this.state
    return (
      <>
        {!closeButton && (
          <Background data-testid="banner">
            <div className="d-flex flex-row justify-content-between">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="light img"
              />
              <IoMdClose
                size={30}
                className="float-right"
                onClick={this.clickClose}
              />
            </div>
            <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
            <Button>GET IT NOW</Button>
            {/* {showResults ? <Results /> : null} */}
          </Background>
        )}
      </>
    )
  }
}

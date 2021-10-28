import {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import SideBar from './components/SideBar'

import Main from './components/Main'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import Login from './components/Login'
import SavedVideos from './components/SavedVideos'
import VideoItem from './components/VideoItem'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import CartContext from './context/CartContext'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  state = {
    videosList: [],
    isDarkTheme: false,
  }

  toggleTheme = () => {
    const {isDarkTheme} = this.state
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
    console.log('isDarkTheme: ', isDarkTheme)
  }

  addCartItem = product => {
    const {videosList} = this.state
    const updatedCartList = [...videosList, product]
    this.setState({videosList: updatedCartList})
  }

  render() {
    const {videosList, isDarkTheme} = this.state
    return (
      <BrowserRouter>
        <CartContext.Provider
          value={{
            videosList,
            isDarkTheme,
            addCartItem: this.addCartItem,
            toggleTheme: this.toggleTheme,
          }}
        >
          <Header />
          <div className="d-flex flex-row">
            <SideBar />
            <Switch>
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/main" component={Main} />
              <ProtectedRoute exact path="/trending" component={Trending} />
              <ProtectedRoute exact path="/gaming" component={Gaming} />
              <ProtectedRoute exact path="/video/:id" component={VideoItem} />
              <ProtectedRoute
                exact
                path="/saved-videos"
                component={SavedVideos}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </CartContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App

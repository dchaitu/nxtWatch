import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import Login from './components/Login'
import SavedVideos from './components/SavedVideos'
import VideoItem from './components/VideoItem'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/trending" component={Trending} />
      <ProtectedRoute exact path="/gaming" component={Gaming} />
      <ProtectedRoute exact path="/video/:id" component={VideoItem} />
      <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App

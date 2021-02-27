import React from 'react';
import '../../stylesheets/App.css';

import NavBarContainer from '../nav_bar/nav_bar_container'
// import ChirpIndexContainer from '../chirps/chirp_index_container'
import SignupContainer from '../session/signup_container'
import LoginContainer from '../session/login_container'
import HomeContainer from '../home/home_container'

import { Route } from 'react-router-dom'
import { AuthRoute } from '../../utils/route_util'

const App = () => {

  return (
    <div>
      <Route path="/" component={NavBarContainer} />
      <Route exact path="/" component={HomeContainer} />
      {/* <ProtectedRoute exact path="/chirps" component={ChirpIndexContainer} /> */}
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />
    </div>
  )
}

export default App;

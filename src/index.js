import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import AppContainer from './components/app/app_container';
import createStore from './store/store';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history'

import { fetchCurrentUser } from './actions/session_actions'

const axios = require('axios').default
if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = 'https://frontend-auth-api.herokuapp.com'
  // axios.defaults.baseURL = 'http://0.0.0.0:3000'
} else {
  axios.defaults.baseURL = 'http://localhost:3000'
}
axios.defaults.withCredentials = true

const store = createStore()
export const history = createBrowserHistory()

// ? what, if any, are the issues with only rendering after the current user has been fetched?
// other options: have routes that render based on whether or not a request is pending
// i.e. IF a redirect is gonna happen, the redirect won't be rendered until
// the request is back, so we won't lose the url from which we want to redirect
// which is good news cause then we can just render the updated content
// post request (eg. username, different nav bar links)
// benefit to doing this is that the user doesn't have to sit and stare at a blank page
// for a while if the request is held up??

fetchCurrentUser()(store.dispatch)
.then(
  msg => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <Router history={history}>
            <AppContainer />
          </Router>
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    )
  },
  err => {
    console.log('error fetching current user')
  }
)

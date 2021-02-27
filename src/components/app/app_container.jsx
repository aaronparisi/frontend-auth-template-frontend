import React from 'react'
import { connect } from 'react-redux'
import App from './app'
import { getCurrentUser } from '../../utils/session_util'
import { fetchCurrentUser } from '../../actions/session_actions'

// no state

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser())
  }
}

export default connect(null, mapDispatchToProps)(App)
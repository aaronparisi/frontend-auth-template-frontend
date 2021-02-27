import { connect } from 'react-redux'
import App from './app'
import { fetchCurrentUser } from '../../actions/session_actions'

// no state

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser())
  }
}

export default connect(null, mapDispatchToProps)(App)
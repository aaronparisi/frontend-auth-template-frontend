import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

const _nullSession = {
  currentUser: null
}

const sessionsReducer = (state = _nullSession, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      // previous state is irrelevant
      return Object.assign({}, {currentUser: action.user})
    case LOGOUT_CURRENT_USER:
      // simply clear the current user
      return _nullSession
    default:
      return state;
  }
}

export default sessionsReducer
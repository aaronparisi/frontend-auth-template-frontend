import * as sessionApiUtil from '../utils/session_util'
import { history } from '../index' // ! where do I save this?

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

// thunk stuff - will be exported to containers

export const createNewUser = formUser => dispatch => {
  return sessionApiUtil.postUser(formUser)
  .then(
    newUser => {
      dispatch(receiveCurrentUser(newUser.data))
      history.push('/')  // todo specify post sign up redirect
      // return newUser
    },
    err => {
      return Promise.reject(err)
    }
  )
}

export const login = formUser => dispatch => {
  return sessionApiUtil.postSession(formUser)
  .then(
    curUser => {
      dispatch(receiveCurrentUser(curUser.data))
      history.push('/')  // todo specify post login redirect
      // return curUser
    },
    err => {
      return Promise.reject(err)
    }
  )
}

export const logout = () => dispatch => {
  console.log('about to log out')
  return sessionApiUtil.deleteSession()
  .then(
    logoutMsg => {  // does the msg from sessions controller even get returned?
      console.log(`returned from delete api call with message: ${logoutMsg}`)
      dispatch(logoutCurrentUser())
      history.push('/login')
    },
    err => {
      console.log('error with api delete')
      console.log(err)
    }
  )
}

export const fetchCurrentUser = () => dispatch => {
  return sessionApiUtil.getCurrentUser()
  .then(
    currentUser => {
      if (currentUser.data !== '') {
        dispatch(receiveCurrentUser(currentUser.data))
      }
      return currentUser
    },
    err => {
      console.log('error fetching current user')
    }
  )
}
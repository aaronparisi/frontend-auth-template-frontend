import axios from "axios"

export const getCurrentUser = () => {
  return axios({
    method: 'get',
    url: '/api/users/current-user',
    withCredentials: 'include'
  })
}

// create a new user
export const postUser = user => {
  return axios({
    method: 'post',
    url: '/api/users',
    data: { user },
    withCredentials: 'include'
  })
}

// log a user in (create a session)
export const postSession = user => {
  return axios({
    method: 'post',
    url: '/api/session',
    data: { user },
    withCredentials: 'include'
  })
}

// log out a user (delete a session)
export const deleteSession = () => {
  console.log('about to make axios delete request')
  return axios({
    method: 'delete',
    url: '/api/session'
  })
}
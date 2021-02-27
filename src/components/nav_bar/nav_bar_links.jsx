import React from 'react'
import { Link } from 'react-router-dom';

export const SignInLinks = () => {
  return (
    <div>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </div>
  )
}

export const SignOutLinks = ({ username, logout }) => {
  return (
    <div>
      <p>Hello, {username}</p>
      <button className="btn" onClick={logout}>Log Out</button>
    </div>
  )
}
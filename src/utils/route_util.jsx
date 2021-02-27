import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  }
}

const RootRedirect = () => {
  return <Redirect to="/" />
}
const LoginRedirect = () => {
  return <Redirect to="/login" />
}

const CustomBool = ({ trueComponent: TrueComponent, falseComponent: FalseComponent, path, truthVal, exact  }) => {
  return (
    <Route path={path} exact={exact} render={(props) => {
      return truthVal ? (
        <TrueComponent {...props} />
      ) : (
        <FalseComponent {...props} />
      )
    }}/>
  )
}

const LoggedInBool = ({ trueComponent: TrueComponent, falseComponent: FalseComponent, path, loggedIn, exact }) => {
  return CustomBool({ trueComponent: TrueComponent, falseComponent: FalseComponent, truthVal: loggedIn, path, exact})
}

// * auth and protected are special types of logged bool routes,
// * where one component is s

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return LoggedInBool({ trueComponent: RootRedirect, falseComponent: Component, path, loggedIn, exact })
}

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return LoggedInBool({ trueComponent: Component, falseComponent: LoginRedirect, path, loggedIn, exact })
}

export const CustomBoolRoute = withRouter(connect(null, null)(CustomBool))

export const LoggedInBoolRoute = withRouter(connect(mapStateToProps)(LoggedInBool))  // ? necessary?

// true component is a redirect, i.e. only accessible if logged OUT
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth))

// false component is a redirect, i.e. only accessible if logged IN
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))
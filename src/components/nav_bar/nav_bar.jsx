import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LoggedInBoolRoute } from '../../utils/route_util'
import { SignInLinks, SignOutLinks } from './nav_bar_links'

class NavBar extends React.Component {
  constructor({ currentUser, logout }) {
    super({ currentUser, logout })  // ? why am i getting a warning here?

    this.callSignInLinks = this.callSignInLinks.bind(this)
    this.callSignOutLinks = this.callSignOutLinks.bind(this)
  }

  callSignInLinks() {
    return <SignInLinks />
  }

  callSignOutLinks() {
    return <SignOutLinks username={this.props.currentUser.username} logout={this.props.logout}/>
  }

  render() {
    return (
      <header className="nav-bar">
        <Link className="btn" to="/">Home</Link>
        {/* <Link className="btn" to="/chirps">CHIRPS</Link> */}
        <div>
          <LoggedInBoolRoute trueComponent={this.callSignOutLinks} falseComponent={this.callSignInLinks} path="/"/>
        </div>
      </header>
    );
  }
};

export default withRouter(NavBar)
import React from 'react'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'fake_user',
      email: 'fake@user.com',
      password: 'password'
    }

    this.handleInput = this.handleInput.bind(this)
  }
  
  handleInput(e, type) {
    this.setState({
      [type]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.login(this.state)
  }

  render() {
    return (
      <div className="session-form">
        <h2>Log In</h2>
        <form
          onSubmit={e => this.handleSubmit(e)}
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={this.state.username}
            id="username"
            placeholder="John Doe"
            onChange={e => this.handleInput(e, "username")}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={this.state.email}
            id="email"
            placeholder="john@doe.com"
            onChange={e => this.handleInput(e, "email")}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={this.state.password}
            id="password"
            onChange={e => this.handleInput(e, "password")}
          />

          <input
            type="submit"
            value="Log In!"
          />
        </form>
      </div>
    )
  }
}

export default Login
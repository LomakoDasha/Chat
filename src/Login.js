import React, { Component } from 'react';

class Login extends Component {
    login = (e) => {
        e.preventDefault()
        this.props.setFrom(e.target.from.value)
    }

  render () {
    return (
    <div id="login">
      <form onSubmit={this.login}>
          <label>Username:</label><br/>
          <input type="text" id="from" /><br/>
          <input type="submit" value="Log In" />
      </form>
    </div>
    )
  }
  
}

export default Login;
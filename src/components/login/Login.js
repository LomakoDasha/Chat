import React, { Component } from 'react';

class Login extends Component {
    login = (e) => {
        e.preventDefault()
        const username = e.target.from.value
        this.props.setFrom(username)
        localStorage.setItem("username", username);
    }

  render () {
    return (
    <div id="login" className="d-flex justify-content-center align-items-center flex-row">
      <form onSubmit={this.login}>
        <h3 className="h3 mb-3 font-weight-normal">Please log in</h3>
        <div className="form-group">
          <label>Username:</label>
          <input 
            type="text"
            id="from"
            className="form-control"
            name="username"
            placeholder="Enter username"
          />
        </div>
          
        <button 
          type="submit"
          className="btn btn-lg btn-primary btn-block">
            Log in
        </button>
        </form>
    </div>
    )
  }
  
}

export default Login;
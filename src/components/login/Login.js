import React, { Component } from 'react';

class Login extends Component {
    login = (e) => {
        e.preventDefault()
        const username = e.target.usernameInput.value
        this.props.setFrom(username)
        localStorage.setItem("username", username);
    }

  render () {
    return (
      <div className="container h-100 w-70 mt-5">
        <div className="row justify-content-center align-items-center">
          <form className="col-5  mt-5" onSubmit={this.login}>
            <h3 className="h3 mt-5 mb-3 font-weight-normal" align="center">Please log in</h3>
            <div className="form-group">
              <label>Username:</label>
              <input 
                type="text"
                id="usernameInput"
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
      </div>
    )
  }
  
}

export default Login;
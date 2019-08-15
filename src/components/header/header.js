import React, { Component } from 'react';
import headerStyles from './header.module.css';
class Header extends Component {
    logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("username")
        window.location = 'Chat/src/components/login/Login.js';
    } 

  render () {
    return (
      <header className={headerStyles.header}>
          <h1 className={headerStyles.header__title}>Chat</h1>
          <button className={headerStyles.header__button} onClick={this.logOut}>Log out</button>
      </header>
    )
  }
  
}

export default Header;
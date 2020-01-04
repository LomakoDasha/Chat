import React, { Component } from 'react';
import headerStyles from './header.module.css';
import Button from '@material-ui/core/Button';

class Header extends Component {
  logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('username');
    window.location = 'Chat/src/components/login/Login.js';
  }

  render() {
    return (
      <header className={headerStyles.header}>
        <h1 className={headerStyles.header__title}>Chat</h1>
        <Button variant="contained" color="primary" size="medium" onClick={this.logOut}>
          Log out
          </Button>
      </header>
    )
  }

}

export default Header;
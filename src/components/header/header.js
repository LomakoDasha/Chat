import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import styles from './header.module.css';

class Header extends Component {
  logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('username');
    const { removeFrom } = this.props;
    removeFrom();
  }

  render() {
    return (
      <header className={styles.header}>
        <h1 className={styles.header__title}>Chat</h1>
        <Button variant="contained" color="primary" size="medium" onClick={this.logOut}>
          Log out
        </Button>
      </header>
    )
  }
}

export default Header;
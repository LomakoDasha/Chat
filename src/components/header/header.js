import React, { Component } from 'react';

import headerStyles from './header.module.css'

class Header extends Component {
  render () {
    return (
      <header className={headerStyles.header}>
          <h1 className={headerStyles.header__title}>Chat</h1>
          <button className={headerStyles.header__button}>Log out</button>
      </header>
    )
  }
  
}

export default Header;
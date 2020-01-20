import React, { Component } from 'react';

import Login from './components/login/Login'
import MessagingPanel from './components/messagingPanel/MessagingPanel'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: JSON.parse(localStorage.getItem('username')),
    };
  }

  setFrom = (from) => {
    this.setState({ from });
  }

  render() { 
    return (
      <div>
        {
          !this.state.from
            ? <Login setFrom={this.setFrom} />
            : <MessagingPanel from={this.state.from.username} />
        }
      </div>
    );
  }
}

export default App;

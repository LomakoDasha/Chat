import React, { Component } from 'react';

import Login from './components/login/Login'
import MessagingPanel from './components/messagingPanel/MessagingPanel'

class App extends Component {
  state = {
    from: JSON.parse(localStorage.getItem('username'))
  }

  setFrom = (from) => {
    this.setState({ from });
    console.log('from', from)
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

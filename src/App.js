import React, { Component } from 'react';

import Login from './Login'
import MessagingPanel from './MessagingPanel'

class App extends Component {
  state = {
    from: localStorage["username"]
  }

  setFrom = (from) => {
    this.setState({from})
    console.log(from)
  }

  render () {
    return (
      <div className="App">
      {
        !this.state.from ?
          <Login setFrom={this.setFrom}/>
          :
          <MessagingPanel from={this.state.from}/>
      }
      
      </div>
    );
  }
  
}

export default App;

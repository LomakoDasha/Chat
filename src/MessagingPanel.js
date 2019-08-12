import React, { Component } from 'react';

import DisplayConversation from './DisplayConversation';

class MessagingPanel extends Component {
    state = {
        messages: []
    }

    connection = new WebSocket('wss://wssproxy.herokuapp.com/')

    componentDidMount() {
        this.connection.onmessage = (message) => {
            const data = JSON.parse(message.data)
            this.setState({messages: [...this.state.messages, data]})
        }
    }

  render () {
    return (
      <>
        <DisplayConversation messages={this.state.messages}/>
      </>
    )
  }
  
}

export default MessagingPanel;
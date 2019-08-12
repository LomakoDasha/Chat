import React, { Component } from 'react';

import DisplayConversation from './DisplayConversation';
import MessagingBox from './MessagingBox';

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

    getMessage = (message) => {
        const data = {from: "Dasha", message: message}
        console.log(data)
        this.connection.send(JSON.stringify(data))
        // this.setState({messages: [...this.state.messages, message]})
    }

  render () {
    return (
      <>
        <DisplayConversation messages={this.state.messages}/>
        <MessagingBox getMessage={this.getMessage}/>
      </>
    )
  }
  
}

export default MessagingPanel;
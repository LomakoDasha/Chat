import React, { Component } from 'react';

import Header from '../header/header'
import DisplayConversation from './conversation/DisplayConversation';
import MessagingBox from './messagingBox/MessagingBox';

class MessagingPanel extends Component {
    state = {
        messages: []
    }

    connection = new WebSocket('ws://st-chat.shas.tel')

    componentDidMount() {
        this.connection.onmessage = (message) => {
            const data = JSON.parse(message.data)
            this.setState({messages: [...this.state.messages, data]})
        }
    }

    getMessage = (message) => {
        const data = {from: this.props.from, message: message}
        console.log(data)
        this.connection.send(JSON.stringify(data))
        // this.setState({messages: [...this.state.messages, message]})
    }

  render () {
    return (
      <>
        <Header />
        <DisplayConversation messages={this.state.messages}/>
        <MessagingBox getMessage={this.getMessage}/>
      </>
    )
  }
  
}

export default MessagingPanel;
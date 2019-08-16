import React, { Component } from 'react';

import Header from '../header/header'
import DisplayConversation from './conversation/DisplayConversation';
import MessagingBox from './messagingBox/MessagingBox';
import MessagePanelStyles from './Panel.module.css';

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
    }

  render () {
    return (
      <div className={MessagePanelStyles.app}>
        <Header  className={MessagePanelStyles.header} />
        <DisplayConversation className={MessagePanelStyles.conversation} messages={this.state.messages}/>
        <MessagingBox className={MessagePanelStyles.messageBox} getMessage={this.getMessage}/>
      </div>
    )
  }
  
}

export default MessagingPanel;
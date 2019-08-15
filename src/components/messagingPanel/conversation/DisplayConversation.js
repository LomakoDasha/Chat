import React, { Component } from 'react';
import DisplayConversationStyles from './Conversation.module.css';

class DisplayConversation extends Component {

    displayMessage = (items) => items.map(item => <div key={item.id}>{item.from}: {item.message}</div>)

  render () {
    console.log("receive")
    console.log(this.props.messages)
    return (
      <div id="displayConversation" className={ DisplayConversationStyles.container }>
        { this.props.messages.map(items => this.displayMessage(items.reverse())) }
      </div>
    )
  }
  
}

export default DisplayConversation;
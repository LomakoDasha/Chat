import React, { Component } from 'react';
import DisplayConversationStyles from './Conversation.module.css';

class DisplayConversation extends Component {
  

    displayMessage = (items) => items.map(item => {
      if(item.from === localStorage.getItem("username")) {
        return (
          <div key={item.id} className={DisplayConversationStyles.myMessage}>
          <h3 className={DisplayConversationStyles.username}>{item.from}: <span className={DisplayConversationStyles.time}>{item.time}</span></h3>
          <p className={DisplayConversationStyles.messageText}>{item.message}</p>
        </div>
        )
      } else {
        return (
        <div key={item.id} className={DisplayConversationStyles.otherMessage}>
          <h3 className={DisplayConversationStyles.username}>{item.from}: <span className={DisplayConversationStyles.time}>{item.time}</span></h3>
          <p className={DisplayConversationStyles.messageText}>{item.message}</p>
        </div>
        )
      }  
    })

  render () {
    console.log("receive")
    console.log(this.props.messages)
    return (
      <div id="displayConversation" className={DisplayConversationStyles.container}>
        { this.props.messages.map(items => this.displayMessage(items.reverse())) }
      </div>
    )
  }
  
}

export default DisplayConversation;
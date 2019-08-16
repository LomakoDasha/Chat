import React, { Component } from 'react';
import DisplayConversationStyles from './Conversation.module.css';

class DisplayConversation extends Component {
  displayDate = (date) => {
    let d = new Date(date);
    return d.getDate() + '.' + (d.getMonth()+1) + '.' + d.getFullYear() + ' in ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
  }

    displayMessage = (items) => items.map(item => {
      if(item.from === localStorage.getItem("username")) {
        return (
          <div key={item.id} className={DisplayConversationStyles.myMessage}>
          <h3 className={DisplayConversationStyles.username}>{item.from}: <span className={DisplayConversationStyles.time}>{this.displayDate(item.time)}</span></h3>
          <p className={DisplayConversationStyles.messageText}>{item.message}</p>
        </div>
        )
      } else {
        return (
        <div key={item.id} className={DisplayConversationStyles.otherMessage}>
          <h3 className={DisplayConversationStyles.username}>{item.from}: <span className={DisplayConversationStyles.time}>{this.displayDate(item.time)}</span></h3>
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
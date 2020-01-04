import React, { Component } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import DisplayConversationStyles from './Conversation.module.css';

class DisplayConversation extends Component {
  displayDate = (date) => {
    let d = new Date(date);
    return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear() + ' in ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
  }

  displayMessage = (items) => items.map(item => {
    if (item.from === JSON.parse(localStorage.getItem('username')).username) {
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

  render() {
    console.log("receive this.props.messages", this.props.messages)
    return (
      <ScrollToBottom className={DisplayConversationStyles.wrapper}>
        <div id="displayConversation" className={DisplayConversationStyles.container}>
          {this.props.messages.map(items => this.displayMessage(items.reverse()))}
        </div>
      </ScrollToBottom>
    )
  }

}

export default DisplayConversation;
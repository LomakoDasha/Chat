import React, { Component } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import PropTypes from 'prop-types';
import moment from 'moment';

import DisplayConversationStyles from './Conversation.module.css';

class DisplayConversation extends Component {
  displayMessage = (items) => items.map(item => {
    if (item.from === JSON.parse(localStorage.getItem('username')).username) {
      return (
        <div key={item.id} className={DisplayConversationStyles.myMessage}>
          <h3 className={DisplayConversationStyles.username}>{item.from}: <span className={DisplayConversationStyles.time}>{moment.unix(item.time / 1000).format('DD MMM YYYY, hh:mm:ss a')}</span></h3>
          <p className={DisplayConversationStyles.messageText}>{item.message}</p>
        </div>
      )
    } else {
      return (
        <div key={item.id} className={DisplayConversationStyles.otherMessage}>
          <h3 className={DisplayConversationStyles.username}>{item.from}: <span className={DisplayConversationStyles.time}>{moment.unix(item.time / 1000).format('DD MMM YYYY, hh:mm:ss a')}</span></h3>
          <p className={DisplayConversationStyles.messageText}>{item.message}</p>
        </div>
      )
    }
  })

  render() {
    console.log("typeof this.props.messages", typeof this.props.messages)
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

DisplayConversation.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default DisplayConversation;
import React, { Component } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import PropTypes from 'prop-types';
import moment from 'moment';

import DisplayConversationStyles from './Conversation.module.css';

class DisplayConversation extends Component {
  displayMessage(data, index) {
    const reverseIndex = data.length - 1 - index;
    if (data[reverseIndex].from === JSON.parse(localStorage.getItem('username')).username) {
      return (
        <div key={data[reverseIndex].id} className={DisplayConversationStyles.myMessage}>
          <h3 className={DisplayConversationStyles.username}>{data[reverseIndex].from}: <span className={DisplayConversationStyles.time}>{moment.unix(data[reverseIndex].time / 1000).format('DD MMM YYYY, hh:mm:ss a')}</span></h3>
          <p className={DisplayConversationStyles.messageText}>{data[reverseIndex].message}</p>
        </div>
      )
    } else {
      return (
        <div key={data[reverseIndex].id} className={DisplayConversationStyles.otherMessage}>
          <h3 className={DisplayConversationStyles.username}>{data[reverseIndex].from}: <span className={DisplayConversationStyles.time}>{moment.unix(data[reverseIndex].time / 1000).format('DD MMM YYYY, hh:mm:ss a')}</span></h3>
          <p className={DisplayConversationStyles.messageText}>{data[reverseIndex].message}</p>
        </div>
      )
    }
  }

  render() {
    const { messages } = this.props;
    return (
      <ScrollToBottom className={DisplayConversationStyles.wrapper}>
        <div id="displayConversation" className={DisplayConversationStyles.container}>
          { messages.map((item, index) => this.displayMessage(messages, index)) }
        </div>
      </ScrollToBottom>
    )
  }
}

DisplayConversation.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DisplayConversation;
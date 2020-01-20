import React, { Component } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import PropTypes from 'prop-types';

import styles from './Conversation.module.css';
import Message from './Message';

class DisplayConversation extends Component {
  render() {
    const { username, messages } = this.props;
    
    return (
      <ScrollToBottom className={styles.wrapper}>
        <div id="displayConversation" className={styles.container}>
          { messages.map((item, index) => Message(messages, item, index, username)) }
        </div>
      </ScrollToBottom>
    )
  }
}

DisplayConversation.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DisplayConversation;
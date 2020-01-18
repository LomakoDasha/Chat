import React, { Component } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import PropTypes from 'prop-types';

import DisplayConversationStyles from './Conversation.module.css';
import Message from './Message';

class DisplayConversation extends Component {
  render() {
    const { messages } = this.props;
    return (
      <ScrollToBottom className={DisplayConversationStyles.wrapper}>
        <div id="displayConversation" className={DisplayConversationStyles.container}>
          { messages.map((item, index) => Message(messages, item, index)) }
        </div>
      </ScrollToBottom>
    )
  }
}

DisplayConversation.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DisplayConversation;
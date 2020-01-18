import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import DisplayConversationStyles from './Conversation.module.css';

function Message(data, item, index) {
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

export default Message;

Message.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  item: PropTypes.shape({
    time: PropTypes.number,
    id: PropTypes.string,
    from: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
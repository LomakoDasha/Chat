import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Avatar } from '@material-ui/core';

import styles from './Conversation.module.css';

function Message(data, item, index, username) {
  const reverseIndex = data.length - 1 - index;
  if (data[reverseIndex].from === username) {
    return (
      <div key={data[reverseIndex].id} className={styles.myMessage}>
        <div className={styles.messageWrapper}>
          <div className={styles.usernameWrapper}>
            <Avatar>{(data[reverseIndex].from).substr(0, 1).toUpperCase()}</Avatar>
            <h3 className={styles.username}>{data[reverseIndex].from}</h3>
          </div>
          <span className={styles.time}>{moment.unix(data[reverseIndex].time / 1000).format('DD MMM YYYY, hh:mm:ss a')}</span>
        </div>
        <p className={styles.messageText}>{data[reverseIndex].message}</p>
      </div>
    )
  } else {
    return (
      <div key={data[reverseIndex].id} className={styles.otherMessage}>
        <div className={styles.messageWrapper}>
          <div className={styles.usernameWrapper}>
            <Avatar>{(data[reverseIndex].from).substr(0, 1).toUpperCase()}</Avatar>
            <h3 className={styles.username}>{data[reverseIndex].from}</h3>
          </div>
          <span className={styles.time}>{moment.unix(data[reverseIndex].time / 1000).format('DD MMM YYYY, hh:mm:ss a')}</span>
        </div>
        <p className={styles.messageText}>{data[reverseIndex].message}</p>
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
  username: PropTypes.string.isRequired,
};
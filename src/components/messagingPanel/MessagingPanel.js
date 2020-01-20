import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReconnectingWebSocket from 'reconnecting-websocket';
import { connect } from 'react-redux';

import { addMessages } from '../../store/actions/actionCreator';
import Header from '../header/header'
import DisplayConversation from './conversation/DisplayConversation';
import MessagingBox from './messagingBox/MessagingBox';
import Notifications from './notifications/Notifications';
import styles from './Panel.module.css';

class MessagingPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blured: false,
    };
  }

  connection = new ReconnectingWebSocket('ws://st-chat.shas.tel', null, { reconnectInterval: 3000 });

  componentDidMount() {
    Notification.requestPermission().then(() => {
    });

    window.onblur = () => {
      this.setState({ blured: true });
    };

    window.onfocus = () => {
      this.setState({ blured: false });
    };

    this.connection.onmessage = (message) => {
      const data = JSON.parse(message.data);
      const { addMessages } = this.props;
      addMessages(data);

      if (this.state.blured) {
        Notifications(data[0]);
      }
    }
  }

  getMessage = (message) => {
    const data = { from: this.props.from, message: message };
    this.connection.send(JSON.stringify(data));
  }

  render() {
    const { from, messages } = this.props;
    
    return (
      <div className={styles.app}>
        <Header className={styles.header} />
        <DisplayConversation className={styles.conversation} username={from} messages={messages.messages} />
        <MessagingBox className={styles.messageBox} getMessage={this.getMessage} />
      </div>
    )
  }
}

export default connect((state) => ({
  messages: state.messages,
}), { addMessages })(MessagingPanel);

MessagingPanel.propTypes = {
  messages: PropTypes.objectOf(PropTypes.array),
  addMessages: PropTypes.func.isRequired,
};

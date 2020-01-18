import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReconnectingWebSocket from 'reconnecting-websocket';
import { connect } from 'react-redux';

import { addMessages } from '../../store/actions/actionCreator';
import Header from '../header/header'
import DisplayConversation from './conversation/DisplayConversation';
import MessagingBox from './messagingBox/MessagingBox';
import Notifications from './notifications/Notifications';
import MessagePanelStyles from './Panel.module.css';

class MessagingPanel extends Component {
  blured = false;

  connection = new ReconnectingWebSocket('ws://st-chat.shas.tel', null, { reconnectInterval: 3000 });

  componentDidMount() {
    Notification.requestPermission().then(() => {
    });

    window.onblur = () => {
      this.blured = true;
    };

    window.onfocus = () => {
      this.blured = false;
    };

    this.connection.onmessage = (message) => {
      const data = JSON.parse(message.data);
      const { addMessages } = this.props;
      addMessages(data);

      if (this.blured) {
        Notifications(data[0]);
      }
    }
  }

  getMessage = (message) => {
    const data = { from: this.props.from, message: message };
    this.connection.send(JSON.stringify(data));
  }

  render() {
    const { messages } = this.props.messages;
    return (
      <div className={MessagePanelStyles.app}>
        <Header className={MessagePanelStyles.header} />
        <DisplayConversation className={MessagePanelStyles.conversation} messages={ messages } />
        <MessagingBox className={MessagePanelStyles.messageBox} getMessage={ this.getMessage } />
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header'
import DisplayConversation from './conversation/DisplayConversation';
import MessagingBox from './messagingBox/MessagingBox';
import Notifications from './notifications/Notifications';
import MessagePanelStyles from './Panel.module.css';

class MessagingPanel extends Component {
  blured = false;
  state = {
    messages: []
  }

  connection = new WebSocket('ws://st-chat.shas.tel');

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
      this.setState({ messages: [...this.state.messages, data] });
      if (this.blured) {
        Notifications(data);
      }
    }
  }

  getMessage = (message) => {
    const data = { from: this.props.from, message: message };
    this.connection.send(JSON.stringify(data));
  }

  render() {
    return (
      <div className={MessagePanelStyles.app}>
        <Header className={MessagePanelStyles.header} />
        <DisplayConversation className={MessagePanelStyles.conversation} messages={this.state.messages} />
        <MessagingBox className={MessagePanelStyles.messageBox} getMessage={this.getMessage} />
      </div>
    )
  }
}

MessagingPanel.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
};

export default MessagingPanel;
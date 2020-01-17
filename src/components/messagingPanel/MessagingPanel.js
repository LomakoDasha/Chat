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
  state = {
    messages: []
  }

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

      // const data = JSON.parse(message.data);
      // this.setState({ messages: [...this.state.messages, data] });
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
    const { messages } = this.props.messages;
    return (
      <div className={MessagePanelStyles.app}>
        <Header className={MessagePanelStyles.header} />
        <DisplayConversation className={MessagePanelStyles.conversation} messages= { messages } />
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
};

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import ReconnectingWebSocket from 'reconnecting-websocket';
// import { connect } from 'react-redux';

// import { addMessages } from '../../store/actions/actionCreator';
// import Header from '../header/header';
// import DisplayConversation from './conversation/DisplayConversation';
// import MessagingBox from './messagingBox/MessagingBox';
// import Notifications from './notifications/Notifications';
// import MessagePanelStyles from './Panel.module.css';

// class MessagingPanel extends Component {
//   blured = false;
//   state = {
//     messages: []
//   }

//   connection = new ReconnectingWebSocket('ws://st-chat.shas.tel', null, { reconnectInterval: 3000 });

//   componentDidMount() {
//     Notification.requestPermission().then(() => {
//     });

//     window.onblur = () => {
//       this.blured = true;
//     };

//     window.onfocus = () => {
//       this.blured = false;
//     };

//     this.connection.onmessage = (messages) => {
//       const newMessages = JSON.parse(messages.data);
//       this.setState({ messages: [...this.state.messages, newMessages] });

//       // const newMessages = JSON.parse(messages.data);
//       // const { addMessages } = this.props;
//       // addMessages(newMessages);

//       if (this.blured) {
//         Notifications(newMessages);
//       }
//     }
//   }

//   getMessage = (messages) => {
//     console.log('getMessage this.props.from', this.props.from)
//     console.log('getMessage messages', messages)
//     const data = { from: this.props.from, messages: messages };
//     this.connection.send(JSON.stringify(data));
//   }

//   render() {
//     console.log("MessagingPanel this.props.messages", this.props.messages.messages)
//     return (
//       <div className={MessagePanelStyles.app}>
//         <Header className={MessagePanelStyles.header} />
//         <DisplayConversation className={MessagePanelStyles.conversation} messages={this.props.messages.messages} />
//         <MessagingBox className={MessagePanelStyles.messageBox} getMessage={this.getMessage} />
//       </div>
//     )
//   }
// }

// export default connect((state) => ({
//   messages: state.messages,
// }), { addMessages })(MessagingPanel);

// MessagingPanel.propTypes = {
//   messages: PropTypes.objectOf(PropTypes.array),
// };
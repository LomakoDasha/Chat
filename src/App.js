import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './components/login/Login'
import MessagingPanel from './components/messagingPanel/MessagingPanel'
import { deleteMessages } from './store/actions/actionCreator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: null,
      connection: null,
    };
  }

  componentDidMount() {
    const from = JSON.parse(localStorage.getItem('username'));
    if (from) {
      this.setFrom(from);
    }
  }

  connectToWS = () => {
    const connection = new WebSocket('wss://wssproxy.herokuapp.com/');
    this.setState({ connection });
  }

  setFrom = (from) => {
    this.setState({ from });
    this.connectToWS();
  }

  removeFrom = () => {
    const { connection } = this.state;
    connection.close();
    this.setState({ from: null, connection: null });
    const { deleteMessages } = this.props;
    deleteMessages();
  }

  render() {
    const { from, connection } = this.state;

    return (
      <div>
        {
          !this.state.from
            ? <Login setFrom={this.setFrom} />
            : <MessagingPanel from={from.username} connection={connection} removeFrom={this.removeFrom} />
        }
      </div>
    );
  }
}

export default connect((state) => ({
  messages: state.messages,
}), { deleteMessages })(App);

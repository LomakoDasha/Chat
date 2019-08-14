import React, { Component } from 'react';

class DisplayConversation extends Component {

    displayMessage = (items) => items.map(item => <div>{item.from}: {item.message}</div>)

  render () {
    console.log("receive")
    console.log(this.props.messages)
    return (
      <div id="displayConversation">
        { this.props.messages.map(items => this.displayMessage(items.reverse())) }
      </div>
    )
  }
  
}

export default DisplayConversation;
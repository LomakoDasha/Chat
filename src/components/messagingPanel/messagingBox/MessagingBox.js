import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

const KeyEnter = 13;
class MessagingBox extends Component {
  messageHandler = (e) => {
    if (e.keyCode === KeyEnter) {
      this.props.getMessage(e.target.value);
      e.target.value = "";
    }
  }

  render() {
    return (
      <div id="messagingBox" >
        <TextField
          id="filled-multiline-static"
          multiline={true}
          rows={2}
          rowsMax={4}
          placeholder="Type your message..."
          margin="normal"
          variant="outlined"
          fullWidth={true}
          onKeyDown={this.messageHandler}
        />
      </div>
    )
  }

}

export default MessagingBox;
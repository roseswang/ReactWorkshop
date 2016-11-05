import React from 'react';
import * as emoji from 'node-emoji';

const Message = React.createClass({
  // Setting propTypes ensure that your component is used correctly
  // this will trigger propType validations if the prop being passed
  // in is not the same type as defined
  propTypes: {
    message: React.PropTypes.object
  },

  render() {
    // Destructuring pulls the different fields from
    // the message object
    const {name, message} = this.props.message;

    const emojifiedString = emoji.emojify(message);

    return <p>{name}: {emojifiedString}</p>;
  }
});

export default Message;

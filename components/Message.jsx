import React from 'react';

const Message = React.createClass({
  // Setting propTypes ensure that your component is used correctly
  propTypes: {
    message: React.PropTypes.object
  },

  render() {
    // Destructuring pulls the different fields from
    // the message object
    const {key, name, message} = this.props.message;

    return <p key={key}>{name}: {message}</p>;
  }
});

export default Message;

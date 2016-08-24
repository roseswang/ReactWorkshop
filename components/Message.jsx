import React from 'react';

const Message = React.createClass({
  // Setting propTypes ensure that your component is used correctly
  // this will trigger propType validations if the prop being passed
  // in is not the same type as defined
  propTypes: {
    message: React.PropTypes.object
  },

  render() {
  }
});

export default Message;

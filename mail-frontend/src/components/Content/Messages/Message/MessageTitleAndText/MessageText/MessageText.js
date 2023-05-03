import React from 'react';
import PropTypes from 'prop-types';
import './MessageText.css';

const MessageText = (props) => {
  return (
    <>
      <span className='message-item__text'>{props.text}</span>
    </>
  );
};

export default MessageText;

MessageText.propTypes = {
  text: PropTypes.string.isRequired,
};

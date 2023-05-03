import React from 'react';
import PropTypes from 'prop-types';
import MessageTitle from './MessageTitle/MessageTitle';
import MessageText from './MessageText/MessageText';
import './MessageTitleAndText.css';

const MessageTitleAndText = (props) => {
  return (
    <div className='message-item__text-content'>
      <MessageTitle isRead={props.isRead} title={props.title} />
      <MessageText text={props.text} />
    </div>
  );
};

export default MessageTitleAndText;

MessageTitleAndText.propTypes = {
  isRead: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import './MessageTitle.css';

const MessageTitle = (props) => {
  return (
    <>
      {props.isRead ?
        <span className='message-item__title_isRead'>{props.title}</span> :
        <span className='message-item__title_isNotRead'>{props.title}</span>}
    </>
  );
};

export default MessageTitle;

MessageTitle.propTypes = {
  isRead: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

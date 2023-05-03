import React, { memo } from 'react';
import PropTypes from 'prop-types';
import MessageOpenedTitle from './MessageOpenedTitle/MessageOpenedTitle';
import MessageOpenedDescription from './MessageOpenedDescription/MessageOpenedDescription';
import './MessageOpened.css';

let MessageOpened = (props) => {
  console.log(props.message);
  return (
    <div className='message-opened__content-wrapper'>
      <MessageOpenedTitle message={props.message} />
      <MessageOpenedDescription message={props.message} />
    </div>
  );
};

MessageOpened = memo(MessageOpened);

MessageOpened.propTypes = {
  message: PropTypes.object,
};

export default MessageOpened;

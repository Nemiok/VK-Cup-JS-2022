import React from 'react';
import PropTypes from 'prop-types';
import FlagIcon from '../FlagIcon/FlagIcon';
import './MessageOpenedTitle.css';

const MessageOpenedTitle = (props) => {
  return (
    <div className='message-opened__title-wrapper'>
      <h2 className='message-opened__title'>{props.message.title}</h2>
      <div className='message-opened__flag-wrapper'>
        {props.message.flag && <FlagIcon flag={props.message.flag} />}
        {props.message.flag && <span className='message-opened__flag'>{props.message.flag}</span>}
      </div>
    </div>
  );
};

MessageOpenedTitle.propTypes = {
  message: PropTypes.object,
};

export default MessageOpenedTitle;

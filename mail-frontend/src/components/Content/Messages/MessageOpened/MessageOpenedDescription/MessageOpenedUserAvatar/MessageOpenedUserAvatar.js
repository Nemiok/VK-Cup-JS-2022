import React from 'react';
import PropTypes from 'prop-types';
import './MessageOpenedUserAvatar.css';

const MessageOpenedUserAvatar = (props) => {
  return (
    <>
      {props.userAvatar ?
        <img className='message-open__userAvatar' src={props.userAvatar} /> :
        <div className='message-open__userAvatar_default' ></div>}
    </>
  );
};

export default MessageOpenedUserAvatar;

MessageOpenedUserAvatar.propTypes = {
  userAvatar: PropTypes.string,
};

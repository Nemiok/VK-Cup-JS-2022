import React from 'react';
import PropTypes from 'prop-types';
import './UserAvatar.css';

const UserAvatar = (props) => {
  return (
    <>
      {props.userAvatar ?
        <img className='content__userAvatar' src={props.userAvatar} /> :
        <img className='content__userAvatar_default' src={props.userAvatar} />}
    </>
  );
};

export default UserAvatar;

UserAvatar.propTypes = {
  userAvatar: PropTypes.string,
};

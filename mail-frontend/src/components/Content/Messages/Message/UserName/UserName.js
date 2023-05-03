import React from 'react';
import PropTypes from 'prop-types';
import './UserName.css';

const UserName = (props) => {
  return (
    <>
      {props.isRead ?
        <span className='message-item__name_isRead'>{props.userName} {props.userSurname}</span> :
        <span className='message-item__name_isNotRead'>{props.userName} {props.userSurname}</span>}
    </>
  );
};

export default UserName;

UserName.propTypes = {
  isRead: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  userSurname: PropTypes.string.isRequired,
};

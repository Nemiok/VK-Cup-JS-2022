import React from 'react';
import PropTypes from 'prop-types';
import './IsReadIndicator.css';

const IsReadIndicator = (props) => {
  return (
    <>
      {props.isRead ? <button className='message-opened_isRead'></button> :
        <button className='message-opened_isNotRead'></button>}
    </>
  );
};

export default IsReadIndicator;

IsReadIndicator.propTypes = {
  isRead: PropTypes.bool.isRequired,
};

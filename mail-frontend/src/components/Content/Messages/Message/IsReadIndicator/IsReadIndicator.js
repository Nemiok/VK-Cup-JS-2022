import React from 'react';
import PropTypes from 'prop-types';
import './IsReadIndicator.css';

const IsReadIndicator = (props) => {
  return (
    <>
      {props.isRead ? <button onClick={props.handleIsReadClick} className='message-item_isRead'></button> :
        <button onClick={props.handleIsReadClick} className='message-item_isNotRead'></button>}
    </>
  );
};

export default IsReadIndicator;

IsReadIndicator.propTypes = {
  isRead: PropTypes.bool.isRequired,
  handleIsReadClick: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import './IsCheckedIndicator.css';

const IsCheckedIndicator = (props) => {
  return (
    <>
      {props.isChecked ? <input onClick={(e) => props.handleCheckboxCheck(e)} type='checkbox' className="message-item__checkbox_checked" /> :
        <input onClick={(e) => props.handleCheckboxCheck(e)} type='checkbox' className="message-item__checkbox" />}
    </>
  );
};

export default IsCheckedIndicator;

IsCheckedIndicator.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  handleCheckboxCheck: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import './IsBookmarkedIndicator.css';

const IsBookmarkedIndicator = (props) => {
  return (
    <>
      {props.isBookmarked ? <button onClick={props.handleIsBookmarkedClick} className='message-item__bookmark-button_marked'></button> :
        <button onClick={props.handleIsBookmarkedClick} className='message-item__bookmark-button_unmarked'></button>}
    </>
  );
};

export default IsBookmarkedIndicator;

IsBookmarkedIndicator.propTypes = {
  handleIsBookmarkedClick: PropTypes.func.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
};

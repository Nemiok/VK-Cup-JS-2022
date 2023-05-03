import React from 'react';
import './WriteMessageButton.css';

const WriteMessageButton = () => {
  return (
    <button aria-label='Написать письмо' tabIndex={0} className='navbar__write-message-button'>
      Написать письмо
    </button>
  );
};

export default WriteMessageButton;

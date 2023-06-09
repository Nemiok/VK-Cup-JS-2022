import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TooltipWithAttachments from './TooltipWithAttachments/TooltipWithAttachments';
import './AttachmentIcon.css';

const AttachmentIcon = (props) => {
  const attachments = props.attachments;
  const [isTooltipOpened, setIsTooltipOpened] = useState(false);

  window.addEventListener('click', (e) => {
    e.currentTarget.className !== 'attachment-icon__button' && isTooltipOpened && setIsTooltipOpened(false);
  });

  const handleAttachmentIconClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTooltipOpened(!isTooltipOpened);
    console.log(e.currentTarget);
  };

  return (
    <div className='attachment-icon__wrapper'>
      {isTooltipOpened && <TooltipWithAttachments attachments={attachments} />}
      <button className='attachment-icon__button' onClick={(e) => handleAttachmentIconClick(e)}>
        <svg className='message-item__attachment-icon' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.828 4.58722C15.2659 3.02513 12.7332 3.02513 11.1711 4.58722L11.082 4.67633C11.3662 4.84417 11.634 5.05016 11.8782 5.29433C12.1224 5.53849 12.3284 5.80637 12.4962 6.09054L12.5853 6.00144C13.3664 5.22039 14.6327 5.22039 15.4137 6.00144C16.1948 6.78248 16.1948 8.04881 15.4137 8.82986L9.12132 15.1223C7.94975 16.2939 6.05025 16.2939 4.87868 15.1223C3.70711 13.9507 3.70711 12.0512 4.87868 10.8797L8.34272 7.41565C8.73324 7.02513 9.36641 7.02513 9.75693 7.41565C10.1475 7.80617 10.1475 8.43934 9.75693 8.82986L7.0503 11.5365C6.65977 11.927 6.65977 12.5602 7.0503 12.9507C7.44082 13.3412 8.07399 13.3412 8.46451 12.9507L11.1711 10.2441C12.3427 9.0725 12.3427 7.17301 11.1711 6.00144C9.99957 4.82986 8.10008 4.82986 6.9285 6.00144L3.46447 9.46544C1.51184 11.4181 1.51184 14.5839 3.46447 16.5365C5.41709 18.4891 8.58291 18.4891 10.5355 16.5365L16.828 10.2441C18.3901 8.68198 18.3901 6.14932 16.828 4.58722Z" fill="#2C2D2E" />
        </svg>
      </button>
    </div>
  );
};

AttachmentIcon.propTypes = {
  handleAttachmentIconClick: PropTypes.func,
  attachments: PropTypes.object,
};

export default AttachmentIcon;

import React from 'react';
import PropTypes from 'prop-types';
import './MessageOpenedDocs.css';

const MessageOpenedDocs = (props) => {
  return (
    <a className='description-body__attachment-link' href={props.img} download={`attachment.${props.ext}`}>
      <div className='attachment-link__download-button_onAttachment'>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.15081 6.24099C4.73148 5.88157 4.10018 5.93013 3.74076 6.34945C3.38134 6.76878 3.4299 7.40008 3.84923 7.7595L8.00002 11.3173L12.1508 7.7595C12.5701 7.40008 12.6187 6.76878 12.2593 6.34945C11.8999 5.93013 11.2686 5.88157 10.8492 6.24099L9.00002 7.82602V2.00024C9.00002 1.44796 8.5523 1.00024 8.00002 1.00024C7.44773 1.00024 7.00002 1.44796 7.00002 2.00024V7.82602L5.15081 6.24099ZM2 13.0002C1.44772 13.0002 1 13.448 1 14.0002C1 14.5525 1.44772 15.0002 2 15.0002H14C14.5523 15.0002 15 14.5525 15 14.0002C15 13.448 14.5523 13.0002 14 13.0002H2Z" fill="#2C2D2E" />
        </svg>
        <span>Скачать</span>
      </div>
      <img loading='lazy' className='message-opened__attachment' src={props.img} alt='вложение'></img>
    </a>
  );
};

export default MessageOpenedDocs;

MessageOpenedDocs.propTypes = {
  img: PropTypes.string.isRequired,
  ext: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

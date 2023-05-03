import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

let TooltipAttachmentItem = (props) => {
  const [isTooltipAttachmentHovered, setIsTooltipAttachmentHovered] = useState(false);

  const handleOnTooltipAttachmentHover = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTooltipAttachmentHovered(true);
  };

  const handleOnTooltipAttachmentUnHover = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTooltipAttachmentHovered(false);
  };

  const handleOnTooltipAttachmentOpenedClick = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    const newTab = window.open();
    newTab?.document.write(
      `<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <title>attachment</title>
      </head>
      
      <body>
        <img src=${url} width='1000px'/>
      </body>
      
      </html>
      `);
    newTab?.document.close();
  };
  return (
    <>
      <li
        onMouseLeave={(e) => handleOnTooltipAttachmentUnHover(e)}
        onClick={(e) => handleOnTooltipAttachmentOpenedClick(e, props.url)}
        onMouseEnter={(e) => handleOnTooltipAttachmentHover(e, props.url)}
        className='tooltip-attachments__list-item'>
        <img className='tooltip-attachment' src={props.url}></img>
        <span>attachment.{props.ext} {props.size} MB</span>
      </li>
      {isTooltipAttachmentHovered && <div
        onMouseLeave={(e) => handleOnTooltipAttachmentUnHover(e)}
        onMouseEnter={(e) => handleOnTooltipAttachmentHover(e, props.url)}
        onClick={(e) => handleOnTooltipAttachmentOpenedClick(e, props.url)}
        className='tooltip-attachment-wrapper'>
        <img className='tooltip-attachment_opened' src={props.url}></img>
      </div>}
    </>
  );
};

TooltipAttachmentItem = memo(TooltipAttachmentItem);

TooltipAttachmentItem.propTypes = {
  url: PropTypes.any,
  size: PropTypes.any,
  ext: PropTypes.any,
  imagesArray: PropTypes.array,
  index: PropTypes.number,
  handleOnTooltipAttachmentUnHover: PropTypes.func,
  handleOnTooltipAttachmentOpenedClick: PropTypes.func,
  handleOnTooltipAttachmentHover: PropTypes.func,
  isTooltipAttachmentHovered: PropTypes.bool,
};

export default TooltipAttachmentItem;

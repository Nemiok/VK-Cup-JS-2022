import React from 'react';
import PropTypes from 'prop-types';
import { b64toBlob, uid } from '../../../../../../utils/helpers/helpers';
import TooltipAttachmentItem from './TooltipAttachmentItem/TooltipAttachmentItem';
import './TooltipWithAttachments.css';

const TooltipWithAttachments = (props) => {
  const attachments = props.attachments;
  const isImgArray = attachments && Array.isArray(attachments.img);
  let buffer;
  let sizeOfDoc;
  let fileExt;
  let blob;
  let blobUrl;
  const blobArray = [];
  const urlArray = [];

  if (attachments && !isImgArray) {
    fileExt = attachments.img.slice(attachments.img.indexOf('/') + 1, attachments.img.indexOf('/') + 4);
    buffer = atob(attachments.img.substring(attachments.img.indexOf(',') + 1));
    sizeOfDoc = String(buffer.length / 1e+6).slice(0, 5);
    blob = b64toBlob(attachments.img.substring(attachments.img.indexOf(',') + 1));
    blobUrl = URL.createObjectURL(blob);
  } else if (attachments && isImgArray) {
    attachments.img.forEach((base64str) => {
      const ext = base64str.slice(base64str.indexOf('/') + 1, base64str.indexOf('/') + 4);
      buffer = atob(base64str.substring(base64str.indexOf(',') + 1));
      const size = String(buffer.length / 1e+6).slice(0, 5);
      const blobURL = URL.createObjectURL(b64toBlob(base64str.substring(base64str.indexOf(',') + 1)));
      blobArray.push({
        ext,
        size,
        blobURL,
      });
      urlArray.push(blobURL);
    });
  }

  return (
    <ul className='tooltip-attachments__list'>
      {!isImgArray && <TooltipAttachmentItem
        size={sizeOfDoc}
        ext={fileExt}
        url={blobUrl} />
      }

      {isImgArray && blobArray.map((el) => {
        return <TooltipAttachmentItem
          key={uid()}
          size={el.size}
          ext={el.ext}
          url={el.blobURL} />;
      })
      }
    </ul>
  );
};

TooltipWithAttachments.propTypes = {
  attachments: PropTypes.object,
};

export default TooltipWithAttachments;

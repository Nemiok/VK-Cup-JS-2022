import React from 'react';
import PropTypes from 'prop-types';
import IsReadIndicator from '../IsReadIndicator/IsReadIndicator';
import MessageOpenedUserAvatar from './MessageOpenedUserAvatar/MessageOpenedUserAvatar';
import MessageOpenedDate from './MessageOpenedDate/MessageOpenedDate';
import MessageOpenedAddress from './MessageOpenedAddress/MessageOpenedAddress';
import MessageOpenedDocs from './MessageOpenedDocs/MessageOpenedDocs';
import { b64toBlob, saveZip } from '../../../../../utils/helpers/helpers';
import './MessageOpenedDescription.css';

const MessageOpenedDescription = (props) => {
  const date = props.message.date;
  const userAvatar = props.message.author.avatar || '';
  const userName = props.message.author.name;
  const userSurname = props.message.author.surname;
  const text = props.message.text;
  const isRead = props.message.read;
  const toWhomArray = props.message.to;

  const descriptionBodyAttaches = props.message.doc;
  const isImgArray = descriptionBodyAttaches && Array.isArray(descriptionBodyAttaches.img);
  let buffer;
  let sizeOfDoc;
  let fileExt;
  let blob;
  let blobUrl;
  const blobArray = [];
  const urlArray = [];
  let sumOfAttachmentsSizes = 0;
  let numberOfAttachments;
  if (descriptionBodyAttaches && !isImgArray) {
    fileExt = descriptionBodyAttaches.img.slice(descriptionBodyAttaches.img.indexOf('/') + 1, descriptionBodyAttaches.img.indexOf('/') + 4);
    buffer = atob(descriptionBodyAttaches.img.substring(descriptionBodyAttaches.img.indexOf(',') + 1));
    sizeOfDoc = String(buffer.length / 1e+6).slice(0, 5);
    blob = b64toBlob(descriptionBodyAttaches.img.substring(descriptionBodyAttaches.img.indexOf(',') + 1));
    blobUrl = URL.createObjectURL(blob);
  } else if (descriptionBodyAttaches && isImgArray) {
    numberOfAttachments = descriptionBodyAttaches.img.length;
    descriptionBodyAttaches.img.forEach((base64str) => {
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
  console.log(urlArray);
  const formattedArrayOfAddressees = [];
  toWhomArray.forEach((person) => formattedArrayOfAddressees.push(`${person.name} ${person.surname}, `));

  const handleOnDownloadManyButtonClick = () => {
    saveZip(urlArray);
  };

  return (
    <div className='message-opened__description-wrapper'>
      <div className='message-header-wrapper__header'>
        <IsReadIndicator isRead={isRead} />
        <MessageOpenedUserAvatar userAvatar={userAvatar} />

        <div className='description-header__wrapper'>
          <div className='description-header__name-and-date-wrapper'>
            <span className='description-header__name'>{userName} {userSurname}</span>
            <MessageOpenedDate date={date} />
          </div>
          <MessageOpenedAddress formattedArrayOfAddressees={formattedArrayOfAddressees} />
        </div>
      </div>

      <div className='description-body__wrapper'>
        {descriptionBodyAttaches && !isImgArray ?
          <div className='description-body__attachments'>
            <div className='attachments__images'>
              <MessageOpenedDocs img={blobUrl} size={sizeOfDoc} ext={fileExt} />
            </div>
            <div className='description-body__attachment-info'>
              <span className='description-body__attachments-count'>1 файл</span>
              <a className='description-body__download-link' href={blobUrl} download={`attachment.${fileExt}`}>
                <span>Скачать</span>
                <span className='description-body__attachment-size'> ({sizeOfDoc}Mb)</span>
              </a>
            </div>
          </div> :
          isImgArray && <div className='description-body__attachments'>
            <div className='attachments__images'>
              {blobArray.map((blobImage, i) => {
                sumOfAttachmentsSizes += Number(blobImage.size);
                return <MessageOpenedDocs key={i + 1} img={blobImage.blobURL} size={blobImage.size} ext={blobImage.ext} />;
              })}
            </div>
            <div className='description-body__attachment-info'>
              <span className='description-body__attachments-count'>{numberOfAttachments} файла</span>
              <a className='description-body__download-link' onClick={handleOnDownloadManyButtonClick}>
                <span>Скачать</span>
                <span className='description-body__attachment-size'> ({sumOfAttachmentsSizes}Mb)</span>
              </a>
            </div>
          </div>
        }

        <div className='description-body__text'>{text}</div>
      </div>
    </div >
  );
};

MessageOpenedDescription.propTypes = {
  message: PropTypes.object.isRequired,
};

export default MessageOpenedDescription;

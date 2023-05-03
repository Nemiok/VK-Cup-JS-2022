import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IsReadIndicator from './IsReadIndicator/IsReadIndicator';
import IsCheckedIndicator from './IsCheckedIndicator/IsCheckedIndicator';
import UserAvatar from './UserAvatar/UserAvatar';
import UserName from './UserName/UserName';
import IsBookmarkedIndicator from './IsBookmarkedIndicator/IsBookmarkedIndicator';
import MessageTitleAndText from './MessageTitleAndText/MessageTitleAndText';
import MessageDate from './MessageDate/MessageDate';
import FlagIcon from './FlagIcon/FlagIcon';
import AttachmentIcon from './AttachmentIcon/AttachmentIcon';
import './Message.css';

const Message = (props) => {
  const [isRead, setIsRead] = useState(props.message.read);
  const handleIsReadClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsRead(!isRead);
  };

  const [isBookmarked, setIsBookmarked] = useState(props.message.bookmark);
  const handleIsBookmarkedClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxCheck = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsChecked(!isChecked);
  };

  const date = props.message.date;
  const userAvatar = props.message.author.avatar;
  const userName = props.message.author.name;
  const userSurname = props.message.author.surname;
  const title = props.message.title;
  const text = props.message.text;
  const flag = props.message.flag;
  const attachments = props.message.doc;

  return (
    <li id={props.message.id} onClick={(e) => {
      e.target instanceof HTMLButtonElement === false && e.target instanceof HTMLInputElement === false &&
        props.handleOnMessageItemClick(props.message.id, props.messages);
    }} className='content__message-item'>

      <IsReadIndicator isRead={isRead} handleIsReadClick={handleIsReadClick} />

      <IsCheckedIndicator isChecked={isChecked} handleCheckboxCheck={handleCheckboxCheck} />

      <UserAvatar userAvatar={userAvatar} />

      <UserName isRead={isRead} userName={userName} userSurname={userSurname} />

      <IsBookmarkedIndicator isBookmarked={isBookmarked} handleIsBookmarkedClick={handleIsBookmarkedClick} />

      <MessageTitleAndText isRead={isRead} title={title} text={text} />

      <div className='message-item__info-icons'>
        {flag && <FlagIcon flag={flag} />}

        {attachments && <AttachmentIcon attachments={attachments} />}
      </div>

      <MessageDate date={date} />
    </li>
  );
};

Message.propTypes = {
  message: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  handleOnMessageItemClick: PropTypes.func.isRequired,
};

export default Message;

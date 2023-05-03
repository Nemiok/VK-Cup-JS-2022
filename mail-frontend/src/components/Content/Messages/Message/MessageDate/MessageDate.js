import React from 'react';
import PropTypes from 'prop-types';
import './MessageDate.css';

const MessageDate = (props) => {
  const creationDate = new Date(props.date);
  const currentDate = new Date();

  const creationDay = creationDate.getDate();
  const creationMonth = creationDate.getMonth() + 1;
  const creationYear = creationDate.getFullYear();

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();


  const isToday = creationDay === currentDay && creationMonth === currentMonth && creationYear === currentYear;

  const creationHours = creationDate.getHours();
  const creationMinutes = creationDate.getMinutes() < 10 ? `0${creationDate.getMinutes()}` : creationDate.getMinutes();
  const creationMonthName = (new Intl.DateTimeFormat('ru-RU', { 'month': 'long' }).format(creationDate)).slice(0, 3);
  return (
    <>
      {isToday ? <span className='message-item__date'>{creationHours}:{creationMinutes}</span> :
        <span className='message-item__date'>{creationDay} {creationMonthName}</span>}
    </>
  );
};

export default MessageDate;

MessageDate.propTypes = {
  date: PropTypes.string.isRequired,
};

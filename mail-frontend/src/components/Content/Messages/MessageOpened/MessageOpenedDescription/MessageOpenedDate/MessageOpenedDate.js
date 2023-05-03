import React from 'react';
import PropTypes from 'prop-types';
import './MessageOpenedDate.css';

const MessageOpenedDate = (props) => {
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
  const creationMonthName = new Intl.DateTimeFormat('ru-RU', { 'month': 'long' }).format(creationDate).slice().at(-1) === 'т' ?
    (new Intl.DateTimeFormat('ru-RU', { 'month': 'long' }).format(creationDate)) + 'а' :
    (new Intl.DateTimeFormat('ru-RU', { 'month': 'long' }).format(creationDate)).slice(0, -1) + 'я';
  return (
    <>
      {isToday ? <span className='message-opened__date'>Cегодня, {creationHours}:{creationMinutes}</span> :
        <span className='message-opened__date'>{creationDay} {creationMonthName}, {creationHours}:{creationMinutes}</span>}
    </>
  );
};

MessageOpenedDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default MessageOpenedDate;


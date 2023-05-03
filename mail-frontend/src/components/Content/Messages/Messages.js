import React from 'react';
import Message from './Message/Message';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Messages.css';

const Messages = (props) => {
  console.log(props.messages);
  const messagesToShow = props.messages.map((message) => {
    return <Link to={`${location.pathname}/id=${message.id}`} key={message.id}>
      <Message handleOnMessageItemClick={props.handleOnMessageItemClick} message={message} messages={props.messages} />
    </Link>;
  });

  return (
    <ul className='content__messages-list'>
      {messagesToShow}
    </ul>
  );
};

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  handleOnMessageItemClick: PropTypes.func.isRequired,
};

export default Messages;

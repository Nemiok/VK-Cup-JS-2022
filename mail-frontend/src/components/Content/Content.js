import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Messages from './Messages/Messages';
import MessageOpened from './Messages/MessageOpened/MessageOpened';
import './Content.css';

const Content = (props) => {
  return (
    <article className='content-wrapper'>
      <Routes>
        <Route path="/inbox" exact element={<Messages
          handleOnMessageItemClick={props.handleOnMessageItemClick}
          messages={props.normalMessages} />} />

        <Route path="/important" element={<Messages
          handleOnMessageItemClick={props.handleOnMessageItemClick}
          messages={props.importantMessages} />} />

        <Route path="/sent" element={<Messages
          handleOnMessageItemClick={props.handleOnMessageItemClick}
          messages={props.sentMessages} />} />

        <Route path="/drafts" element={<Messages
          handleOnMessageItemClick={props.handleOnMessageItemClick}
          messages={props.draftsMessages} />} />

        <Route path="/archive" element={<Messages
          handleOnMessageItemClick={props.handleOnMessageItemClick}
          messages={props.archiveMessages} />} />

        <Route path="/spam" element={<Messages
          handleOnMessageItemClick={props.handleOnMessageItemClick}
          messages={props.spamMessages} />} />

        <Route path="/trash" element={<Messages
          handleOnMessageItemClick={props.handleOnMessageItemClick}
          messages={props.trashMessages} />} />

        <Route path="/*" element={props.desiredMessage && <MessageOpened message={props.desiredMessage} />} />
      </Routes>
    </article>
  );
};

Content.propTypes = {
  messages: PropTypes.array.isRequired,
  normalMessages: PropTypes.array,
  importantMessages: PropTypes.array,
  sentMessages: PropTypes.array,
  draftsMessages: PropTypes.array,
  archiveMessages: PropTypes.array,
  spamMessages: PropTypes.array,
  trashMessages: PropTypes.array,
  handleOnMessageItemClick: PropTypes.func.isRequired,
  desiredMessage: PropTypes.object,
};
export default Content;

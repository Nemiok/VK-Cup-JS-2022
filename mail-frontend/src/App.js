import React, { useLayoutEffect, useState } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import communications from './services/communiations';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';

const App = () => {
  const [allMessages, setAllMessages] = useState([]);
  const [normalMessages, setNormalMessages] = useState([]);
  const [importantMessages, setImportantMessages] = useState([]);
  const [sentMessages, setSentMessages] = useState([]);
  const [draftsMessages, setDraftsMessages] = useState([]);
  const [archiveMessages, setArchiveMessages] = useState([]);
  const [spamMessages, setSpamMessages] = useState([]);
  const [trashMessages, setTrashMessages] = useState([]);

  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [desiredMessage, setDesiredMessage] = useState(null);
  const navigation = useNavigate();
  const location = useLocation();

  if (location.pathname === '/') window.location.href = '/inbox';

  const handleOnGoBackButtonClick = () => {
    navigation(-1);
    setIsMessageOpen(false);
  };

  useLayoutEffect(() => {
    communications.getAllMessages()
      .then((fetchedMessages) => {
        for (let i = 0; i < fetchedMessages.length; i++) {
          fetchedMessages[i].id = String(new Date(fetchedMessages[i].date).getTime());
        }
        const filteredByDateFetchedMessages = fetchedMessages.sort((a, b) => b.id - a.id);
        setAllMessages(filteredByDateFetchedMessages);
        return filteredByDateFetchedMessages;
      }).then((filteredByDateFetchedMessages) => {
        const filteredByNormal = filteredByDateFetchedMessages.filter((message) => !message.folder);
        setNormalMessages(filteredByNormal);

        const filteredByImportant = filteredByDateFetchedMessages.filter((message) => message.folder === 'Важное');
        setImportantMessages(filteredByImportant);

        const filteredBySent = filteredByDateFetchedMessages.filter((message) => message.folder === 'Отправленные');
        setSentMessages(filteredBySent);

        const filteredByDrafts = filteredByDateFetchedMessages.filter((message) => message.folder === 'Черновики');
        setDraftsMessages(filteredByDrafts);

        const filteredByArchive = filteredByDateFetchedMessages.filter((message) => message.folder === 'Архив');
        setArchiveMessages(filteredByArchive);

        const filteredBySpam = filteredByDateFetchedMessages.filter((message) => message.folder === 'Спам');
        setSpamMessages(filteredBySpam);

        const filteredByTrash = filteredByDateFetchedMessages.filter((message) => message.folder === 'Корзина');
        setTrashMessages(filteredByTrash);
      });
  }, []);

  const handleOnMessageItemClick = (id, messages) => {
    const message = messages.find((el) => el.id === id);
    setDesiredMessage(message);
    setIsMessageOpen(true);
  };

  useLayoutEffect(() => {
    const isID = /[0-9]/g.test(location.pathname);
    if (isID) {
      const messageID = location.pathname.split('/')[2].slice(3);
      const message = allMessages.find((el) => el.id === messageID);
      setDesiredMessage(message);
      return;
    }
  }, [allMessages]);

  useLayoutEffect(() => {
    console.log(location.pathname);
    const isID = /[0-9]/g.test(location.pathname);
    isID ? setIsMessageOpen(true) : setIsMessageOpen(false);
  }, [location]);

  return (
    <div className="app-wrapper">
      <Header
        isMessageOpen={isMessageOpen}
        handleOnGoBackButtonClick={handleOnGoBackButtonClick} />
      <main className='main-wrapper'>
        <Navbar setIsMessageOpen={setIsMessageOpen} />
        <Content
          messages={allMessages}
          normalMessages={normalMessages}
          sentMessages={sentMessages}
          importantMessages={importantMessages}
          draftsMessages={draftsMessages}
          archiveMessages={archiveMessages}
          spamMessages={spamMessages}
          trashMessages={trashMessages}
          desiredMessage={desiredMessage}
          handleOnMessageItemClick={handleOnMessageItemClick} />
      </main>
    </div>
  );
};

export default App;

const BASE_URL = 'http://localhost:3000';

const getAllMessages = async () => {
  const response = await fetch(BASE_URL);
  const result = await response.json();
  return result;
};

const getMessage = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  const result = await response.json();
  return result;
};

const communications = {
  getAllMessages,
  getMessage,
};

export default communications;

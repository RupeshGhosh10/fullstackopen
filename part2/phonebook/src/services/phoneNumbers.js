import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => {
    return response.data;
  });
};

const save = phoneNumberObject => {
  const request = axios.post(baseUrl, phoneNumberObject);
  return request.then(response => {
    return response.data;
  });
};

const update = (id, phoneNumberObject) => {
  const request = axios.put(`${baseUrl}/${id}`, phoneNumberObject);
  return request.then(response => {
    return response.data;
  });
};

const deleteNumber = id => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(response => {
    return response.data;
  });
};

export default {
  getAll,
  save,
  update,
  deleteNumber
};

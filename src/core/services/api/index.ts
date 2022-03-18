import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000'
});

const getCredentials = async () => {
  return api.get('/account');
};

export { api, getCredentials };

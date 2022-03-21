import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:8000'
  baseURL: 'https://case-picpay-api.herokuapp.com/'
});

const getCredentials = async () => {
  return api.get('/account');
};

const getPaymentList = async () => {
  console.log('CHAMOU API');
  return api.get(`/tasks`);
};

export { api, getCredentials, getPaymentList };

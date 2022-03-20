import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000'
});

const getCredentials = async () => {
  return api.get('/account');
};

const defaultReacordsAmount = 10;

const getPaymentList = async (recordsAmount = defaultReacordsAmount) => {
  return api.get(`/tasks?_limit=${recordsAmount}`);
};

export { api, getCredentials, getPaymentList };

import axios from 'axios';

import { AddPaymentProps } from 'core/types/payments/globals';

const api = axios.create({
  baseURL: 'http://localhost:8000'
  // baseURL: 'https://case-picpay-api.herokuapp.com/'
});

const getCredentials = async () => {
  return api.get('/account');
};

const getTasks = async () => {
  return api.get(`/tasks`);
};

const createTask = async (task: AddPaymentProps) => {
  return api.post(`/tasks`, task);
};

export { api, getCredentials, getTasks, createTask };

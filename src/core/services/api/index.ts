import axios from 'axios';

import { PaymentRecordProps } from 'core/types/payments/globals';

const api = axios.create({
  baseURL: 'https://case-picpay-api.herokuapp.com/'
});

const getCredentials = async () => {
  return api.get('/account');
};

const getTasks = async () => {
  try {
    const response = await api.get(`/tasks`);
    return response.status === 200 ? response.data : null;
  } catch (error) {
    console.error(error);
  }
};

const createTask = async (task: PaymentRecordProps) => {
  try {
    const response = await api.post(`/tasks`, task);
    return response.status === 201 ? response.data : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const editTask = async (taskId: number, task: PaymentRecordProps) => {
  try {
    const response = await api.put(`/tasks/${taskId}`, task);
    return response.status === 200 ? response.data : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteTask = async (taskId: number) => {
  try {
    const response = await api.delete(`/tasks/${taskId}`);
    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export { api, getCredentials, getTasks, createTask, editTask, deleteTask };

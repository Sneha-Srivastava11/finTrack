import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const getExpenses = () => {
  return axios.get(`${API_BASE_URL}/expenses`);
};

export const createExpense = (expense) => {
  return axios.post(`${API_BASE_URL}/expenses`, expense);
};

export const updateExpense = (id, expense) => {
  return axios.put(`${API_BASE_URL}/expenses/${id}`, expense);
};

export const deleteExpense = (id) => {
  return axios.delete(`${API_BASE_URL}/expenses/${id}`);
};
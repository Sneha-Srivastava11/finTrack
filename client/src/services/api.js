import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const getExpenses = () => axios.get(`${API_BASE_URL}/expenses`);

export const createExpense = (expense) =>
  axios.post(`${API_BASE_URL}/expenses`, expense);

export const updateExpense = (id, expense) =>
  axios.put(`${API_BASE_URL}/expenses/${id}`, expense);

export const deleteExpense = (id) =>
  axios.delete(`${API_BASE_URL}/expenses/${id}`);
export const getMonthlyExpenses = async () => {
  const res = await fetch("http://localhost:5000/api/expenses/monthly");
  return res.json();
};
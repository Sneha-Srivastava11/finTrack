import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

// Create axios instance (scalable for future)
const API = axios.create({
  baseURL: API_BASE_URL,
});

// ================== EXPENSE APIs ==================

export const getExpenses = () => API.get("/expenses");

export const createExpense = (expense) =>
  API.post("/expenses", expense);

export const updateExpense = (id, expense) =>
  API.put(`/expenses/${id}`, expense);

export const deleteExpense = (id) =>
  API.delete(`/expenses/${id}`);

// ================== ANALYTICS APIs ==================

export const getMonthlyExpenses = () =>
  API.get("/expenses/monthly");

export const getExpenseSummary = () =>
  API.get("/expenses/summary");
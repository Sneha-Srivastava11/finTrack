import { useEffect, useState } from "react";
import { getExpenses, deleteExpense } from "../services/api";
import ExpenseForm from "../components/ExpenseForm";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await getExpenses();
    setExpenses(res.data);
  };

  const handleDelete = async (id) => {
    await deleteExpense(id);
    fetchExpenses();
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <h1>Expense Dashboard</h1>

      <ExpenseForm onExpenseAdded={fetchExpenses} />

      {expenses.map((expense) => (
        <div key={expense._id}>
          <p>
            {expense.title} - ₹{expense.amount}
          </p>

          <button onClick={() => handleDelete(expense._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
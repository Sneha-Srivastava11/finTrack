import { useEffect, useState } from "react";
import { getExpenses, deleteExpense } from "../services/api";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseChart from "../components/ExpenseChart";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
  const fetchExpenses = async () => {
    try {
      const res = await getExpenses();
      setExpenses(res.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteExpense(id);
      fetchExpenses();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Dashboard</h1>

      <ExpenseForm
  onExpenseAdded={fetchExpenses}
  editingExpense={editingExpense}
  setEditingExpense={setEditingExpense}
/>

      <ExpenseChart expenses={expenses} />

      <h2>All Expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        expenses.map((expense) => (
          <div
            key={expense._id}
            style={{
              border: "1px solid gray",
              margin: "10px 0",
              padding: "10px"
            }}
          >
            <p>
              <strong>{expense.title}</strong> - ₹{expense.amount} ({expense.category})
            </p>

            <button onClick={() => setEditingExpense(expense)}>
  Edit
</button>

<button onClick={() => handleDelete(expense._id)}>
  Delete
</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
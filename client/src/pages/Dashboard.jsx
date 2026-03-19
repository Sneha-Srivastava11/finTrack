import { useEffect, useState } from "react";
import { getExpenses, deleteExpense } from "../services/api";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseChart from "../components/ExpenseChart";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");

  // ✅ Dynamic categories
  const categories = ["All", ...new Set(expenses.map(e => e.category))];

  // ✅ Fetch expenses
  const fetchExpenses = async () => {
    try {
      const res = await getExpenses();
      setExpenses(res.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  // ✅ Delete expense
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

  // ✅ Filter logic (corrected)
  const filteredExpenses =
    filterCategory === "All"
      ? expenses
      : expenses.filter(
          (expense) =>
            expense.category.toLowerCase() === filterCategory.toLowerCase()
        );

  // ✅ Capitalize helper
  const formatCategory = (cat) =>
    cat.charAt(0).toUpperCase() + cat.slice(1);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-6">Expense Dashboard</h1>

      {/* Expense Form */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <ExpenseForm
          onExpenseAdded={fetchExpenses}
          editingExpense={editingExpense}
          setEditingExpense={setEditingExpense}
        />
      </div>

      {/* Expense Chart */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <ExpenseChart expenses={expenses} />
      </div>

      {/* ✅ Dynamic Filter */}
      <div className="mb-4">
        <label className="mr-3 font-semibold">Filter by Category:</label>

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="border p-2 rounded"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {formatCategory(cat)}
            </option>
          ))}
        </select>
      </div>

      {/* Expense List */}
      <h2 className="text-xl font-semibold mb-4">All Expenses</h2>

      {filteredExpenses.length === 0 ? (
        <p className="text-gray-500">No expenses found.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <div
            key={expense._id}
            className="bg-white p-4 rounded-lg shadow mb-3 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{expense.title}</p>
              <p className="text-gray-500">
                ₹{expense.amount} • {formatCategory(expense.category)}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setEditingExpense(expense)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(expense._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
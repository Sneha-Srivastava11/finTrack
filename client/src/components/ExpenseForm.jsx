import { useState, useEffect } from "react";
import { createExpense, updateExpense } from "../services/api";

function ExpenseForm({ onExpenseAdded, editingExpense, setEditingExpense }) {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount);
      setCategory(editingExpense.category);
    }
  }, [editingExpense]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const expenseData = {
      title,
      amount,
      category
    };

    try {

      if (editingExpense) {
        await updateExpense(editingExpense._id, expenseData);
        alert("Expense updated successfully!");
        setEditingExpense(null);
      } else {
        await createExpense(expenseData);
        alert("Expense added successfully!");
      }

      setTitle("");
      setAmount("");
      setCategory("");

      onExpenseAdded();

    } catch (error) {
      console.error("Error saving expense:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingExpense ? "Edit Expense" : "Add Expense"}</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button type="submit">
        {editingExpense ? "Update Expense" : "Add Expense"}
      </button>

      {editingExpense && (
        <button
          type="button"
          onClick={() => {
            setEditingExpense(null);
            setTitle("");
            setAmount("");
            setCategory("");
          }}
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default ExpenseForm;
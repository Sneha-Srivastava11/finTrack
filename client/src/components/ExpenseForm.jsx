import { useState } from "react";
import { createExpense } from "../services/api";

function ExpenseForm({ onExpenseAdded }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newExpense = {
      title,
      amount,
      category
    };

    await createExpense(newExpense);

    setTitle("");
    setAmount("");
    setCategory("");

    onExpenseAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>

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

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
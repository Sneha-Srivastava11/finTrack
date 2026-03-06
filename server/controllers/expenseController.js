const Expense = require("../models/Expense");

exports.createExpense = async (req, res) => {
  try {
    const { title, amount, category } = req.body;

    const expense = new Expense({
      title,
      amount,
      category
    });

    const savedExpense = await expense.save();

    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedExpense = await Expense.findByIdAndDelete(id);

    if (!deletedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json({ message: "Expense deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedExpense = await Expense.findByIdAndUpdate(
      id,
      req.body,
       { returnDocument: "after" }
    );

    if (!updatedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json(updatedExpense);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

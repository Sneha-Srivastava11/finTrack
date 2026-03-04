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
const express = require("express");
const cors = require("cors");
const expenseRoutes = require("./routes/expenseRoutes");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/expenses", expenseRoutes);
// 👇 THIS MUST BE HERE
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "FinTrack API running 🚀" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
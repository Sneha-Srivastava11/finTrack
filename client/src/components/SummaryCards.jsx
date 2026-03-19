import { useEffect, useState } from "react";

const SummaryCards = ({ expenses }) => {
  const [summary, setSummary] = useState({
    total: 0,
    avg: 0,
    topCategory: "",
  });

  useEffect(() => {
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    const avg = expenses.length ? total / expenses.length : 0;

    const categoryMap = {};
    expenses.forEach(e => {
      categoryMap[e.category] =
        (categoryMap[e.category] || 0) + e.amount;
    });

    const topCategory = Object.keys(categoryMap).reduce(
      (a, b) => (categoryMap[a] > categoryMap[b] ? a : b),
      ""
    );

    setSummary({ total, avg, topCategory });
  }, [expenses]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      
      <div className="bg-blue-500 text-white p-5 rounded-2xl shadow">
        <h3>Total Spending</h3>
        <p className="text-2xl font-bold">₹ {summary.total}</p>
      </div>

      <div className="bg-green-500 text-white p-5 rounded-2xl shadow">
        <h3>Average Expense</h3>
        <p className="text-2xl font-bold">₹ {summary.avg.toFixed(2)}</p>
      </div>

      <div className="bg-purple-500 text-white p-5 rounded-2xl shadow">
        <h3>Top Category</h3>
        <p className="text-2xl font-bold">{summary.topCategory}</p>
      </div>

    </div>
  );
};

export default SummaryCards;
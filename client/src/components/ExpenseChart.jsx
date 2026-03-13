import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EFF"];

function ExpenseChart({ expenses }) {

  const categoryData = {};

  expenses.forEach((expense) => {
    const cat = expense.category || "Other";

    if (!categoryData[cat]) {
      categoryData[cat] = 0;
    }

    categoryData[cat] += Number(expense.amount);
  });

  const chartData = Object.keys(categoryData).map((key) => ({
    name: key,
    value: categoryData[key]
  }));

  return (
    <div>
      <h2>Expense Distribution</h2>

      <PieChart width={400} height={300}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          label
        >
          {chartData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default ExpenseChart;
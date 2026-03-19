import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { getMonthlyExpenses } from "../services/api";

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const MonthlyChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMonthlyData = async () => {
      try {
        const res = await getMonthlyExpenses();
        const monthlyData = res.data;

        const formattedData = monthlyData.map(item => ({
          month: monthNames[item._id - 1],
          total: item.total,
        }));

        setData(formattedData);
      } catch (error) {
        console.error("Error fetching monthly data:", error);
      }
    };

    fetchMonthlyData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4">
        Monthly Spending
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;
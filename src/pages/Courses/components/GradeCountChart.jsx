import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { GradeCountData } from "../../../data/Data";

function GradeCountChart() {
  return (
    <ResponsiveContainer width="40%" height="90%">
      <BarChart
        width={500}
        data={GradeCountData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <text x="50%" y={20} textAnchor="middle" stroke="#FFFFFF" fontSize={18}>
          Number of Courses with Alphanumeric Grade
        </text>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip labelStyle={{ color: "#000000" }} />
        <Bar dataKey="count" fill="#ABABAB" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default GradeCountChart;

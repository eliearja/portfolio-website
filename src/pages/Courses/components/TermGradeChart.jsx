import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { TermGradeData } from "../../../data/Data";

function TermGradeChart() {
  return (
    <ResponsiveContainer width="40%" height="90%">
      <LineChart
        width={500}
        data={TermGradeData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <text x="50%" y={30} textAnchor="middle" stroke="#FFFFFF" fontSize={18}>
          Term GPA
        </text>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip labelStyle={{ color: "#000000" }} />
        <Line
          type="monotone"
          dataKey="gpa"
          stroke="var(--mainRed)"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TermGradeChart;

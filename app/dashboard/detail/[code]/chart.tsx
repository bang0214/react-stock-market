import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const testData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between items-center mb-4">
        {/* <div className="text-gray-700">刷新倒计时: {countdown}s</div> */}
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={testData} width={500} height={300}>
          <XAxis></XAxis>
          <YAxis></YAxis>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

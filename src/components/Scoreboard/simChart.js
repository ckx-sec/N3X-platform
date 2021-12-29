import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "1:00",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "6:00",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "11:00",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "16:00",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "22:00",
    uv: 1890,
    pv: 4800,
    amt: 2181
  }
];

function SimChart() {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}
export default SimChart;
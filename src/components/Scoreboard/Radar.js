import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const data = [
  {
    subject: "PWN",
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: "WEB",
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: "CRYPTO",
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: "MISC",
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: "REVERSE",
    A: 85,
    B: 90,
    fullMark: 150
  },
  {
    subject: "OTHERS",
    A: 65,
    B: 85,
    fullMark: 150
  }
];

function MyRadar(){
  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}

export default MyRadar;
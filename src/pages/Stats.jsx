import React from "react";
import { useAppContext } from "../context/AppContext";
import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend } from "recharts";

const Stats = () => {
  const { timeline } = useAppContext();

  const groupedData = Object.values(
    timeline.reduce((acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = { name: item.type, value: 0 };
      }
      acc[item.type].value += 1;
      return acc;
    }, {})
  );

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={groupedData}
            dataKey="value"
            nameKey="name"
            innerRadius="60%"
            outerRadius="80%"
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stats;
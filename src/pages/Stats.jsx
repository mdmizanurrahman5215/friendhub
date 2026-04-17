import React from "react";
import { useAppContext } from "../context/AppContext";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import EmptyPage from "./EmptyPage";

const Stats = () => {
  const { timeline } = useAppContext();

  const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#3B82F6"];

  const groupedData = Object.values(
    timeline.reduce((acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = { name: item.type, value: 0 };
      }
      acc[item.type].value += 1;
      return acc;
    }, {}),
  );

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10">
        Friendship Analytics
      </h1>
      {timeline.length === 0 ? (
        <div>
          <EmptyPage />
        </div>
      ) : (
        <div>
          <div style={{ width: "100%", height: "400px" }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={groupedData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius="60%"
                  outerRadius="80%"
                >
                  {groupedData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default Stats;

import React from "react";
import { useContext } from "react";

import { GoalContext } from "../context/GoalContext";

function Categories() {
  const { goals } = useContext(GoalContext);
  const categories = [...new Set(goals.map((goal) => goal.category))];

  return (
    <div className="p-6 min-h-screen">
      <h1
        className="
 text-3xl
 font-bold
 mb-6
 "
      >
        Categories
      </h1>
      <div
        className="
 grid
 md:grid-cols-2
 lg:grid-cols-3
 gap-4
 "
      >
        {categories.map((category) => {
          const activeCount = goals.filter(
            (goal) => goal.category === category && goal.status === "active",
          ).length;
          const completedCount = goals.filter(
            (goal) => goal.category === category && goal.status === "completed",
          ).length;
          const totalGoals = goals.filter(
            (goal) => goal.category === category,
          ).length;

          const percent = totalGoals ? (completedCount / totalGoals) * 100 : 0;
          return (
            <div
              key={category}
              className="
 border
 rounded-xl
 p-4

 bg-white
 dark:bg-gray-800
 "
            >
              <h2
                className="
 text-xl
 font-bold
 mb-3
 "
              >
                {category}
              </h2>
              <p>
                Active:
                {activeCount}
              </p>
              <p>
                Completed:
                {completedCount}
              </p>
              <div
                className="
    w-full
    bg-gray-200
    h-3
    rounded
    mt-4
  "
              >
                <div
                  className="
      bg-green-500
      h-3
      rounded
    "
                  style={{
                    width: `${percent}%`,
                  }}
                />
              </div>

              <p className="mt-2 text-sm">{percent.toFixed(0)}% Completed</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;

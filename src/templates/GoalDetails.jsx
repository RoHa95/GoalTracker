import { useContext } from "react";

import { useParams } from "react-router-dom";

import { GoalContext } from "../context/GoalContext";

import React from "react";

function GoalDetails() {
  const { id } = useParams();
  const { goals } = useContext(GoalContext);
  const goal = goals.find((g) => g.id === Number(id));
  const percent = (goal.progress / goal.target) * 100;
  if (!goal) {
    return <h2>Goal Not Found</h2>;
  }

  return (
    <div
      className="
      max-w-2xl
      mx-auto
      p-6
    "
    >
      <h1
        className="
    text-3xl
    font-bold
    mb-6
  "
      >
        {goal.title}
      </h1>
      <p>
        Category:
        {goal.category}
      </p>
      <p>
        Type:
        {goal.type}
      </p>
      <p>
        Target:
        {goal.target}
      </p>
      <p>
        Progress:
        {goal.progress}
      </p>
      <p>
        Status:
        {goal.status}
      </p>
      <p>
        Created:
        {new Date(goal.createdAt).toLocaleDateString()}
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
      <h2
        className="
   text-xl
   font-bold
   mt-8
  "
      >
        Progress History
      </h2>
      {goal.logs.length === 0 && <p>No logs yet</p>}
      {goal.logs.map((log, index) => (
        <div key={index}>{new Date(log.date).toLocaleDateString()}</div>
      ))}
    </div>
  );
}

export default GoalDetails;

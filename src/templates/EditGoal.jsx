import React from "react";
import { useContext, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { GoalContext } from "../context/GoalContext";
function EditGoal() {
  const { id } = useParams();

  const { goals, setGoals } = useContext(GoalContext);

  const goal = goals.find((g) => g.id === Number(id));
  const [title, setTitle] = useState(goal.title);

  const [category, setCategory] = useState(goal.category);

  const [target, setTarget] = useState(goal.target);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    setGoals((prev) =>
      prev.map((g) => {
        if (g.id !== goal.id) {
          return g;
        }

        return {
          ...g,

          title,

          category,

          target: Number(target),

          updatedAt: new Date().toISOString(),
        };
      }),
    );

    navigate("/goals");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="
    w-full
    border
    p-2
    rounded
    mb-3
  "
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="
    w-full
    border
    p-2
    rounded
    mb-3
  "
        />
        <input
          type="number"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="
    w-full
    border
    p-2
    rounded
    mb-3
  "
        />
        <button
          className="
    bg-blue-500
    text-white
    px-4
    py-2
    rounded
  "
        >
          Save
        </button>
      </form>
    </>
  );
}

export default EditGoal;

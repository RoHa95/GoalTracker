import { useContext, useState } from "react";

import { GoalContext } from "../context/GoalContext";

import { useNavigate } from "react-router-dom";
import { translations } from "../data/translation";

function CreateGoals() {
  const [title, setTitle] = useState("");

  const [category, setCategory] = useState("");

  const [type, setType] = useState("daily");

  const [target, setTarget] = useState("");

  const { setGoals } = useContext(GoalContext);
  const { language } = useContext(GoalContext);
  const t = translations[language];
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !category || !target) {
      alert("Please fill all fields");

      return;
    }

    const newGoal = {
      id: Date.now(),

      title,

      category,

      type,

      target: Number(target),

      progress: 0,

      status: "active",

      logs: [],

      createdAt: new Date().toISOString(),
    };

    setGoals((prev) => [...prev, newGoal]);

    navigate("/goals");
  };

  return (
    <div
      className="
      max-w-xl
      mx-auto
      mt-10
      p-6
      border
      rounded-xl
      shadow
      bg-white
dark:bg-gray-700
text-black
dark:text-white
    "
    >
      <h1
        className="
        text-2xl
        font-bold
        mb-6
      "
      >
        {t.createGoal}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Title</label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="
      w-full
      border
      rounded-lg
      p-2
    "
          />
        </div>
        <div>
          <label>Category</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="
      w-full
      border
      rounded-lg
      p-2
    "
          >
            <option value="">Select Category</option>

            <option value="Study">Study</option>

            <option value="Health">Health</option>

            <option value="Work">Work</option>

            <option value="Personal">Personal</option>
          </select>
        </div>
        <div>
          <label>Goal Type</label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="
      w-full
      border
      rounded-lg
      p-2
    "
          >
            <option value="daily">Daily</option>

            <option value="count">Count Based</option>

            <option value="time">Time Based</option>
          </select>
        </div>
        <div>
          <label>Target</label>

          <input
            type="number"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="
      w-full
      border
      rounded-lg
      p-2
    "
          />
        </div>
        <button
          type="submit"
          className="
    w-full
    bg-blue-500
    text-white
    py-2
    rounded-lg
  "
        >
          Create Goal
        </button>
      </form>
    </div>
  );
}

export default CreateGoals;

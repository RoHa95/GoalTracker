import { Button, Card } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GoalContext } from "../context/GoalContext";

function GoalCard({ goal }) {
  const {
    setGoals,
    setXp,
    streak,
    setStreak,
    lastProgressDate,
    setLastProgressDate,
  } = useContext(GoalContext);

  const percent = (goal.progress / goal.target) * 100;

  const handleDelete = () => {
    const ok = window.confirm("Delete this goal?");

    if (!ok) return;

    setGoals((prev) => prev.filter((g) => g.id !== goal.id));
  };

  const addProgress = () => {
    if (goal.status === "completed") {
      return;
    }
    if (goal.status === "paused") {
      return;
    }
    setXp((prev) => prev + 20);
    const today = new Date();

    if (!lastProgressDate) {
      setStreak(1);

      setLastProgressDate(today.toISOString());
    } else {
      const last = new Date(lastProgressDate);

      const diff = Math.floor((today - last) / (1000 * 60 * 60 * 24));

      if (diff === 1) {
        setStreak((prev) => prev + 1);

        setLastProgressDate(today.toISOString());
      } else if (diff > 1) {
        setStreak(1);

        setLastProgressDate(today.toISOString());
      }
    }
    setGoals((prev) =>
      prev.map((g) => {
        if (g.id !== goal.id) {
          return g;
        }
        if (g.status === "completed") {
          return g;
        }
        const updatedProgress = g.progress + 1;
        const status = updatedProgress >= g.target ? "completed" : g.status;
        // return {
        //   ...g,

        //   progress: updatedProgress,

        //   status,
        // };
        // return {
        //   ...g,

        //   progress: updatedProgress,

        //   logs: [
        //     ...g.logs,

        //     {
        //       date: new Date().toISOString(),

        //       amount: 1,
        //     },
        //   ],
        // };
        return {
          ...g,

          progress: updatedProgress,

          status,

          logs: [
            ...g.logs,

            {
              date: new Date().toISOString(),

              amount: 1,
            },
          ],
        };
      }),
    );
  };
  const restoreGoal = () => {
    setGoals((prev) =>
      prev.map((g) =>
        g.id === goal.id
          ? {
              ...g,
              status: "active",
            }
          : g,
      ),
    );
  };
  const togglePause = () => {
    if (goal.status === "completed") {
      return;
    }
    setGoals((prev) =>
      prev.map((g) => {
        if (g.id !== goal.id) {
          return g;
        }

        return {
          ...g,

          status: g.status === "paused" ? "active" : "paused",
        };
      }),
    );
  };
  return (
    <div
      className={`border rounded-xl p-4 shadow-sm
    ${goal.status === "paused" ? "opacity-60" : ""}
  `}
    >
      <div className="flex justify-between">
        <h2 className=" font-bold text-lg ">{goal.title}</h2>

        <span
          className="
          flex items-center justify-center
      bg-blue-100
      text-gray-600 dark:text-black
      px-2
      rounded
      text-sm
    "
        >
          {goal.category}
        </span>
      </div>
      <div
        className="
    w-full
    bg-gray-200
    h-2
    rounded
    mt-3
  "
      >
        <div
          className="
      bg-green-500
      h-2
      rounded
    "
          style={{
            width: `${percent}%`,
          }}
        />
      </div>
      <p className="mt-2">
        {goal.progress}/{goal.target}
      </p>
      <span
        className={`

px-2
py-1
rounded
text-black

${
  goal.status === "active"
    ? "bg-green-100"
    : goal.status === "paused"
      ? "bg-yellow-100"
      : "bg-blue-100"
}
`}
      >
        {goal.status}
      </span>
      {/* 
      <p>
        Status:
        {goal.status}
      </p> */}
      <div className="flex mt-3 items-center justify-start gap-2 flex-wrap">
        <button
          onClick={handleDelete}
          className="
    px-2
    py-1
    border
    cursor-pointer
    rounded
    hover:bg-red-100
  "
        >
          Delete
        </button>

        <button
          onClick={addProgress}
          disabled={goal.status === "completed"}
          className={`
  px-2 py-1 rounded border hover:bg-green-100
  ${goal.status === "completed" ? "opacity-50 cursor-not-allowed" : ""}
`}
        >
          + Progress
        </button>
        <Link
          to={`/goals/${goal.id}`}
          className="
    px-2
    py-1
    border
    rounded
    hover:bg-blue-100
  "
        >
          Details
        </Link>
        <button
          className="
    px-2
    py-1
    border
    rounded
    hover:bg-yellow-100
  "
          onClick={togglePause}
        >
          {goal.status === "paused" ? "Resume" : "Pause"}
        </button>
        <Link
          to={`/goals/edit/${goal.id}`}
          className="
    px-2
    py-1
    border
    rounded
    hover:bg-gray-200
  "
        >
          Edit
        </Link>
        {goal.status === "completed" && (
          <button
            onClick={restoreGoal}
            className="
       
        cursor-pointer
        px-2
        py-1
        border
        rounded
        hover:bg-indigo-200
      "
          >
            Restore
          </button>
        )}
      </div>
    </div>
  );
}

export default GoalCard;

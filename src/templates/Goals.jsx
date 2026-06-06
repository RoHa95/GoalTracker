import React from "react";
import { Button } from "flowbite-react";
import GoalCard from "../components/GoalCard";
import { useContext } from "react";
import { translations } from "../data/translation";
import { GoalContext } from "../context/GoalContext";
import { useState } from "react";

function Goals() {
  const { goals } = useContext(GoalContext);
  const { language } = useContext(GoalContext);
  const t = translations[language];
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const filteredGoals = goals
    .filter((goal) => goal.title.toLowerCase().includes(search.toLowerCase()))
    .filter((goal) => {
      if (filter === "all") {
        return true;
      }

      return goal.status === filter;
    })
    .sort((a, b) => {
      if (sortBy === "newest") {
        return b.id - a.id;
      }
      if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      if (sortBy === "progress") {
        const aPercent = (a.progress / a.target) * 100;

        const bPercent = (b.progress / b.target) * 100;

        return bPercent - aPercent;
      }
      return 0;
    });
  return (
    <div
      className="
      p-6 bg-white
dark:bg-gray-700
text-black
dark:text-white
    "
    >
      <h1
        className="
    text-3xl
    font-bold
    mb-6
  "
      >
        {t.goals}
      </h1>
      {goals.length === 0 && <h2>No Goals Yet</h2>}

      <input
        type="text"
        placeholder="Search goal..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
    border
    p-2
    rounded
    w-full
    mb-4
  "
      />
      <div
        className="
    flex
    gap-2
    mb-6
    flex-wrap
  "
      >
        <button
          className={`
 px-3
 py-1
 border
 rounded

 ${filter === "all" ? "bg-blue-500 text-white" : ""}
`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`
 px-3
 py-1
 border
 rounded

 ${filter === "all" ? "bg-blue-500 text-white" : ""}
`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`
 px-3
 py-1
 border
 rounded

 ${filter === "all" ? "bg-blue-500 text-white" : ""}
`}
          onClick={() => setFilter("paused")}
        >
          Paused
        </button>
        <button
          className={`
 px-3
 py-1
 border
 rounded

 ${filter === "all" ? "bg-blue-500 text-white" : ""}
`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="
    border
    py-1 px-2 cursor-pointer
    rounded
    mb-6
  "
      >
        <option value="newest">Newest</option>

        <option value="progress">Progress</option>

        <option value="category">Category</option>
      </select>
      <div
        className="
    grid
    grid-cols-1
    lg:grid-cols-2
    gap-4
  "
      >
        {filteredGoals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </div>
  );
}

export default Goals;

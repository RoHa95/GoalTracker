import React from "react";
import TopSummary from "../components/TopSummary";
import QuickActions from "../components/QuickActions";
import ActiveGoalsList from "../components/ActiveGoalsList";
import CompletedGoalsList from "../components/CompletedGoalsList";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GoalCard from "../components/GoalCard";
import { GoalContext } from "../context/GoalContext";
import { translations } from "../data/translation";

function Dashboard() {
  const { goals, xp, streak } = useContext(GoalContext);
  const { language } = useContext(GoalContext);
  const t = translations[language];
  const completedCount = goals.filter(
    (goal) => goal.status === "completed",
  ).length;
  const completion = goals.length ? (completedCount / goals.length) * 100 : 0;

  const activeGoals = goals.filter((goal) => goal.status === "active");
  // return (
  //   <div>
  //     <TopSummary />
  //     <QuickActions />
  //     <ActiveGoalsList />
  //     <CompletedGoalsList />
  //   </div>
  // );

  return (
    <div
      className="p-6 min-h-screen overflow-y-scroll
 "
    >
      <h1
        className="
    text-3xl
    font-bold
    mb-6
  "
      >
        {t.dashboard}
      </h1>
      <div
        className="
    grid
    grid-cols-2
    md:grid-cols-4
    gap-4
    mb-8
  "
      >
        <div
          className="
    border
    rounded-xl
    p-4
  "
        >
          <h3>Completion</h3>

          <p
            className="
      text-2xl
      font-bold
    "
          >
            {completion.toFixed(0)}%
          </p>
        </div>
        <div
          className="
    border
    rounded-xl
    p-4
  "
        >
          <h3>Completed</h3>

          <p
            className="
      text-2xl
      font-bold
    "
          >
            {completedCount}
          </p>
        </div>
        <div
          className="
    border
    rounded-xl
    p-4
  "
        >
          <h3>XP</h3>

          <p
            className="
      text-2xl
      font-bold
    "
          >
            {xp}
          </p>
        </div>
        <div
          className="
    border
    rounded-xl
    p-4
  "
        >
          <h3
            className="
      text-lg
      font-semibold
    "
          >
            🔥 Streak
          </h3>

          <p
            className="
      text-2xl
      font-bold
    "
          >
            Streak : {streak}
          </p>
        </div>
      </div>
      <div
        className="
    flex
    flex-col
    gap-4
    mb-8
  "
      >
        {/* <Link
          to="/goals/new"
          className="
    bg-blue-500
    text-white
    px-4
    py-2
    rounded-lg
  "
        >
          + New Goal
        </Link> */}
        {/* <Link
          to="/goals"
          className="
    border
    px-4
    py-2
    rounded-lg
  "
        >
          View Goals
        </Link> */}
        <div>
          <h2
            className="
    text-xl
    font-bold
    mb-4
  "
          >
            Active Goals
          </h2>
          <div
            className="
    grid
    md:grid-cols-2
    lg:grid-cols-3
    gap-4
  "
          >
            {activeGoals.length === 0 && <p>No Goal has been set yet!!!</p>}
            {activeGoals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </div>
        <div>
          <h2
            className="
    text-xl
    font-bold
    mt-10
    mb-4
  "
          >
            Completed Goals
          </h2>
          <div
            className=" grid
    md:grid-cols-2
    lg:grid-cols-3
    gap-4"
          >
            {goals.length === 0 && <p>No Goal has been completed yet!!!</p>}
            {goals
              .filter((goal) => goal.status === "completed")
              .slice(0, 3)
              .map((goal) => (
                <GoalCard key={goal.id} goal={goal} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
import TopSummary from "../components/TopSummary";
import QuickActions from "../components/QuickActions";
import ActiveGoalsList from "../components/ActiveGoalsList";
import CompletedGoalsList from "../components/CompletedGoalsList";

function Dashboard() {
  return (
    <div>
      <TopSummary />
      <QuickActions />
      <ActiveGoalsList />
      <CompletedGoalsList />
    </div>
  );
}

export default Dashboard;

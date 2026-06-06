import React from "react";
import { Link, useLocation } from "react-router-dom";
import FilterGoals from "./FilterGoals";

function SideBarContent() {
  const location = useLocation();
  const isGoalsList = location.pathname === "/goals";
  return (
    <div className="flex items-center flex-col w-full h-full gap-y-3 px-2">
      <div className="w-full bg-white hover:bg-blue-300 cursor-pointer rounded-md">
        <Link className="w-full" to="/goals/new">
          <div className="w-full p-2">New +</div>
        </Link>
      </div>

      <div className="w-full bg-white hover:bg-blue-300 cursor-pointer rounded-md">
        <Link to="/dashboard">
          <div className="w-full p-2">Dashboard</div>
        </Link>
      </div>
      <div className="w-full bg-white hover:bg-blue-300 cursor-pointer rounded-md">
        <Link to="/goals">
          <div className="w-full p-2">All Goals</div>
        </Link>
      </div>
      {/* {isGoalsList && <div className="w-full"><FilterGoals/></div>} */}
      <div className="w-full bg-white hover:bg-blue-300 cursor-pointer rounded-md">
        <Link to="/categories">
          <div className="w-full p-2">Categories</div>
        </Link>
      </div>
    </div>
  );
}

export default SideBarContent;

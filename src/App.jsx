import { Button } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./templates/Dashboard";
import Goals from "./templates/Goals";
import PageNotFound from "./templates/PageNotFound";
import DashboardLayout from "./layouts/DashboardLayout";
import CreateGoals from "./templates/CreateGoals";
import GoalDetails from "./templates/GoalDetails";
import Setting from "./templates/Setting";
import EditGoal from "./templates/EditGoal";
import Categories from "./templates/Categories";

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout/>}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/goals/new" element={<CreateGoals />} />
        <Route path="/goals/:id" element={<GoalDetails />} />
        <Route path="/goals/edit/:id" element={<EditGoal/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/setting" element={<Setting/>} />
        <Route path="/*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

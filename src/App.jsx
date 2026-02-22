import { Button } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./templates/Dashboard";
import Goals from "./templates/Goals";
import PageNotFound from "./templates/PageNotFound";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout/>}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/goals/new" element={<Goals />} />
        <Route path="/goals/:id" element={<Goals />} />
        <Route path="/categories" element={<Dashboard />} />
        <Route path="/setting" element={<Dashboard />} />
        <Route path="/*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

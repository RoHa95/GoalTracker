import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Container, Grid } from "@mui/material";
import { red } from "@mui/material/colors";
import SideBarContent from "../components/SideBarContent";

function DashboardLayout() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="bg-red-100 min-h-screen flex flex-col">
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <div className="max-w-5xl mx-auto w-full grid grid-cols-4 bg-green-200">
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-gray-600 transform transition-transform duration-300 ease-in-out ${openMenu ? "translate-x-0" : "translate-x-full"}`}
        >
          <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>

        <div className="bg-orange-300 col-start-1 col-end-5 sm:col-end-4 md:col-end-4">
          <Outlet />
        </div>
        <div className="hidden sm:flex  sm:col-start-4  md:col-start-4 col-end-5 bg-red-500">
          <SideBarContent />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Container, Grid } from "@mui/material";
import { red } from "@mui/material/colors";
import SideBarContent from "../components/SideBarContent";
import FNavbar from "../components/FNavbar";

function DashboardLayout() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="bg-gray-200">
      <div className="h-screen flex flex-col max-w-5xl mx-auto">
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        {/* <FNavbar/> */}

        <div className="max-w-5xl h-screen mx-auto w-full grid grid-cols-4">
          <div
            className={`fixed top-0 right-0 h-full w-72 bg-blue-300 transform transition-transform duration-300 ease-in-out ${openMenu ? "translate-x-0" : "translate-x-full"}`}
          >
            <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
          </div>

          <div
            className=" col-start-1 col-end-5 sm:col-end-4 md:col-end-4 border-l-2 border-white
                        mt-2 mr-2 px-2 max-h-screen overflow-y-scroll
                      bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg"
          >
            <Outlet />
          </div>
          <div className="hidden sm:flex pt-4 sm:col-start-4  md:col-start-4 col-end-5 bg-blue-800">
            <SideBarContent />
          </div>
        </div>
      </div>
    </div>
  );

 
}

export default DashboardLayout;

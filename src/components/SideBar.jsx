import React, { useState } from "react";

import { Link } from "react-router-dom";
import {
  RiDashboard3Line,
  RiEarthLine,
  RiArrowDownSLine,
  RiMessage3Line,
  RiCalendar2Line,
  RiSettings3Line,
  RiArrowUpSLine,
  RiCheckboxBlankCircleFill,
  RiLogoutCircleRLine,
} from "react-icons/ri";
import Selector from "./Selector";

const Sidebar = ({ showMenu }) => {
  const [selectorVisible, setSelectorVisible] = useState(false);
  return (
    <sideBar
      className={`bg-[#1E1F24]
      fixed ${
        showMenu ? "-left-0" : "-left-full"
      } lg:left-0 top-0 w-72 h-full p-8 flex flex-col justify-between transition-all z-50`}
    >
      {/* MENU */}
      <div>
        {/* LOGO */}
        <div className="mb-8">
          <h1 className="text-white uppercase font-bold text-2xl tracking-[4px]">
            JT Logo
          </h1>
        </div>
        {/* NAV */}
        <nav>
          <Link
            to="/"
            className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
          >
            <RiDashboard3Line /> Analytic
          </Link>
          <div
            onClick={() => setSelectorVisible(!selectorVisible)}
            className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
          >
            <RiEarthLine />
            <span className="flex-1 flex items-center justify-between gap-4 ">
              Social Media <RiArrowDownSLine />
            </span>
          </div>
          {selectorVisible && <Selector />}
          <Link
            to="/"
            className="flex items-center gap-4 text-gray-400 py-2  hover:text-gray-200 transition-colors"
          >
            <RiMessage3Line /> Message
          </Link>
          <Link
            to="/"
            className="flex items-center gap-4 text-gray-400 py-2  hover:text-gray-200 transition-colors"
          >
            <RiCalendar2Line /> Schedule
          </Link>
          <Link to="/" className="flex flex-col gap-4 text-gray-200 py-2">
            <span className="flex items-center gap-4">
              <RiSettings3Line className=" text-orange-600" />
              <div className="flex-1 flex items-center justify-between  hover:text-gray-200 transition-colors">
                Settings
                <RiArrowUpSLine />
              </div>
            </span>
            <nav className="flex flex-col border-l border-gray-600 ml-2">
              <Link to="/" className="relative pl-8 py-2 text-gray-300">
                <RiCheckboxBlankCircleFill className="absolute -left-[7px] text-orange-600 text-sm top-[50%] -translate-y-[50%] p-[4px] bg-[#1E1F24] rounded-full" />
                Plan
              </Link>
              <Link to="/" className="relative pl-8 py-2 text-gray-400">
                <RiCheckboxBlankCircleFill className="absolute -left-[7px] text-gray-500 text-sm top-[50%] -translate-y-[50%] p-[4px] bg-[#1E1F24] rounded-full" />
                Security
              </Link>
            </nav>
          </Link>
        </nav>
      </div>
      {/* LOGOUT */}
      <div>
        <Link
          to="/"
          className=" flex items-center gap-4 text-gray-400 hover:text-gray-200 transition-colors "
        >
          <RiLogoutCircleRLine /> Logout
        </Link>
      </div>
    </sideBar>
  );
};

export default Sidebar;

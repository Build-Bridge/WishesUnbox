import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

const DashboardNavbar = () => {
  return (
    <div className="bg-primary w-full p-3 text-white md:mx-auto md:w-11/12 rounded-md">
      <div className="my-3">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <p>
          Welcome back, <span className="font-bold">Micheal</span>
        </p>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-1 p-2 items-center justify-start border-2 border-white rounded-md w-[80%] scale-75">
          <FiSearch />
          <input
            type="text"
            placeholder="Search cards"
            // value="Search cards
            className="bg-transparent text-white focus:outline-none p-0"
          />
        </div>
        <div className="flex w-[20%] items-center justify-center gap-2">
          <FaRegUserCircle size={20} />
          <p className="font-bold text-[14px]">Micheal Keys</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;

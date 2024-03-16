import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { RiMenuFill } from "react-icons/ri";
import { useStateContext } from "../../contexts/ContextProvider";

export const DashboardNavbar = () => {
  const { setActiveMenu, searchText, setSearchText } = useStateContext();

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="bg-primary w-full text-white">
      <div className="flex items-start justify-between p-2">
        <div className="my-3">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <p>
            Welcome back, <span className="font-bold">Micheal</span>
          </p>
        </div>
        <button
          className="cursor-pointer p-2 md:hidden"
          onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        >
          <RiMenuFill size={30} />
        </button>
      </div>
      <div className="flex items-center justify-between gap-2 p-3">
        <div className="flex items-center justify-start gap-3 border-2 rounded-md px-1">
          <FiSearch size={20} />
          <input
            type="text"
            className="bg-transparent focus:outline-none p-1 w-[60%] placeholder:text-white"
            placeholder="Search cards"
            value={searchText}
            onChange={handleSearch}
          />
        </div>
        <div className="flex items-center justify-center gap-1">
          <FaRegUserCircle /> <span>Micheal Keys</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;

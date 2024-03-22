import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineNotifications } from "react-icons/md";
import { useStateContext } from "../../contexts/ContextProvider";

export const DashboardNavbar = () => {
  const { searchText, setSearchText } = useStateContext();

  // const handleSearch = (e) => {
  //   setSearchText(e.target.value);
  // };

  return (
    <div>
      <div className="p-5 flex items-center justify-between gap-5 w-full">
        <div className="flex items-center gap-3">
          {/* <button
          onClick={(prev) => {
            setActiveMenu(true) 
          }}
          >
            <RiMenuFill size={30} />
          </button> */}
          {/* <h1 className="text-xl font-bold text-primary">WishesUnbox</h1> */}
        </div>
        <div className="flex items-center gap-1 justify-center bg-slate-100 p-3 rounded-full flex-grow">
          <FiSearch />
          <input
            type="text"
            placeholder="search"
            className="bg-transparent outline-none w-full"
          />
        </div>
        <div className="flex items-center gap-2">
          <button>
            <FaRegUserCircle size={25} />
          </button>
          <button>
            <MdOutlineNotifications size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;

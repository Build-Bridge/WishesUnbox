import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { sidebarLinks } from "../../constants/index";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { RiMenuFill } from "react-icons/ri";

const Sidebar = () => {
  const { activeMenu } = useStateContext();
  const activeLink =
    "flex items-center gap-5 pl-4 p-3 bg-[#FFECDE] rounded-lg text-primary text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 p-3 rounded-lg text-black text-md hover:bg-slate-100";

  return (
    <>
      {activeMenu ? (
        <div className="overflow-auto static z-20 w-[250px] bg-white shadow-lg min-h-screen rounded-md">
          <div className="flex items-center justify-center m-5">
            <h1 className="text-primary text-xl font-bold">WishesUnbox</h1>
          </div>
          <div className="flex items-center justify-center">
            <h2 className=" flex items-center justify-center bg-primary text-white font-bold p-3 rounded-lg">
              Create Card{" "}
              <span className="m-1">
                <FiPlusCircle />
              </span>{" "}
            </h2>
          </div>
          <div className="mt-5">
            {sidebarLinks.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 uppercase m-2 mt-2">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={() => {}}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {/* {link.icon} */}
                    <span className="capitalize text-[14px]">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <RiMenuFill />
      )}
    </>
  );
};

export default Sidebar;

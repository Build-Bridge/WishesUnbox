import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { dashboard, configurations } from "../../constants/index";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

export const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  const activeLink =
    "flex items-center gap-5 pl-4 p-3 bg-[#FFECDE] rounded-lg text-primary text-md m-2 static";
  const normalLink =
    "flex items-center gap-5 pl-4 p-3 rounded-lg text-black text-md hover:bg-slate-100 static";

    // WIll continue to work on the sidebar tomorrow
  return (
    <>
        <div className={`absolute left-0 overflow-hidden fixed z-50 w-[55px] bg-white shadow-lg min-h-screen rounded-md duration-1000`}>
          <div className="flex items-center justify-between p-5">
          <button className="mr-2">
            <HiOutlineMenuAlt2 size={30}/>
          </button>

          <button onClick={(prev) => setActiveMenu(!prev)}>
            <IoCloseCircleSharp size={30}/>
          </button>
          </div>
          <div className="m-1">
            <div>
            {
              dashboard.map((link) => (
                <NavLink
                to={`/dashboard/${link.name}`}
                key={link.name}
                onClick={() => {
                  handleCloseSidebar;
                }}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <button>
                  {link.icon}
                  </button>
                <span className="capitalize text-[14px]">{link.name}</span>
              </NavLink>
              ))
            }
            </div>

            <div className="mt-64">
            {
              configurations.map((link) => (
                <NavLink
                to={`/dashboard/${link.name}`}
                key={link.name}
                onClick={() => {
                  handleCloseSidebar;
                }}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                 <button>
                  {link.icon}
                  </button>
                <span className="capitalize text-[14px]">{link.name}</span>
              </NavLink>
              ))
            }
            </div>
          
            {/* {sidebarLinks.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 uppercase m-2 mt-2">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/dashboard/${link.name}`}
                    key={link.name}
                    onClick={() => {
                      handleCloseSidebar;
                    }}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize text-[14px]">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))} */}
          </div>
        </div>
    </>
  );
};

export default Sidebar;

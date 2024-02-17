import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import { useStateContext } from "../contexts/ContextProvider";

export const Dashboard = () => {
  const width = window.innerWidth;
  const { setActiveMenu } = useStateContext();

  return (
    <div className="flex flex-1 relative">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">
        <div className="flex items-start">
          <DashboardNavbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

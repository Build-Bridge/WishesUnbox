// import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";

const Dashboard = () => {
  return (
    <div className="flex flex-1 p-5">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">
        <div>
          <DashboardNavbar />
        </div>
        <div>Dynamic Component</div>
      </div>
    </div>
  );
};

export default Dashboard;

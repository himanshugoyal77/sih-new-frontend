import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const [isOnline, setIsOnline] = useState(false);
  const location = useLocation().pathname;
  return (
    <div className="flex flex-col md:flex-row w-full md:border rounded-md">
      <aside
        className="w-[20%] h-screen list-none font-thin bg-white 
      pt-10 px-3 text-gray-600 cursor-pointer"
      >
        <li
          className="py-2 shadow-sm px-4"
          style={{
            background: location === "/dashboard" ? "#E5E5E5" : "",
            color: location === "/dashboard" ? "blue" : "",
          }}
        >
          <Link to="/dashboard"> Dashboard</Link>
        </li>
        <li
          className="py-2 shadow-sm px-4"
          style={{
            background: location === "/dashboard/appointment" ? "#E5E5E5" : "",
            color: location === "/dashboard/appointment" ? "blue" : "",
          }}
        >
          <Link to="appointment"> Appointment</Link>
        </li>
        <li
          className="py-2 shadow-sm px-4"
          style={{
            background: location === "/dashboard/reviews" ? "#E5E5E5" : "",
            color: location === "/dashboard/reviews" ? "blue" : "",
          }}
        >
          <Link to="reviews"> Reviews</Link>
        </li>
        <li
          className="py-2 shadow-sm px-4"
          style={{
            background:
              location === "/dashboard/update-profile" ? "#E5E5E5" : "",
            color: location === "/dashboard/update-profile" ? "blue" : "",
          }}
        >
          <Link to="update-profile"> Update Profile</Link>
        </li>
        <li
          className="py-2 shadow-sm px-4"
          style={{
            background: location === "/dashboard/clients" ? "#E5E5E5" : "",
            color: location === "/dashboard/clients" ? "blue" : "",
          }}
        >
          <Link to="clients"> Clients</Link>
        </li>
        <div className="h-10"></div>
        <label className="relative inline-flex items-center cursor-pointer ml-3">
          <input
            type="checkbox"
            value={isOnline}
            onChange={(e) => setIsOnline(e.target.checked)}
            className="sr-only peer"
          />
          <div
            className="w-11 h-6 bg-gray-200 rounded-full peer 
           peer-checked:after:translate-x-full peer-checked:after:border-white
            after:content-[''] after:absolute after:top-0.5 after:left-[2px]
             after:bg-white after:border-gray-300 after:border 
             after:rounded-full after:h-5 after:w-5 after:transition-all
            peer-checked:bg-blue-600"
          ></div>
          <span className="ml-3 font-thin  text ">Online</span>
        </label>
      </aside>
      <aside className="w-[80%]">
        <Outlet />
      </aside>
    </div>
  );
};

export default DashboardLayout;

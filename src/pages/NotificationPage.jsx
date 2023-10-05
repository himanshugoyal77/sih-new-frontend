import React, { useState } from "react";
import Navbar from "../components/Navbar";
import LawyerProfile from "../components/LawyerProfile";
import { Tabs } from "antd";
import ApprovedAppointment from "../components/ApprovedAppointment";
import Upcomming from "./Upcomming";
import ComplaintPage from "./ComplaintPage";

const Pages = [
  {
    id: 0,
    path: "/upcomming",
    element: <div>Upcomming</div>,
    component: <Upcomming />,
  },
  {
    id: 1,
    path: "/file-complaint",
    element: <div>File Complaint</div>,
    component: <ComplaintPage />,
  },
  {
    id: 2,
    path: "/favourites",
    element: <div>Favourites</div>,
  },
  {
    id: 3,
    path: "/history",
    element: <div>History</div>,
  },
];

const NotificationPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="w-[90%] mx-auto">
      <Navbar isChangeColor="true" />
      <div className="flex mt-5">
        <aside className=" px-2 py-6 w-[20%] h-1/2 bg-white shadow-md border rounded-md ">
          <ul className="text-start text">
            {Pages.map((page) => {
              return (
                <li
                  key={page.id}
                  className={`py-2 px-4 rounded-md cursor-pointer transition-all ease-in-out duration-400 ${
                    currentPage === page.id ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setCurrentPage(page.id)}
                >
                  {page.element}
                </li>
              );
            })}
          </ul>
        </aside>
        <aside
          className=" flex-grow h-screen px-2 
          rounded-md ml-4"
        >
          {Pages[currentPage]?.component}
        </aside>
      </div>
    </div>
  );
};

export default NotificationPage;

import { ConfigProvider } from "antd";
import Otp from "./pages/OtpPage";
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import SearchPage from "./pages/SearchPage";
import SingleLawyer from "./pages/LawyerDetails";
import NotificationPage from "./pages/NotificationPage";
import Dashboard from "./pages/lawyerPages/Dashboard";
import Navbar from "./components/Navbar";
import { useState } from "react";
import DashboardLayout from "./pages/lawyerPages/DashboardLayout";
import Footer from "./components/Footer";

const LawyerLayout = () => {
  return (
    <div className="w-[90%] md:w-[100%] mx-auto">
      <div className="sticky top-0">
        <Navbar isChangeColor="true" />
      </div>
      <DashboardLayout />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <Otp />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/lawyer-details/:id",
    element: <SingleLawyer />,
  },
  {
    path: "notification",
    element: <NotificationPage />,
  },
  {
    path: "/dashboard",
    element: <LawyerLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "appointment",
        element: <h1>Another page</h1>,
      },
      {
        path: "reviews",
        element: <h1>Another page2</h1>,
      },
      {
        path: "update-profile",
        element: <h1>Another page3</h1>,
      },
      {
        path: "clients",
        element: <h1>Another page4</h1>,
      },
    ],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#000",
            borderRadius: 2,
            colorBgContainer: "#fff",
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
}

export default App;

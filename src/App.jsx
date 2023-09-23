import { ConfigProvider } from "antd";
import Otp from "./pages/OtpPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import SearchPage from "./pages/SearchPage";
import SingleLawyer from "./pages/LawyerDetails";
import NotificationPage from "./pages/NotificationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [],
  },
  {
    path: "/verify",
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
    path: "search/lawyer-details/:id",
    element: <SingleLawyer />,
  },
  {
    path: "notification",
    element: <NotificationPage />,
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

import React, { useState } from "react";
import { Badge, Popover } from "antd";
import notifications from "../assets/notifications.svg";
import LogoComponent from "./LogoComponent";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };
  return (
    <div className="cursor-pointer  w-32 text-center flex flex-col items-center justify-center">
      <p
        onClick={handleClick}
        className="flex w-full items-center py-2 px-1 gap-2 hover:bg-gray-200 hover:rounded-sm ease-in-out transition-all duration-150"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 text-black font-bold"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>

        <span className="hover:font-bold">View Profile</span>
      </p>
      <hr />
      <p
        onClick={handleClick}
        className="flex w-full items-center py-2 px-1 gap-2 hover:bg-gray-200 hover:rounded-sm ease-in-out transition-all duration-150"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
        <span className="hover:font-bold">Log out</span>
      </p>
    </div>
  );
};

const Navbar = ({ isChangeColor }) => {
  const navigate = useNavigate();
  const cls =
    "bg-red-500 text-white px-4 py-2 rounded-md shadow-md bg-black text-black text-white hidden";
  const [colorChange, setColorchange] = useState(isChangeColor || false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 500) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  if (!isChangeColor) {
    window.addEventListener("scroll", changeNavbarColor);
  }

  return (
    <div
      className={
        "text-white px-14 py-2 flex items-center justify-between absolute top-0 left-0 right-0 " +
        (colorChange ? " bg-[#36454F] " : "")
      }
    >
      <LogoComponent colorChange={colorChange} />
      <div className="wrapper flex items-center justify-around gap-8">
        <span
          className={
            "underline cursor-pointer" + (colorChange ? "  text-white" : "")
          }
        >
          emergency
        </span>
        <div className={cls}></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          {...(colorChange ? { fill: "none" } : { fill: "none" })}
          className={colorChange ? "w-6 h-6 text-white mt-1" : " w-6 h-6 mt-1"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
          />
        </svg>
        <Badge
          count={5}
          size={1}
          style={{
            backgroundColor: "#F87171",
            color: "#fff",
            border: "none",
            outline: "none",
            boxShadow: "0 0 0 1px #F87171 inset ",
            cursor: "pointer",
            marginTop: "4px",
          }}
        >
          <img
            onClick={() => navigate("/notification")}
            src={notifications}
            alt="notifications"
            className={
              "cursor-pointer mt-1" + (colorChange ? " text-white " : "")
            }
          />
        </Badge>
        <Popover content={Content} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 p-1 text-white bg-gray-400 shadow-md rounded-full flex items-center justify-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;

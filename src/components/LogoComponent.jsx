import React from "react";

import logo from "../assets/logo.png";

const LogoComponent = ({ colorChange }) => {
  return (
    <div className="w-[200px] logo-wrapper flex items-center gap-2">
      <img src={logo} className="h-9  cursor-pointer rotate-0" alt="" />
      <h1
        className={
          colorChange
            ? "text-white text-xl font-bold"
            : "text-white text-xl font-bold"
        }
      >
        Nyay-Sevak
      </h1>
    </div>
  );
};

export default LogoComponent;

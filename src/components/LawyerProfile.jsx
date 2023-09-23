import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import trustIcon from "../assets/trust.png";

const LawyerProfile = ({ lawyer, istrusted }) => {
  const [currLawyer, setCurrLawyer] = useState({});
  console.log("lawyer", lawyer);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`lawyer-details/${1}`, { state: { lawyer: currLawyer } });
  };

  //   useEffect(() => {
  //     const getAllInfo = async (id) => {
  //       const res = await axios.get(
  //         `http://localhost:5000/api/lawyers/info/${id}`
  //       );
  //       console.log("res", res);
  //       setCurrLawyer(res.data[0]);
  //     };

  //     getAllInfo(lawyer._id);
  //   }, [lawyer]);

  return (
    <div
      className="bg-white flex flex-col items-start w-[200px]
      rounded-s-sm p-2 shadow-md relative cursor-pointer
    hover:shadow-xl hover:scale-105 duration-700 ease-in-out
    "
    >
      <img
        src="https://media.istockphoto.com/id/1326908785/photo/shot-of-a-business-women-using-laptop-working-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=HuaPJRwxIlxQaeT-rhb-YwvBzhf4GrgqCDk5F7rvqHg="
        alt=""
        className="h-32 w-full object-cover"
      />
      <h1 className="text-center text-md font-bold text-gray-800 pt-2">
        {"Himanshu Goyal"}
      </h1>
      <p className="text-gray-500 text-xs font-thin py-0">
        {"Lawyer at Delhi High Court"}
      </p>
      <div className="flex h-5 mt-1">
        <svg
          className="w-3 h-3 text-black mr-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-3 h-3 text-black mr-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-3 h-3 text-black mr-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </div>
      <button
        onClick={() => handleClick(currLawyer._id)}
        className="mt-0 flex items-center justify-center 
        gap-2 border text-center px-2 py-1
         rounded-md  my-2 w-auto h-9 
          duration-500 ease-in-out"
      >
        <h2 className="font-light text-sm text-center">View Profile</h2>
      </button>
      {istrusted && (
        <img
          src={trustIcon}
          className="w-7 h-7 absolute -top-1 -right-2"
          alt=""
        />
      )}
    </div>
  );
};

export default LawyerProfile;

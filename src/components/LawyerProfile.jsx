import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import trustIcon from "../assets/trust.png";

const Lawyers = [
  {
    id: 0,
    img: "https://img.freepik.com/premium-photo/indian-young-female-entrepreneur_437792-374.jpg",
    name: "Jessica Anderson",
    rating: 4.8,
    specialization: "Criminal Defense",
    contact: {
      email: "jessica.anderson@example.com",
      phone: "+1 (555) 123-4567",
    },
    office: {
      address: "123 Main Street, Suite 567, Anytown, USA",
    },
    experience: {
      years_practiced: 12,
      law_firm: "Anderson & Associates",
    },
    education: {
      law_school: "Anytown Law School",
      degree: "Juris Doctor (JD)",
    },
    licenses: {
      state: "California, USA",
      bar_number: "123456",
    },
  },
  {
    id: 1,
    img: "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2020/01/11073647/JM5_5413.2e16d0ba.fill-600x440-1.jpg",
    name: "Michael Johnson",
    rating: 4.5,
    specialization: "Family Law",
    contact: {
      email: "michael.johnson@example.com",
      phone: "+1 (555) 987-6543",
    },
    office: {
      address: "456 Oak Street, Suite 789, Smalltown, USA",
    },
    experience: {
      years_practiced: 10,
      law_firm: "Johnson Law Firm",
    },
    education: {
      law_school: "Smalltown Law School",
      degree: "Juris Doctor (JD)",
    },
    licenses: {
      state: "New York, USA",
      bar_number: "789012",
    },
  },
  {
    id: 2,
    img: "https://im.rediff.com/news/2016/nov/04un.jpg?w=670&h=900",
    name: "Emily Smith",
    rating: 4.9,
    specialization: "Real Estate Law",
    contact: {
      email: "emily.smith@example.com",
      phone: "+1 (555) 234-5678",
    },
    office: {
      address: "789 Elm Street, Suite 123, Cityville, USA",
    },
    experience: {
      years_practiced: 8,
      law_firm: "Smith & Associates",
    },
    education: {
      law_school: "Cityville Law School",
      degree: "Juris Doctor (JD)",
    },
    licenses: {
      state: "Texas, USA",
      bar_number: "567890",
    },
  },
];

const LawyerProfile = ({ lawyer, istrusted }) => {
  const [currLawyer, setCurrLawyer] = useState({});
  console.log("lawyer", lawyer);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/lawyer-details/${1}`, { state: { lawyer: currLawyer } });
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
      <img src={lawyer?.img} alt="" className="h-32 w-full object-cover" />
      <h1 className="text-center text-md font-bold text-gray-800 pt-2">
        {lawyer?.name}
      </h1>
      <p className="text-gray-500 text-xs font-thin py-0">
{`Lawyer at ${lawyer?.experience.law_firm}`}
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

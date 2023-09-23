import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../context/userSlice";
import Navbar from "../components/Navbar";
import upload from "../context/upload";

const inputStyle =
  "py-2 px-4  rounded-[4px] border-2 border-blue-gray-200  border-gray-400 outline-none font-sans text-sm font-normal text-gray-600 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-black placeholder-shown:border-black focus:border-2 focus:border-black  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 ";

const Register = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userInfo.info);
  const dispatch = useDispatch();
  const [gender, setGender] = useState(-1);
  const [service, setService] = useState("none");
  const [profileImage, setProfileImage] = useState(
    "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
  );
  const location = useLocation();

  console.log("service", service);
  console.log("gender", gender);
  const handleFile = async (e) => {
    e.preventDefault();
    const files = e.target?.files;
    if (files?.length > 0) {
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      data.append("upload_preset", "fiverr");
      const url = await upload(data);
      console.log("url", url);
      setProfileImage(url);
    }
    toast.success("File Uploaded");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/auth/register";
    const { fname, lname, phone, email, gender, service } = e.target;
    const res = await axios.post(url, {
      fname: fname.value,
      lname: lname.value,
      phoneNumber: location?.state.phoneNumber,
      email: email.value,
      gender: gender.value,
      serviceLookingFor: service.value,
    });
    console.log(res.status);
    if (res.status !== 400) {
      toast.success("registered successfully!");
      dispatch(setUserDetails(res.data));
      setTimeout(() => {
        navigate("/home", { replace: true });
      }, 2000);
    } else {
      toast.error("Something went wrong!");
    }
  };
  return (
    <div className="w-[80%] mx-auto">
      <Navbar isChangeColor="true" />
      <div className="w-[60%] mx-auto mt-6 border py-4 px-8 bg-white rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="wifull flex justify-between items-start">
            <h1 className="text-2xl">Update Profile</h1>
            <div className="flex items-center justify-center p-2">
              <label className="flex flex-col items-center justify-center w-32 h-32 rounded-full border-2 border-gray-300 border-dashed cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src={profileImage}
                  alt=""
                />
                <input
                  onChange={handleFile}
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <div className="flex gap-12 mt-4">
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="fname"
                className="font-normal text-gray-500 text-base mb-[6px]"
              >
                First Name
              </label>
              <input
                id="fname"
                type="text"
                name="fname"
                className={inputStyle}
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="lname"
                className="font-normal text-gray-500 text-base mb-[6px]"
              >
                Last Name
              </label>
              <input
                id="lname"
                type="text"
                name="lname"
                className={inputStyle}
                placeholder="Enter your surname"
              />
            </div>
          </div>
          <div className="flex gap-12 mt-4">
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="email"
                className="font-normal text-gray-500 text-base mb-[6px]"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className={inputStyle}
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="phone"
                className="font-normal text-gray-500 text-base mb-[6px]"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                value={location?.state?.phoneNumber || ""}
                className={inputStyle}
                disabled
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="flex gap-12 mt-4">
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="phone"
                className="font-normal text-gray-500 text-base mb-[6px]"
              >
                City
              </label>
              <input
                id="city"
                type="text"
                name="city"
                value={location?.state?.city || ""}
                className={inputStyle}
                placeholder="Enter your City"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="phone"
                className="font-normal text-gray-500 text-base mb-[6px]"
              >
                State
              </label>
              <input
                id="state"
                type="text"
                name="state"
                value={location?.state?.state || ""}
                className={inputStyle}
                placeholder="Enter your state"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-col">
            <label
              htmlFor="gender"
              className="font-normal text-gray-500 text-base mb-[6px]"
            >
              Gender
            </label>
            <div className="mt-[6px] flex items-center gap-20">
              <label className="font-normal text-gray-500 text-base mb-[6px]">
                <input
                  type="radio"
                  id="1"
                  name="gender"
                  value="Male"
                  className="mr-1"
                />
                Male
              </label>

              <label
                for="2"
                className="font-normal text-gray-500 text-base mb-[6px]"
              >
                <input
                  type="radio"
                  id="2"
                  name="gender"
                  value="Female"
                  className="mr-1"
                />
                Female
              </label>

              <label
                for="3"
                className="font-normal text-gray-500 text-base mb-[6px]"
              >
                <input
                  type="radio"
                  id="3"
                  name="gender"
                  value="Other"
                  className="mr-1"
                />
                Prefer Not to Say
              </label>
            </div>
            <div className="mt-5 flex items-center">
              <label
                htmlFor=""
                className="font-normal mr-2 text-gray-800 text-base mb-[6px]"
              >
                What are you looking for?
              </label>
              <select
                id="underline_select"
                onChange={(e) => setService(e.target.value)}
                name="service"
                className={`${inputStyle} `}
              >
                <option value="none" selected>
                  choose a service
                </option>
                <option value="CL">Corporate lawyer</option>
                <option value="CDL">Criminal defense lawyer</option>
                <option value="TL">Tax law</option>
                <option value="CRL">Civil Rights Lawyer</option>
                <option value="O">other</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-[200px]
          bottom-8 right-8 mt-4 ml-auto
          px-4 py-2 border-1 shadow-lg text-white bg-black hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm text-center mr-2 mb-2"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

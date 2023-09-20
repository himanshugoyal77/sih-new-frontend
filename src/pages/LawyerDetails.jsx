import React, { useState } from "react";
import Buttons from "../components/Buttons";
import Rating from "../components/Rating";
import Review from "../components/Review";
import ClinicCard from "../components/ClinicCard";
import { useLocation, useNavigate } from "react-router-dom";
import LawBg from "../assets/law-bg.jpg";

const SingleLawyer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  console.log("location", location.state);

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      //  setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  const bookAppointment = () => {
    navigate("/BookAppointment", { state: { lawyer: location.state.lawyer } });
  };
  const consultNow = () => {
    navigate("/video", { state: { lawyer: location.state.lawyer } });
  };

  return (
    <div className="w-[80%] mx-auto overflow-x-hidden ">
      <div className="flex flex-col  md:flex-row items-center justify-between">
        {/* left_section */}
        <div
          className={
            "h-screen  left_section  flex flex-col items-center" +
            (isScrolled ? " md:sticky top-5" : "")
          }
        >
          <img
            className={
              "h-44 w-44 rounded-full border-4 border-black shadow-md ease-in transition-all duration-600"
            }
            src={
              location.state.image ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRh2t0TjdMAH9Y7-mc5lLcNwSllv06aiR6HQ&usqp=CAU"
            }
            alt=""
          />
          <div
            className={
              "flex flex-col justify-center items-center mt-6 " +
              (isScrolled ? " mt-6" : "")
            }
          >
            <div className="font-bold text-xl">
              {location.state.lawyer.name || "Himanshu Goyal"}
            </div>
            <div className="font-bold text-sm text-gray-500 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                />
              </svg>

              {location.state.lawyer.city || "Delhi, IN"}
            </div>
            <div className="flex flex-wrap gap-2 my-4 p-2 w-[280px]">
              {/* {location.state.lawyer.specialization.map((spec) => (
                <div className="rounded-full bg-gray-200 px-2 py-1 text-sm text-gray-500 font-semibold">
                  {spec}
                </div>
              ))} */}
              <div className="rounded-full bg-gray-200 px-2 py-1 text-sm text-gray-500 font-semibold">
                Law
              </div>
              <div className="rounded-full bg-gray-200 px-2 py-1 text-sm text-gray-500 font-semibold">
                Finance
              </div>
              <div className="rounded-full bg-gray-200 px-2 py-1 text-sm text-gray-500 font-semibold">
                real Estate
              </div>
              <div className="rounded-full bg-gray-200 px-2 py-1 text-sm text-gray-500 font-semibold">
                Criminal Defense
              </div>
            </div>

            <div className=" h-[120px] w-[260px]  text-gray-500 font-semibold overflow-hidden text-xs px">
              <p className="h-[100px] overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quod, quibusdam, quae voluptatem voluptates
                consequatur officia laboriosam eaque quia quos! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Minima voluptas
                facilis quia temporibus error autem mollitia sapiente veritatis
                hic magnam corrupti quae vel repellendus similique ipsum a modi,
                rem rerum?
              </p>
              <h4 className="text-emerald-800 font-bold">More....</h4>
            </div>
            <button className="flex items-center gap-3 bg-emerald-700 px-16 py-2 rounded-full text-white my-8">
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
                  d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                />
              </svg>
              Add as Contact
            </button>
          </div>
        </div>

        {/* middle_section */}
        <div className="overflow-x-hidden flex flex-col w-full  mt-3  justify-center items-center">
          {" "}
          {/* <div className="grid grid-cols-1 md:flex my-2 gap-12">
            <div className="flex gap-5">
              <Buttons text="Follow" />
              <Buttons text="Chat" />
            </div>
          </div> */}
          <div className="w-full bg-white shadow-md px-8 py-4 my-2">
            <h1 className="text-lg font-bold mb-4">Highlights</h1>
            <div className="grid grid-cols-2 gap-3">
              {/* {location.state.lawyer.serviceType.map((treatment) => {
                return (
                  <div  className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>

                    <span className="">{treatment} - LLB</span>
                  </div>
                );
              })} */}
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>

                <span className="">66% success rate</span>
              </div>{" "}
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>

                <span className="">{"Verifed Profile"}</span>
              </div>
            </div>
          </div>
          <div className="w-full bg-white shadow-lg px-8 py-5 mt-4">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-bold mb-4">Feedback (5)</h1>
              <h1 className="text-lg font-bold mb-4 text-emerald-600 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
                Write a Feedback
              </h1>
            </div>
            <div className="flex justify-between items-center mb-16 ">
              <div className="leftContainer  text-center">
                <p className="text-yellow-500 text-5xl">3.5</p>
                <span className="text-xs text-gray-300 font-bold">
                  out of 5
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    1,745 global ratings
                  </p>
                </span>
              </div>
              <div className="rightContainr w-[75%]">
                <Rating />
              </div>
            </div>
            <h1 className="text-sm font-bold text-end">Feedback (5)</h1>
            <div className="h-96 overflow-y-scroll p-4">
              <Review />
              <Review />
            </div>
          </div>
        </div>

        {/* right_section */}
        <div className="overflow-x-hidden flex flex-col items-end md:place-items-start pl-4 mt-4">
          <div className="flex flex-col items-center md:items-start">
            <div className="font-bold text-sm text-gray-500 flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="w-4 h-4 text-red-400 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              212 People Likes
            </div>
          </div>

          <h1 className="text-md font-bold text-gray-500 mb-4 text-start">
            Clinic
          </h1>
          <ClinicCard address={location.state.lawyer.address} />
          <ClinicCard />
        </div>
      </div>
    </div>
  );
};

export default SingleLawyer;

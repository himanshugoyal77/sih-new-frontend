import React, { useState } from "react";
import Buttons from "../components/Buttons";
import Rating from "../components/Rating";
import Review from "../components/Review";
import ClinicCard from "../components/ClinicCard";
import { useLocation, useNavigate } from "react-router-dom";
import LawBg from "../assets/law-bg.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SingleLawyer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  console.log("location", location.state);

  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      console.log("scrolled");
      setIsScrolled(true);
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
    <div className="h-screen w-[92%] md:w-[80%] mx-auto bg-gray-50">
      <div className="md:sticky left-0 top-0 z-[89]">
        <Navbar isChangeColor="true" />
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between">
        {/* left_section */}
        <div className="md:sticky h-screen top-0 left-0 z-50 w-full md:w-[30%] mr-2">
          <div
            className={
              "left_section flex flex-col items-start justify-start mt-4 border bg-white shadow-sm rounded-md " +
              (isScrolled ? " mt-14" : "")
            }
          >
            <img
              className={
                "h-52 w-full object-contain ease-in transition-all duration-600"
              }
              src={
                location.state.image ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRh2t0TjdMAH9Y7-mc5lLcNwSllv06aiR6HQ&usqp=CAU"
              }
              alt=""
            />
            <div className={"flex flex-col justify-center items-center mt-4 "}>
              <div className="font-bold text-xl">
                {location.state.lawyer.name || "Himanshu Goyal"}
              </div>
              <div className="font-thin text-sm text-slate-500 flex items-center gap-2">
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

              <div className=" h-[120px] w-[260px] text-gray-600 font-light overflow-hidden text-xs px-4 py-2">
                <p className="h-[100px] overflow-hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam voluptatum, quod, quibusdam, quae voluptatem
                  voluptates consequatur officia laboriosam eaque quia quos!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima voluptas facilis quia temporibus error autem mollitia
                  sapiente veritatis hic magnam corrupti quae vel repellendus
                  similique ipsum a modi, rem rerum?
                </p>
                <h4 className="text-emerald-800 font-bold">More....</h4>
              </div>
              <button
                onClick={bookAppointment}
                className="text-white mt-4 bg-black py-3 px-2 w-[90%] rounded-md font-bold text-sm shadow-sm mb-4"
              >
                Book an Appointment
              </button>
              <button
                onClick={consultNow}
                className="text-black mb-4  py-3 px-4 w-[90%] rounded-md bg-white font-bold text-sm border-2 border-black shadow shadow-gray-400"
              >
                Consult Instantly
              </button>
            </div>
          </div>
        </div>

        {/* middle_section */}
        <div className="overflow-x-hidden flex flex-col md:w-[75%] justify-center items-center mt-4 rounded-md">
          {" "}
          <div className="w-full bg-white px-8 py-4 my border rounded-md">
            <div className="flex gap-5 items-center justify-center">
              <Buttons text="Add to Favourite" />
              <Buttons text="Previous Work" />
              <div className="cursor-pointer flex gap-2 items-center h-10 bg-gray-100 text-emerald-800 font-bold text-sm px-4 py-2 rounded-md shadow-sm ">
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
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
                122 Profile Likes
              </div>
            </div>
            <h1 className="text-lg font-bold mb-4 mt-3">Highlights</h1>
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

                <span className="">{"Law"}</span>
              </div>
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

                <span className="">{"Finanace"}</span>
              </div>
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

                <span className="">{"Real Estate"}</span>
              </div>
            </div>
          </div>
          <div className="w-full bg-white shadow-lg px-8 py-5 mt-4 border rounded-md">
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
        <div className={"sticky h-screen top-0 right-0 z-50 md:w-[35%]"}>
          <aside
            className={
              "md:flex flex-col items-start px-2 pb-8 mt-4 bg-white shadow-sm border ml-2 rounded-md" +
              (isScrolled ? " mt-12" : "")
            }
          >
            <h1 className="text-md font-bold text-black text-center mb-2 pt-4">
              Clinic
            </h1>
            <ClinicCard address={location.state.lawyer.address} />
            <ClinicCard />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SingleLawyer;

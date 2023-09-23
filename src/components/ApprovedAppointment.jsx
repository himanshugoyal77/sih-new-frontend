import React from "react";
import LawyerProfile from "./LawyerProfile";

const ApprovedAppointment = () => {
  return (
    <div
      className="bg-white min-h-max flex items-center justify-around 
          shadow shadow-slate-300 rounded-md text-lg font-semibold"
    >
      <div
        className=" left-sec flex flex-col items-start
             justify-center"
      >
        <p className="text-green-500 text-2xl py-4 font-bold animate-pulse">
          Your Appointment with <span className="font-bold">Mr. XYZ</span> is
          approved
        </p>
        <h1 className="text-lg font-semibold">Title: Title fot the meeting</h1>
        <h2>Date: 12th October </h2>
        <h2>Time: 12:00 PM</h2>

        <div className="w-full flex justify-start gap-5 mt-4">
          <button
            className="
                  bg-green-500 text-white px-3 py-1 rounded-md
                  text-lg font-semibold
                "
          >
            Request for reschedule
          </button>
          <button
            className="
                 border border-black px-3 py-1 rounded-md
                 text-lg font-semibold
               "
          >
            Cancel Appointment
          </button>
        </div>
      </div>
      <div className="right-sec p-4">
        <LawyerProfile />
      </div>
    </div>
  );
};

export default ApprovedAppointment;

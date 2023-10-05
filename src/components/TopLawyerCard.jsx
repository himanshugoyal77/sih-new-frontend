import React from "react";

const TopLawyerCard = ({ lawyer }) => {
  return (
    <div>
      <div className="w-full flex justify-between px-12 items-center bg-[#36454F] h-[350px]">
        <div className="Contact text-white flex flex-col items-start">
          <h3 className="text-emerald-400 font-bold text-xl">Education</h3>
          <p className="text-3xl font-light">{lawyer?.education.law_school},</p>
          <p className="text-3xl font-light mt-2">{lawyer?.education.degree}</p>
          <h3 className="mt-6 text-emerald-400 font-bold text-xl">
            Contact info.
          </h3>
          <h1 className="mt-2">{lawyer?.contact.email}</h1>
          <h1 className="mt-1">{lawyer?.contact.phone}</h1>
          <p className="mt-1">{lawyer?.office.address}</p>
        </div>

        <img className="p-5 h-[100%] w-[35%]" src={lawyer?.img} alt="" />

        <div className=" text-white flex flex-col items-start">
          <h1 className="font-bold text-3xl">{lawyer?.name}</h1>
          <h2 className="font-semibold mt-2 text-emerald-400 text-2xl">
            {lawyer?.specialization}
          </h2>
          <div className="mt-2 flex flex-col items-start">
            <h3 className="">
              <p className="font-bold text-8xl text-yellow-300">
                {lawyer?.rating}
              </p>
              <p className="text-sm font-light">out of 239 reviews</p>
            </h3>
            <p className="font-bold text-lg mt-2">
              Years of Experience - {lawyer?.experience.years_practiced}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopLawyerCard;

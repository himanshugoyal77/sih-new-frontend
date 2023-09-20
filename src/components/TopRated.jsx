import { useNavigate } from "react-router-dom";

const TopRated = ({ lawyer }) => {
  console.log("lawyer from0", lawyer);
  const navigate = useNavigate();
  return (
    <section className="flex border bg-white  py-16">
      <div className="w-[70%] flex flex-col items-center">
        <div className="flex items-center justify-center gap-12 w-full">
          <div className="flex justify-between items-center ">
            <div className="leftContainer text-center scale-125">
              <p className="text-yellow-300 text-8xl font-bold">{"4.8"}</p>
              <span className="text-xs text-gray-800 font-bold">
                out of 5
                <p className="text-sm font-medium text-black dark:text-gray-400">
                  1,745 global ratings
                </p>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 my-4 p-2 w-[40%]">
            <div className="rounded-full bg-black px-4 py-2 font-light text-sm text-white text-center">
              General
            </div>
            <div className="rounded-full bg-black px-4 py-2 font-light text-sm text-white text-center">
              Family
            </div>
            <div className="rounded-full bg-black px-4 py-2 font-light text-sm text-white text-center">
              Real Estate
            </div>
            <div className="rounded-full bg-black px-4 py-2 font-light text-sm text-white text-center">
              Consumer Law
            </div>
            <div className="rounded-full bg-black px-4 py-2 font-light text-sm text-white text-center">
              Document
            </div>
          </div>
        </div>
        <p className=" w-[60%] h-[100px] overflow-hidden text-sm text-black mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          iste cumque totam saepe facilis. Dolor, corporis pariatur debitis
          asperiores saepe obcaecati sint aliquid, laudantium dolorem possimus
          architecto alias nihil? Eum.
        </p>
        <button
          className="w-[60%] text-white mt-8 bg-blue-300 py-3 px-4 rounded-md font-bold 
          text-sm shadow-sm mb-4 
          hover:scale-105 hover:bg-black transform transition-all duration-500 ease-in-out
          "
        >
          Book an Appointment
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          className="h-64 w-64 rounded-full object-cover  border-4 border-black shadow-md"
          src={"https://i.pravatar.cc/300?img=2"}
          alt=""
        />
        <div className="font-bold text-xl mt-4">{"Himanshu Goyal"}</div>
        <div className="font-bold text-sm text-gray-500">
          📍 {"Bandra"}, {"Maharashtra"}
        </div>
      </div>
    </section>
  );
};

export default TopRated;

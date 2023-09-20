import { useRef } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import { Carousel, Collapse, Steps } from "antd";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import TopRated from "../components/TopRated";
import financialHelpIcon from "../assets/money-growth.png";
import Footer from "../components/Footer";

const types_of_lawyers = [
  { name: "Criminal Defense ", id: 1, img: "./home/criminal-def.png" },
  { name: "Civil Litigation ", id: 2, img: "./home/civil.png" },
  { name: "Family", id: 3, img: "./home/family.png" },
  { name: "Real Estate ", id: 4, img: "./home/realestate.png" },
  { name: "Intellectual Property ", id: 6, img: "./home/bag.png" },
  { name: "Bankruptcy ", id: 7, img: "./home/criminal-def.png" },
  { name: "Corporate ", id: 5, img: "./home/iproperty.png" },
];

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const HomePage = () => {
  const scrollRef = useRef(null);

  return (
    <div className="relative bg-slate-50">
      {" "}
      <div className="nav-wrapper bg-img h-[75%] w-full"></div>
      <div className="md:w-[80%] mx-auto fixed z-10 top-5 left-0 right-0">
        <Navbar />
      </div>
      <Searchbar />
      <div className="md:w-[66%] mx-auto absolute top-[400px] left-0 right-0">
        <div
          className="w-full py-4 px-2
        bg-white rounded-md shadow-lg grid grid-cols-5"
        >
          {types_of_lawyers.map((lawyer) => (
            <div
              key={lawyer.id}
              className="flex flex-col items-center gap-4 m-1 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
            >
              <img className="h-10 w-10" src={lawyer?.img} alt="" />
              <h1 className="text-center text-sm font-semibold text-gray-500">
                {lawyer.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="h-32 bg-slate-50" ref={scrollRef}></div>
      <div className="h-screen text-center bg-slate-50 md:w-[80%] mx-auto">
        <div className="mt-24 bg-white shadow shadow-slate-300 pt-12">
          <h1 className="text-xl font-bold ">Find Lawyer in 5 easy steps</h1>
          <Steps
            className="w-[80%] mx-auto py-16 px-12"
            items={[
              {
                title: "Login",
                status: "finish",
                icon: <UserOutlined />,
              },
              {
                title: "Verify",
                status: "finish",
                icon: <SolutionOutlined />,
              },
              {
                title: "Find",
                status: "finish",
                icon: <SolutionOutlined />,
              },
              {
                title: "Pay",
                status: "finish",
                icon: <SmileOutlined />,
              },
              {
                title: "Connect",
                status: "finish",
                icon: <SmileOutlined />,
              },
            ]}
          />
        </div>
        <div className="mt-16">
          <h1 className="text-2xl font-bold ">
            Consult with top rated Lawyers
          </h1>
          <Carousel
            autoplay
            arrows={true}
            speed={1000}
            className="mt-8 shadow shadow-slate-200"
          >
            <div>
              <TopRated />
            </div>
            <div>
              <TopRated />
            </div>
            <div>
              <TopRated />
            </div>
          </Carousel>
          <button
            className="
          flex gap-2 bg-black text-white px-6 py-2 rounded-full shadow-md
          hover:scale-105 transform transition-all duration-500 ease-in-out
          text-sm font-bold mt-8 mx-auto items-center
          "
          >
            View All{" "}
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
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <hr className="mt-12" />
        <div className="flex flex-col items-center gap-4 px-5 md:flex-row my-16  w-max mx-auto">
          <img
            className="h-80 w-80 object-cover"
            src={financialHelpIcon}
            alt="financialHelpIcon"
          />
          <div className="flex flex-col max-w-md md:max-w-lg text-start items-start justify-around gap-6">
            <h1 className="text-3xl font-bold text-emerald-500">
              Get Financial Help
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quos, quia, voluptatum, voluptate accusamus quod voluptatibus
              doloremque doloribus quibusdam quas iusto. Quisquam quos, quia,
              voluptatum, voluptate accusamus quod voluptatibus doloremque
              doloribus quibusdam quas iusto.
            </p>
            <button
              className="
             bg-emerald-500 text-white px-6 py-2 rounded-full shadow-md
            "
            >
              Apply for Pro-bono Services
            </button>
          </div>
        </div>
        <hr className="mt-12" />
        {/* <div>
          <Collapse
            className="w-[50%] text-red-600 bg-white shadow shadow-slate-200 mt-16"
            items={items}
            bordered={false}
            defaultActiveKey={["1"]}
          />
        </div> */}

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;

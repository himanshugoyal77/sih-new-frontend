import Search from "antd/es/input/Search";
import Navbar from "../components/Navbar";
import { Col, InputNumber, Row, Slider } from "antd";
import { useState } from "react";
import LawyerProfile from "../components/LawyerProfile";

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

const nearestLawyers = [
  {
    img: "https://gumlet.assettype.com/barandbench%2Fimport%2F2018%2F12%2Flady.jpg?auto=format%2Ccompress&fit=max&w=1200",
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
    img: "https://mattersindia.com/wp-content/uploads/2023/07/jose-abraham1.jpg",
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
    img: "https://img.freepik.com/premium-photo/young-indian-girl-as-lawyer-court-room_437792-169.jpg",
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
  {
    img: "https://superlawyer.in/wp-content/uploads/2017/01/dilip-taur-3-1000x600.jpg",
    name: "David Miller",
    rating: 4.7,
    specialization: "Intellectual Property Law",
    contact: {
      email: "david.miller@example.com",
      phone: "+1 (555) 345-6789",
    },
    office: {
      address: "567 Maple Avenue, Suite 456, Techville, USA",
    },
    experience: {
      years_practiced: 9,
      law_firm: "Miller & Associates",
    },
    education: {
      law_school: "Techville Law School",
      degree: "Juris Doctor (JD)",
    },
    licenses: {
      state: "California, USA",
      bar_number: "456789",
    },
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlSgwaD1Qql4yfbp_jLi2Dlv7Ivf9WaLRegoPGXBozzljunIHUtPXIPIjxV0JvbdvMbtI&usqp=CAU",
    name: "Sarah Davis",
    rating: 4.6,
    specialization: "Immigration Law",
    contact: {
      email: "sarah.davis@example.com",
      phone: "+1 (555) 456-7890",
    },
    office: {
      address: "789 Oak Lane, Suite 890, Gateway City, USA",
    },
    experience: {
      years_practiced: 11,
      law_firm: "Davis & Partners",
    },
    education: {
      law_school: "Gateway City Law School",
      degree: "Juris Doctor (JD)",
    },
    licenses: {
      state: "Texas, USA",
      bar_number: "890123",
    },
  },
];

const SearchPage = () => {
  const [rating, setRating] = useState(1);
  const [price, setPrice] = useState([]);
  const [yoe, setYoe] = useState(0);
  const onChangeRating = (newValue) => {
    setRating(newValue);
  };

  const onChangePrice = (newValue) => {
    setPrice(newValue);
  };

  const onChangeYoe = (newValue) => {
    console.log(newValue);
    setYoe(newValue);
  };

  return (
    <div className="">
      <div className="md:sticky left-0 top-0 z-[89]">
        <Navbar isChangeColor="true" />
      </div>
      <div className="h-12"></div>
      <div className="relative w-[80%] mx-auto ">
        <div className="content w-full mx-auto text-center relative">
          {/* sidebar */}
          <div className="flex">
            <div className="sticky h-screen top-0 left-0 z-50">
              <aside
                className="hidden
          md:flex  flex-col items-start basis-[24%] border-r-2 px-4 py-8 mt-6"
              >
                <div className="w-full mb-4 flex flex-col items-start">
                  <label className="font-thin text-gray-700">City</label>
                  <input
                    type="search"
                    className="border w-[90%] border-gray-300 rounded-md px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="eg. Kolkata"
                    aria-label="Search"
                    aria-describedby="button-addon1"
                  />
                </div>
                <div className="w-full mb-4 flex flex-col items-start">
                  <label className="font-thin text-gray-700">Service</label>
                  <input
                    type="search"
                    className="border w-[90%] border-gray-300 rounded-md px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="eg. Advocate"
                    aria-label="Search"
                    aria-describedby="button-addon1"
                  />
                </div>
                <h2 className="font-thin text-gray-700">Select Rating</h2>
                <div className="w-full flex items-center justify-start">
                  <div className="w-[60%]">
                    <Slider
                      min={1}
                      max={5}
                      onChange={onChangeRating}
                      value={rating}
                    />
                  </div>
                  <div className="">
                    <InputNumber
                      min={1}
                      max={5}
                      style={{ margin: "0 5px" }}
                      value={rating}
                      onChange={onChangeRating}
                    />
                  </div>
                </div>

                <h2 className="font-thin text-gray-700 mt-8">
                  Select Price range
                </h2>
                <Row>
                  <Col span={23}>
                    <Slider
                      className="w-full "
                      min={0}
                      max={2000}
                      range
                      defaultValue={[200, 1500]}
                      onChange={onChangePrice}
                    />
                    <div className="flex gap-5">
                      <div className="flex items-center">
                        min:
                        <InputNumber
                          style={{ margin: "0 5px" }}
                          value={price[0]}
                        />
                      </div>
                      <div className="flex items-center">
                        max:
                        <InputNumber
                          style={{ margin: "0 5px" }}
                          value={price[1]}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>

                <h2 className="font-thin text-gray-700 mt-10">
                  Select year of Experience
                </h2>
                <div className="w-full flex items-center justify-start">
                  <div className="w-[60%]">
                    <Slider
                      min={0}
                      max={5}
                      onChange={onChangeYoe}
                      value={yoe}
                    />
                  </div>
                  <div className="">
                    <InputNumber
                      min={0}
                      max={5}
                      style={{ margin: "0 5px" }}
                      value={yoe}
                      onChange={onChangeYoe}
                    />
                  </div>
                </div>
                <button
                  className="relative z-[2] mt-9 flex items-center gap-2 rounded bg-black px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                  Search
                </button>
              </aside>
            </div>
            {/* main content */}
            <article className="relative flex-grow flex flex-col items-start justify-start pl-6">
              <h1 className="text-xl font-semibold mt-6">Online Now</h1>
              <div className="grid grid-cols-4 gap-4">
                {Lawyers.map((lawyer, index) => (
                  <LawyerProfile
                    key={index}
                    lawyer={lawyer}
                    istrusted={index === 0 ? true : false}
                  />
                ))}
              </div>

              <h1 className="text-xl font-semibold mt-10">
                Nearest Service Providers
              </h1>
              <div className="grid grid-cols-4 gap-4">
                {nearestLawyers.map((lawyer, index) => (
                  <LawyerProfile
                    key={index}
                    lawyer={lawyer}
                    istrusted={index === 0 ? true : false}
                  />
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

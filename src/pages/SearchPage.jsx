import Search from "antd/es/input/Search";
import Navbar from "../components/Navbar";
import { Col, InputNumber, Row, Slider } from "antd";
import { useState } from "react";
import LawyerProfile from "../components/LawyerProfile";

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
    <div className="relative w-[80%] mx-auto ">
      <div className="md:sticky left-0 top-0 z-[89]">
        <Navbar isChangeColor="true" />
      </div>

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
                  <Slider min={0} max={5} onChange={onChangeYoe} value={yoe} />
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
              {Array.from({ length: 3 }).map((_, index) => (
                <LawyerProfile
                  key={index}
                  istrusted={index === 0 ? true : false}
                />
              ))}
            </div>

            <h1 className="text-xl font-semibold mt-10">
              Nearest Service Providers
            </h1>
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <LawyerProfile
                  key={index}
                  istrusted={index === 0 ? true : false}
                />
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

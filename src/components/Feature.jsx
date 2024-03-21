
import {  PiSignOutDuotone } from "react-icons/pi";
import { features } from "../constants";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <div
      id="features"
      className="bg-white py-28 my-8 padding mx-auto relative"
    >
      <div className="my-4 mb-10">
        <h2 className="my-2 flex justify-center md:text-[50px] sm:text-[40px] xs:text-[30px] text-[30px]">
          More than just a tool
        </h2>
        <p className="flex justify-center text-[#444]">
          Explore what else we can do
        </p>
      </div>

      {/* grids */}

      <div className=" md:grid md:grid-flow-row md:grid-cols-3 lg:grid-cols-3 gap-8 mt-20 ">
        {/* <TbSocial/> <BiSolidCustomize/> <PiClockCountdownDuotone/> <PiArchiveTrayDuotone/> */}
        {features.map((feature, idx) => (
          <div className="bg-white border rounded pb-7 px-7 my-6 mb-32" key={idx}>
            {/* {feature.icon} */}
            <center>
              {" "}
              <div className="mb-10 -mt-10 rounded-full  flex justify-center w-24 h-24">
                {/* <TbSocial className='mx-auto flex justify-center
               bg-white text-primary my-auto justify-centr w-7 h-7'/> */}
                <img
                  src={`/${feature.icon}`}
                  className="mx-auto h-20 w-20"
                  alt="icon"
                />
              </div>{" "}
            </center>

            <h1 className="text-lg text-gray-800 mdtext-xl font-bold flex justify-center">
              {feature.title}
            </h1>
            <p className="text-gray-500 text-center mt-4">{feature.text}...</p>
          </div>
        ))}
      </div>

      <p className="flex justify-center text-[#444]">
        Amazing Right?
      </p>
      <div className="my-5 flex justify-center">
        <Link className="" to="/signup">
        <button className="flex items-center text-black outline outline-2 font-bold shadow md:text-lg rounded-lg px-3 py-2">
          Get Started Today!
          <PiSignOutDuotone className="w-5 h-5 ml-3"/>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Feature;

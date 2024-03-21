import { PiFacebookLogoDuotone } from "react-icons/pi";
import { PiLinkedinLogoDuotone } from "react-icons/pi";
import { PiTwitterLogoDuotone } from "react-icons/pi";
import { PiGithubLogoDuotone } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-[#121212] px-3 py-5  items-center text-white">
      <div className=" mx-3  md:flex gap-5 px-10 pt-10">
        <div className="ft:w-2/6 my-5 ">
          <h1 className="text-2xl sm:text-4xl font-semibold">WishesUnbox</h1>
          <p className=" my-5 text-wrap text-[#bbb]">
            {" "}
            Unbox Joy, Send Wishes - Where Dreams Become Gifts! Dive into the
            magic of heartfelt connections -- Start your wishful journey
            today...
          </p>
          <div className="flex gap-4">
            <PiGithubLogoDuotone className="w-6 h-6" />
            <PiLinkedinLogoDuotone className="w-6 h-6" />
            <PiTwitterLogoDuotone className="w-6 h-6" />
            <PiFacebookLogoDuotone className="w-6 h-6" />
          </div>
        </div>

        <div className="ft:w-4/6 md:gap-2 gap-5 sm:flex justify-evenly my-7">
          <div className="flex gap-3 justify-between mb-5">
            <div>
              <h1 className="text-2xl font-semibold text-white">Resources</h1>
              <ul className="list-none text-[#777]">
                <li className=" my-2">
                  <a href="">Guides</a>
                </li>
                <li className=" my-2">
                  <a href="">Blog</a>
                </li>
                <li className=" my-2">
                  <a href="">Privacy</a>
                </li>
                <li className=" my-2">
                  <a href="">Terms & Condition</a>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-2xl font-semibold text-white">Company</h1>
              <ul className="list-none text-[#777]">
                <li className=" my-2">
                  <a href="">About Us</a>
                </li>
                <li className="my-2">
                  <a href="">Careers</a>
                </li>
                <li className="my-2">
                  <a href="">Privacy</a>
                </li>
                <li className="my-2">
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="">
            <h1 className="text-xl font-semibold text-white">
              Suscribe to our Newsletter!..
            </h1>
            <div className="my-3">
              <div className="">
                <input
                  type="email"
                  name="mail"
                  placeholder="johnDoe2024@gmail.com"
                  className="w-full rounded-xl py-4 px-6 border-0 bg-transparent text-white font-medium"
                />
                <br />
                <button className="w-full rounded-xl text-lg font-bold  outline outline-1 py-3 px-5 text-orange-50 hover:bg-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import close from "/close.svg";
import menu from "/menu.svg";
import { navLinks } from "../constants";
import { GoSignIn } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  // useEffect to close nav after a change in the state active
  useEffect(() => {
    const mobile = document.querySelector("#mobile");
    mobile?.classList.add("hidden");
    setToggle(false);
  }, [active]);

  // onScroll navbar becomes fixed and given a glassMorphism styling
  useEffect(() => {
    const handleScroll = () => {
      // Your onScroll logic here
      // Example: Add a class to the navbar when scrolling down
      const navbar = document.querySelector("#nbar");
      if (navbar && window.scrollY > 0) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="nbar" className=" w-full border-b px-6 md:px-12 py-5 md:py-6">
      <div className=" flex items-center justify-between">
        <div className="flex items-start">
          <img
            src="/camp.svg"
            width={50}
            height={50}
            alt="Picture of the author"
            className="hidden md:flex logo"
          />
          <span className="self-center text-3xl text-[#36454f] font-semibold">
            WishesUnbox
            {/* <a href="https://www.google.com">Tunji</a> */}
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="items-center justify-between hidden w-full nv:flex nv:w-auto">
          <ul className="flex flex-col items-center font-medium  lg:p-4 md:p-0 mt-4 border border-gray-100 rounded-lg nv:space-x-4 lg:space-x-6 md:flex-row md:mt-0 md:border-0">
            {navLinks.map((link) => (
              <a
                href={`/#${link.id}`}
                key={link.id}
                onClick={() => setActive(link.title)}
                className={`${
                  active == link.title
                    ? "border-b-2 border-primary"
                    : "text-[#555]"
                } font-medium cursor-pointer md:text-lg lg:text-[1.2rem] hover:text-secondary`}
              >
                <li key={link.id} className="flex items-center">
                  {link.title} &nbsp;{" "}
                  {link.id === "contact" ? <RiContactsLine /> : " "}
                </li>
              </a>
            ))}
            <Link
              to="/login"
              className="lg:hidden font-medium cursor-pointer md:text-[1.2rem] hover:text-secondary"
            >
              <GoSignIn className="text-black" />
            </Link>
          </ul>
        </div>

        {/* menu button */}
        <div className="flex nv:hidden">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
          >
            <img
              src={toggle ? close : menu}
              width={60}
              height={60}
              alt="Menu"
              onClick={() => setToggle(!toggle)}
            />
          </button>
        </div>

        {/* SignIn part */}
        <div className="hidden lg:flex items-center">
          <Link to="/login">
            <button className="flex items-center hover:text-secondary drop-shadow-lg  text-[#445] shadow-slate-800 outline outline-1 font-bold shadow md:text-lg rounded-lg px-3 py-2">
              <p className="text-black">Sign In</p>{" "}
              <GoSignIn className="w-4 h-4 mx-2" />
            </button>
          </Link>
        </div>
      </div>

      {/* mobile view */}
      <div
        id="mobile"
        className={`${
          toggle ? "flex" : "hidden"
        }  bg-slate-50 z-50 shadow nv:hidden absolute top-20 right-0 mx-4 rounded-xl px-4 py-2`}
      >
        <ul className="flex flex-col mx-3 font-medium mt-4 lg:mt-0 rounded-lg lg:flex-row lg:border-0 text-[1.1rem]">
          {navLinks.map((link) => (
            <a key={link.id} href={`/#${link.id}`}>
              <li
                onClick={() => setActive(link.title)}
                className={`${
                  active === link.title ? "text-primary" : "text-[#666]"
                }  hover:text-secondary flex items-center text-xl my-2`}
              >
                {link.title} &nbsp;{" "}
                {link.id === "contact" ? <RiContactsLine /> : " "}
              </li>
            </a>
          ))}
          <li className="bg-primary hover:bg-secondary flex items-center rounded-xl text-white mb-3 py-2 px-3">
            <Link to="/login">
              Sign in
              <GoSignIn className="w-4 h-4 ml-4" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

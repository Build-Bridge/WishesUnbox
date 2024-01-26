import React from "react";

function Hamburger({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "1em"}
      height={height || "1lem"}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 17h18M3 12h18M3 7h18"
      />
    </svg>
  );
}
function Header() {
  return (
    <nav className="w-full pt-9 px-8 flex justify-between items-center absolute top-0">
      <span className="md:hidden text-3xl absolute">
        <Hamburger />
      </span>
      <a className="text-2xl text-blue-600 font-bold flex max-md:ml-12 gap-4 items-center justify-center">
        <img src="/vite.svg"></img> {/*This should be replaced with the actual logo*/}
        <span className="max-sm:hidden">WishesUnbox</span>
      </a>
      <div className="flex gap-7 items-center justify-center text-md text-cyan-900 font-semibold font-[cursive]">
        <a href="#" className="hover:text-blue-500 max-md:hidden">
          Follow
        </a>
        <a href="#" className="hover:text-blue-500 max-md:hidden">
          Dashboard
        </a>
        <a className="w-40 text-blue-50 bg-[#FF9A55] font-semibold text-md rounded-3xl py-2 text-center">
          Get started
        </a>
      </div>
    </nav>
  );
}

export default Header;

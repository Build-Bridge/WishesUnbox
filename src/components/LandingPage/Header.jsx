import React, { useState } from "react";
import { CancelIcon, HamburgerIcon } from "./UtilityComponents/Icons";

function HeaderLinks() {
  return (
    <>
      <a href="#" className="hover:text-blue-500 transition-colors duration-700 text-center">
        About
      </a>
      <a href="#" className="hover:text-blue-500 transition-colors duration-700 text-center">
        Dashboard
      </a>
      <a href="#" className="hover:text-blue-500 transition-colors duration-700 text-center">
        Sign in
      </a>
    </>
  );
}

function NavSidebar({ showSidebar, close }) {
  return (
    <div
      className={`md:hidden w-screen h-screen duration-700 overflow-hidden transition-all position fixed flex items-center justify-center top-0 left-0 bg-white ${
        showSidebar ? "w-screen h-screen z-[2] opacity-100" : "w-12 h-32 z-[-2] opacity-0"
      }`}
    >
      <div className="flex flex-col gap-5 font-semibold text-gray-900 items-center justify-center">
        <button
          onClick={close}
          className={`text-3xl flex items-center transition-all duration-700 justify-center gap-3 ${
            showSidebar ? "rotate-[720deg]" : "-rotate-[720deg]"
          }`}
        >
          <CancelIcon />
        </button>
        <HeaderLinks />
      </div>
    </div>
  );
}

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <nav className="w-full py-3 flex justify-between flex-col items-center absolute top-0 left-0 bg-gray-200">
      <button
        className="md:hidden absolute top-8 left-5 text-3xl text-gray-800"
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        <span className="fixed left-[-20000000px]"></span>
        <HamburgerIcon />
      </button>
      <NavSidebar showSidebar={showSidebar} close={() => setShowSidebar(false)} />
      <div className="w-full py-3 px-5 md:px-10 flex justify-between items-center pl-16">
        <a className="text-2xl text-blue-600 font-bold flex gap-4 items-center justify-center">
          <img src="/vite.svg"></img> {/*This should be replaced with the actual logo*/}
          <span className="max-xm:hidden">WishesUnbox</span>
          <span className="xm:hidden">WU</span>
        </a>
        <div className="flex gap-7 items-center justify-center text-md text-cyan-900 font-semibold">
          <div className="flex items-center justify-center gap-4 lg:gap-7 max-md:hidden">
            <HeaderLinks />
          </div>
          <a className="w-32 sm:w-40 text-blue-50 shadow-md bg-[#FF9A55] font-semibold text-sm sm:text-md rounded-3xl py-3 text-center">
            Get started
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;

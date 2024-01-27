import React from "react";
import { CrescentIcon, HamburgerIcon } from "./UtilityComponents/Icons";

function HeaderLinks() {
  return (
    <>
      <a href="#" className="hover:text-blue-500 max-md:hidds">
        About
      </a>
      <a href="#" className="hover:text-blue-500 max-md:hiddesn">
        Dashboard
      </a>
      <a href="#" className="hover:text-blue-500 max-md:hiddens">
        Sign in
      </a>
    </>
  );
}

function Header() {
  return (
    <nav className="w-full py-3 px-8 flex justify-between flex-col items-center absolute top-0 left-0">
      <div className="w-full py-3 px-8 flex justify-between items-center">
        <span className="md:hidden text-3xl absolute">
          <HamburgerIcon />
        </span>
        <a className="text-2xl text-blue-600 font-bold flex max-md:ml-12 gap-4 items-center justify-center">
          <img src="/vite.svg"></img> {/*This should be replaced with the actual logo*/}
          <span className="max-sm:hidden">WishesUnbox</span>
        </a>
        <div className="flex gap-7 items-center justify-center text-md text-cyan-900 font-semibold font-[cursive]">
          <div className="flex items-center justify-center gap-7 max-md:hidden">
            <HeaderLinks />
          </div>
          <a className="w-40 text-blue-50 shadow-md bg-[#FF9A55] font-semibold text-md rounded-3xl py-3 text-center">
            Get started
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center gap-7 md:hidden">
        <HeaderLinks />
      </div>
    </nav>
  );
}

export default Header;

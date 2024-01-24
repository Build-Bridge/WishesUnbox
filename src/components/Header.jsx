import React from "react";

function Header() {
  return (
    <nav className="text-red-50 w-screen px-10 pt-7 bgd-[#FFA478] flex justify-between items-center max-w-7xl">
      <h1 className="text-3xl italic font-bold flex gap-4">
        <img src="/vite.svg"></img> {/*This should be replaced with the actual logo*/}
        <span>WishesUnbox</span>
      </h1>
      <div className="flex gap-10 items-center justify-center">
        <div className="flex gap-5 items-center justify-center text-md capitalize font-semibold">
          <a>Follow</a>
          <a>Dashboard</a>
        </div>
        <a className="w-32 border-[1px] font-semibold text-sm border-white rounded-3xl uppercase py-2 text-center">
          SIGN UP
        </a>
      </div>
    </nav>
  );
}

export default Header;

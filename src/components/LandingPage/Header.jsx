import React from "react";

function Header() {
  return (
    <nav className="w-full pt-9 px-8 flex justify-between items-center absolute top-0">
      <h1 className="text-2xl text-blue-600 font-bold flex gap-4 items-center justify-center">
        <img src="/vite.svg"></img> {/*This should be replaced with the actual logo*/}
        <span>WishesUnbox</span>
      </h1>
      <div className="flex gap-7 items-center justify-center text-md text-cyan-900 font-semibold font-[cursive]">
        <a href="#" className="hover:text-blue-500 max-md:hidden">
          Follow
        </a>
        <a href="#" className="hover:text-blue-500 max-md:hidden">
          Dashboard
        </a>
        <a className="w-40 text-blue-50 bg-blue-500 font-semibold text-md rounded-3xl py-2 text-center">
          Get started
        </a>
      </div>
    </nav>
  );
}

export default Header;

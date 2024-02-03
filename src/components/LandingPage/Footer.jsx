import React from "react";
import { GithubIcon, LinkinIcon, TwitterIcon } from "./UtilityComponents/Icons";

function Footer() {
  return (
    <footer className="w-full flex items-center justify-center border-t-2">
      <div className="max-w-7xl px-4 sm:px-8 w-full flex max-xm:flex-col items-center justify-between py-7">
        <a href="#" className="">
          Terms of service
        </a>
        <div className="flex xm:gap-4 gap-1 max-xm:flex-col">
          <a
            href="#"
            className="flex items-center gap-3 hover:text-blue-500 duration-700 transition-colors"
          >
            <TwitterIcon />
            <span>Twitter</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 hover:text-blue-500 transition-colors duration-700"
          >
            <GithubIcon />
            <span>Github</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 hover:text-blue-500 duration-700 transition-colors"
          >
            <LinkinIcon />
            <span>Linkedin</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

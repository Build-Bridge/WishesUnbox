import React from "react";
import { GithubIcon, LinkinIcon, TwitterIcon } from "./UtilityComponents/Icons";

function Footer() {
  return (
    <footer className="w-full flex items-center justify-center bg-gray-200">
      <div className="max-w-7xl px-8 w-full flex items-center justify-between gap-6 py-5">
        <a href="#" className="">
          Terms of service
        </a>
        <div className="flex sm:gap-4 gap-1 max-sm:flex-col">
          <a href="#" className="flex items-center gap-3 hover:text-orange-400">
            <TwitterIcon />
            <span>Twitter</span>
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-orange-400">
            <GithubIcon />
            <span>Github</span>
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-orange-400">
            <LinkinIcon />
            <span>Linkedin</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

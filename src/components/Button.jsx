import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Button = ({ text }) => {
  return (
    <button
      className="bg-[#ff9a55] w-full p-5 rounded-full text-white capitalize text-2xl font-bold my-8 outline-none hover:bg-[#FFA478] hover:scale-95 transition-all flex items-center justify-center shadow-sm"
      type="submit"
    >
      {text}{" "}
      <span className="mx-2">
        <FaArrowRight size={15} />
      </span>
    </button>
  );
};

export default Button;

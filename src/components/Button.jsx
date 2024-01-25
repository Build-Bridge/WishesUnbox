import React from "react";

const Button = ({ text }) => {
  return (
    <button
      className="bg-[#ff9a55] w-full p-5 rounded-md text-white uppercase text-2xl font-bold mt-10 outline-none"
      type="submit"
    >
      {text}
    </button>
  );
};

export default Button;

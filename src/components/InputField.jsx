import React from "react";

const InputField = ({ name, type, placeholder, register }) => {
  return (
    <div className="my-1">
      <label
        className="w-full block font-bold p-2 capitalize text-[10px]"
        htmlFor={name}
      >
        {name}
      </label>
      <input
        className="w-full block rounded-full py-2 px-5 outline-none bg-zinc-100 focus:border-2 border-[#ff9a55] text-[10px]"
        type={type}
        id={name}
        {...register(name, { required: true })}
        placeholder={placeholder ? placeholder : ""}
      />
    </div>
  );
};

export default InputField;

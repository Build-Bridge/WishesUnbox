import React from "react";

const InputField = ({ name, type, placeholder, register }) => {
  return (
    <div className="my-5">
      <label className="w-full block font-bold p-2 capitalize" htmlFor={name}>
        {name}
      </label>
      <input
        className="w-full block rounded-full p-5 outline-none bg-zinc-100"
        type={type}
        id={name}
        {...register(name, { required: true })}
        placeholder={placeholder ? placeholder : ""}
      />
    </div>
  );
};

export default InputField;

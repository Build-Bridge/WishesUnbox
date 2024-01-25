import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { loginFields } from "../constants";
import Button from "../components/Button";

const loginPage = () => {
  const { register, handleSubmit } = useForm();
  // Function to get the data from the form
  const onSubmit = (data) => console.log(data);

  return (
    <section className="flex flex-col items-center justify-center">
      <form
        className="w-full h-fit p-20 m-5 bg-neutral-500-100 rounded-md flex-1 md:max-w-screen-sm shadow-lg relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col text-center items-center justify-center mb-10">
          <h2 className="text-center font-bold text-5xl p-2 uppercase bg-gradient-to-br from-[#ff9a55] to-[#ffb09c] text-transparent bg-clip-text">
            WishesUnbox
          </h2>
          <span className=" text-gray-400">register and enjoy our service</span>
        </div>
        <div>
          {/* Mapped over the input fields */}
          {loginFields.map((input) => {
            return (
              <InputField key={input.name} {...input} register={register} />
            );
          })}
        </div>
        <div>
          <span className="p-3 text-[#ff9a55] cursor-pointer">
            forget password ?
          </span>
        </div>
        <Button text="login" />
        {/* <button
          className="bg-[#ff9a55] w-full p-5 rounded-md text-white uppercase text-2xl font-bold mt-10 outline-none"
          type="submit"
        >
          login
        </button> */}
        <div className="mt-20">
          <div className="bg-black flex justify-center items-center p-3 rounded-md cursor-pointer">
            <img src="/google.svg" alt="google" className="w-12" />
            <p className="text-white mx-5 text-2xl">Google</p>
          </div>
        </div>
        <div className="absolute bottom-4 flex flex-1 items-center justify-between w-4/5 m-auto capitalize">
          <a href="/" className="text-xl hover:text-[#ffa478]">
            Terms and conditions
          </a>
          <a href="/" className="text-xl hover:text-[#ffa478]">
            Privacy policy
          </a>
        </div>
      </form>
    </section>
  );
};

export default loginPage;

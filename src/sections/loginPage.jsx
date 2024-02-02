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
    <section className="w-full h-full flex items-center justify-center">
      <form
        className="w-full h-fit p-10 m-2 bg-neutral-500-100 rounded-xl flex-1 md:max-w-[500px] md:shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col text-center items-center justify-center mb-5">
          <h2 className="text-center font-bold text-2xl p-2 uppercase bg-gradient-to-br from-[#ff9a55] to-[#ffb09c] text-transparent bg-clip-text">
            WishesUnbox
          </h2>
          <span className=" text-gray-400 text-[10px]">
            register and enjoy our service
          </span>
        </div>

        <div>
          {/* Mapped over the input fields */}
          {loginFields.map((input) => {
            return (
              <InputField key={input.name} {...input} register={register} />
            );
          })}
        </div>

        <Button text="login" />

        <div className="flex flex-col items-center justify-between">
          <p className="p-2 text-[10px] text-[#ff9a55] cursor-pointer hover:underline">
            forget your password ?
          </p>
          <p className="p-2 text-[10px] cursor-pointer">
            No account yet?{" "}
            <a href="/" className="hover:underline hover:text-[#ff9a55]">
              Sign up
            </a>
          </p>
        </div>

        <div className="flex w-full my-2 items-center justify-center">
          <hr className="flex-1" />
          <p className="uppercase p-3 text-[8px]">or</p>
          <hr className="flex-1" />
        </div>

        <div className="bg-black flex justify-center items-center p-2 rounded-full cursor-pointer my-3">
          <img src="/google.svg" alt="google" className="w-5" />
          <p className="text-white mx-5 text-[8px] capitalize">
            Login with Google
          </p>
        </div>

        <div className="flex flex-1 items-center justify-between w-4/5 mx-auto capitalize mt-10">
          <a href="/" className="text-[8px] hover:text-[#ffa478]">
            Terms and conditions
          </a>
          <a href="/" className="text-[8px] hover:text-[#ffa478]">
            Privacy policy
          </a>
        </div>
      </form>
    </section>
  );
};

export default loginPage;

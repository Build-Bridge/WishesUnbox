import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { signupFields } from "../constants";
import Button from "../components/Button";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  // Function to get the data from the form
  const onSubmit = (data) => console.log(data);

  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <form
        className="w-full h-fit p-14 m-2 bg-neutral-500-100 rounded-md flex-1 md:max-w-[500px] shadow-lg relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col text-center items-center justify-center mb-5">
          <h2 className="text-center font-bold text-5xl p-2 uppercase bg-gradient-to-br from-[#ff9a55] to-[#ffb09c] text-transparent bg-clip-text">
            WishesUnbox
          </h2>
          <span className=" text-gray-400">register and enjoy our service</span>
        </div>

        <div>
          {/* Mapped over the input fields */}
          {signupFields.map((input) => {
            return (
              <InputField key={input.name} {...input} register={register} />
            );
          })}
        </div>
        <Button text="signup" />
        <div className="flex items-center justify-center">
          <span className="p-3 cursor-pointer">
            Already have an account?{" "}
            <a href="/" className="hover:underline text-[#ff9a55]">
              Log In
            </a>
          </span>
        </div>
        <div className="flex w-full my-10 items-center justify-center">
          <hr className="flex-1" />
          <p className="uppercase p-3 text-2xl">or</p>
          <hr className="flex-1" />
        </div>
        <div className="bg-black flex justify-center items-center p-3 rounded-full cursor-pointer my-10">
          <img src="/google.svg" alt="google" className="w-12" />
          <p className="text-white mx-5 text-xl capitalize">
            Sign up with Google
          </p>
        </div>
        <div className="absolute bottom-4 flex flex-1 items-center justify-between w-4/5 m-auto capitalize py-2 mt-10">
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

export default Signup;

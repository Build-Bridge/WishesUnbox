import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { inputFields } from "../constants";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="flex items-center justify-center">
      <form
        className="w-full h-fit p-20 m-5 bg-slate-50 rounded-md flex-1 md:max-w-screen-sm shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col text-center items-center justify-center mb-10">
          <h2 className="text-center font-bold text-2xl p-2 uppercase">
            SignUp
          </h2>
          <span className=" text-gray-400">register and enjoy the service</span>
        </div>
        <div>
          {inputFields.map((input) => {
            return (
              <div key={input.name}>
                <InputField {...input} register={register} />
                {/* <span>
                  {errors.name?.type === "required" &&
                    "{input.name} is required"}
                </span> */}
              </div>
            );
          })}
        </div>
        <button
          className="bg-[#ff9a55] w-full p-5 rounded-md text-white uppercase text-2xl font-bold mt-20 outline-none"
          type="submit"
        >
          signup
        </button>
      </form>
    </section>
  );
};

export default Signup;

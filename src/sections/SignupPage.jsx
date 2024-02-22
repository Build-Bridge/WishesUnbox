import { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { signupFields } from "../constants";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signup, reset } from "../features/auth/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      dateOfBirth: "",
    },
  });
  const { errors } = formState;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && user) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  // Function to get the data from the form
  const onSubmit = (data) => {
    const userData = data;
    console.log(userData);
    dispatch(signup(userData));
  };

  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <form
        className="w-full h-fit p-5 m-2 bg-neutral-500-100 rounded-md flex-1 md:max-w-[500px] md:shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="flex flex-col text-center items-center justify-center mb-5">
          <h2 className="text-center font-bold text-2xl p-2 uppercase bg-gradient-to-br from-[#ff9a55] to-[#ffb09c] text-transparent bg-clip-text">
            WishesUnbox
          </h2>
          <span className=" text-gray-400 text-[10px]">
            register and enjoy our service
          </span>
        </div>

        {/* Throws error */}
        <ToastContainer />
        <div>
          {/* Mapped over the input fields */}
          {signupFields.map((input) => {
            return (
              <InputField
                key={input.name}
                {...input}
                register={register}
                error={errors}
              />
            );
          })}
        </div>

        <Button onClick={() => console.log(123)} text="signup" />

        <div className="flex items-center justify-center">
          <span className="p-3 cursor-pointer text-[10px]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="capitalize hover:underline text-[#ff9a55]"
            >
              log in
            </Link>
          </span>
        </div>

        <div className="flex w-full my-2 items-center justify-center">
          <hr className="flex-1" />
          <p className="uppercase p-3 text-[8px]">or</p>
          <hr className="flex-1" />
        </div>

        <div className="bg-black flex justify-center items-center p-2 rounded-full cursor-pointer my-3">
          <img src="/google.svg" alt="google" className="w-5" />
          <p className="text-white mx-2 capitalize text-[8px]">
            Sign up with Google
          </p>
        </div>

        <div className="flex items-center justify-between w-4/5 mx-auto capitalize mt-10">
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

export default Signup;

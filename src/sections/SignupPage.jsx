import { useState, useEffect } from "react";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signup, reset } from "../features/auth/authSlice";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    dateOfBirth: "",
  });

  const { firstname, lastname, email, username, password, dateOfBirth } =
    formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // let errMsg;

  useEffect(() => {
    if (isError) {
      // errMsg = isError.message;
    }
    if (isSuccess || user) {
      navigate("/dashboard");
      dispatch(reset());
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  // Function to get the data from the form
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // const onSubmit = () => {
  //   const userData = {};

  //   console.log(userData);
  //   dispatch(signup(userData));
  // };

  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <form
        className="w-full h-fit p-5 m-2 bg-neutral-500-100 rounded-md flex-1 md:max-w-[500px] md:shadow-lg"
        onSubmit={() => onSubmit}
      >
        <div className="flex flex-col text-center items-center justify-center mb-5">
          <h2 className="text-center font-bold text-2xl p-2 uppercase bg-gradient-to-br from-[#ff9a55] to-[#ffb09c] text-transparent bg-clip-text">
            WishesUnbox
          </h2>
          <span className=" text-gray-400 text-[10px]">
            register and enjoy our service
          </span>
        </div>

        {/* <div>{errMsg}</div> */}
        <div>
          {/* Mapped over the input fields */}
          {/* {signupFields.map((input) => {
            return (
              <InputField
                key={input.name}
                {...input}
                onChange={() => onChange}
              />
            );
          })} */}
          <div className="my-1">
            <label
              className="w-full block font-bold p-2 capitalize text-[10px]"
              htmlFor="firstname"
            >
              firstname
            </label>
            <input
              className="w-full block rounded-full py-2 px-5 outline-none bg-zinc-100 focus:border-2 border-[#ff9a55] text-[10px]"
              type="text"
              id="firstname"
              value={firstname}
              placeholder="firstname"
              onChange={onChange}
            />
          </div>
          <div className="my-1">
            <label
              className="w-full block font-bold p-2 capitalize text-[10px]"
              htmlFor="lastname"
            >
              lastname
            </label>
            <input
              className="w-full block rounded-full py-2 px-5 outline-none bg-zinc-100 focus:border-2 border-[#ff9a55] text-[10px]"
              type="text"
              id="lastname"
              value={lastname}
              placeholder="lastname"
              onChange={onChange}
            />
          </div>
          <div className="my-1">
            <label
              className="w-full block font-bold p-2 capitalize text-[10px]"
              htmlFor="email"
            >
              email
            </label>
            <input
              className="w-full block rounded-full py-2 px-5 outline-none bg-zinc-100 focus:border-2 border-[#ff9a55] text-[10px]"
              type="text"
              id="email"
              value={email}
              placeholder="email"
              onChange={onChange}
            />
          </div>
          <div className="my-1">
            <label
              className="w-full block font-bold p-2 capitalize text-[10px]"
              htmlFor="username"
            >
              username
            </label>
            <input
              className="w-full block rounded-full py-2 px-5 outline-none bg-zinc-100 focus:border-2 border-[#ff9a55] text-[10px]"
              type="text"
              id="username"
              value={username}
              placeholder="username"
              onChange={onChange}
            />
          </div>
          <div className="my-1">
            <label
              className="w-full block font-bold p-2 capitalize text-[10px]"
              htmlFor="password"
            >
              password
            </label>
            <input
              className="w-full block rounded-full py-2 px-5 outline-none bg-zinc-100 focus:border-2 border-[#ff9a55] text-[10px]"
              type="text"
              id="password"
              value={password}
              placeholder="password"
              onChange={onChange}
            />
          </div>
          <div className="my-1">
            <label
              className="w-full block font-bold p-2 capitalize text-[10px]"
              htmlFor="dateOfBirth"
            >
              Date of birth
            </label>
            <input
              className="w-full block rounded-full py-2 px-5 outline-none bg-zinc-100 focus:border-2 border-[#ff9a55] text-[10px]"
              type="text"
              id="dateOfBirth"
              value={dateOfBirth}
              placeholder="YYYY-MM-DD"
              onChange={onChange}
            />
          </div>
        </div>

        <Button onClick={() => console.log(123)} text="signup" />

        <div className="flex items-center justify-center">
          <span className="p-3 cursor-pointer text-[10px]">
            Already have an account?{" "}
            {/* <a href="/" className="hover:underline text-[#ff9a55]">
              Log In
            </a> */}
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

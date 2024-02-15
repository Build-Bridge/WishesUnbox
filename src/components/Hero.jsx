import { motion } from "framer-motion";
import { slideIn, textVariant } from "../constants";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="home" className="sectionWrap py-5 max-w-6xl mx-auto md:mb-0 ">
      <div className="lg:flex items-center justify-center">
        <div className="mdd:w-2/3 lg:w-3/6 text-center  lg:text-left">
          <motion.h1
            variants={textVariant(1)}
            // className={` text-4xl md:text-6xl font-extrabold  text-[#333]`}
            className="heroHeadText txx text-balance"
          >
            Personalized Gift Card Creation platform...!
          </motion.h1>
          <p className=" mt-3 mb-5 mdd:text-left   md:text-lg font-extralight">
            Send a Vibrant wish Cards to your loved ones and turn their day into
            a celebration. Dive into the magic of heartfelt connections -- Make
            a unique card to show how much you care...
          </p>
          <Link
            to="/signup"
            className="bg-primary text-white leading-4 hover:bg-primary nv:mt-6 mt-4 text-lg md:text-xl rounded-2xl my-2 px-5 py-2"
          >
            <button>Get Started</button>
          </Link>
        </div>

        <div className="mdd:w-1/3 lg:w-3/6">
          <motion.img
            variants={slideIn("right", "tween", 0.2, 1)}
            src="/hero.svg"
            className="w-"
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

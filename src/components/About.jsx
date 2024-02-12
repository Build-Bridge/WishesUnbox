import {motion} from 'framer-motion';
import { slideIn} from '../constants';

const About = () => {
  return (
    <div className="sectionWrap pt-5 md:mt-5 pb-5 absolute" id="about">

      <div className="mt-20 mb-10">
        <h2 className="my-2 flex justify-center  md:text-[50px] sm:text-[40px] xs:text-[30px] text-[30px]">
          About Us.
        </h2>
        <p className="flex justify-center text-[#444]">
          Explore what else we can do
        </p>
      </div>
      <motion.div variants={slideIn("up","tween",0.2,1)} className="text-lg my-3 text-justify text-[#444]">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to Wishes Unbox! At Wishes Unbox,
        we believe in the magic of thoughtful surprises and the joy of creating
        memorable moments. We are not just a company; we are curators of
        happiness, dedicated to making every occasion special and every
        celebration unforgettable. We understand the importance of connecting
        with family and friends, especially during special occasions. That&#39;s
        why Wishes Unbox is here to make your celebrations even more memorable,
        one gift card and heartfelt wish at a time.
      </motion.div>

    </div>
  );
};

export default About;

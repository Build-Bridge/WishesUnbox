import { howItWorks, textVariant } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

const HowIt = (how) => {
  return (
    <VerticalTimelineElement
      className=""
      contentStyle={{ background: "#f5f5f6", color: "#444", boxShadow: "0.2rem 0px #234"}}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      // date={experience.date}
      
      iconStyle={{ background: how?.iconBg }}
      icon={
        <div className="flex justify-center border border-green rounded-full border-[#444] items-center w-full h-full">
          <img
            src="/how1.png"
            alt={how?.title}
            className="w-full h-full rounded-full object-fill"
          />
        </div>
      }
    >
      <div>
        <h3 className="font-bold text-[#234] text-[24px]">{how.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          Build Bridge
        </p>
      </div>

      <motion.p variants={textVariant(0.3)}>{how.text}</motion.p>
    </VerticalTimelineElement>
  );
};

const HowItWorks = () => {
  return (
    <div id="how" className="mx-auto relative z-0 padding py-24">
      <div className="my-4 mb-10">
        <h2 className="my-2 md:text-[50px] sm:text-[40px] xs:text-[30px] text-[30px] flex justify-center">Discover how it works</h2>
        <p className="flex justify-center text-[#444]">Explore how to!</p>
      </div>
      {/*  */}

      {/* <ul className="md:flex md:flex-row md:row-span-2 gap-5 mt-3 text-justify">
        {howItWorks.map((how) => (
          <li
            key={how.title}
            className=" border-spacing-1 rounded-md shadow px-5 py-5 text-[#555]"
          >
            <strong className="text-[#333]">{how.title}: </strong>
            {how.text}
          </li>
        ))}
      </ul> */}

      <VerticalTimeline lineColor="#234">
        {howItWorks.map((howList, idx) => (
          <HowIt key={idx} how={howList} {...howList} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default HowItWorks;

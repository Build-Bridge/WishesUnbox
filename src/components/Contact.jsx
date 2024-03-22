import { RiMailSendLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div
      id="contact"
      className="mt-[4rem] md:px-7 py-10 pt-20 items-center  md:shadow bg-white"
    >
      <div className="mt-20 mb-10">
        <h2 className="my-2 md:text-[50px] sm:text-[40px] xs:text-[30px] text-[30px] flex justify-center">
          Get in touch
        </h2>
        <p className="flex justify-center text-[#444]">Contact Us!</p>
      </div>

      <div className=" bg-slate-white order hadow-lg  lg:mx-36 md:mx-16 sm:bg-slate-0 md:bg-slate-80 bg-blac ">
        <div className="md:flex items-end">
          <div className=" sm:mx-10 my-3 pl-4  b-white">
            {/* <div className="my-3 md:my-0">
              <h2 className="my-2 md:text-[50px] sm:text-[40px] xs:text-[30px] text-[30px] flex justify-center">
                Get in touch
              </h2>
              <p className="flex justify-center text-[#444]">Contact Us!</p>
            </div> */}
            <form action="">
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="What's your name?"
                  className="contactInput"
                />
              </div>

              <div className="w-full  px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Your Mail
                </label>
                <input
                  type="email"
                  placeholder="What's your web address?"
                  className="contactInput"
                />
              </div>

              <div className="w-full  px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Your Message
                </label>
                <textarea
                  name=""
                  id=""
                  rows="4"
                  placeholder="Enter your message?"
                  className="contactInput"
                />
              </div>

              <div className="w-full  px-3 mb-6 md:mb-0">
                <button
                  className="flex justify-center items-center gap-3 w-full text-[#fff]  bg-[#FF9A55] font-bold border-gray-200 rounded py-3 px-4 leading-tight tracking-widest text-lg focus:outline-none focus:border-gray-500 focus:bg-white "
                >
                  Submit <RiMailSendLine />
                </button>
              </div>
            </form>
          </div>

          <div className="hidden md:block">
            <img src="/contact.gif" className="max-h-md right-0" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

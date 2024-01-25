import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function LandingPage() {
  return (
    // <div className=" w-full bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 background-animate">
    <div className="flex items-center flex-col justify-center w-full relative h-min">
      <main className="w-full flex flex-col items-center max-w-7xl px-8 relative min-h-screen">
        <Header />
        <div className="grid items-center justify-center flex-col pt-28 w-full gap-10 lg:grid-cols-2 min-h-screen">
          <div className="">
            <p className="text-3xl max-lgw:my-12 text-gray-900 max-lg:text-center">
              Personalized gift <br /> card creation platform.
            </p>
            <p className="text-sm text-gray-900 max-lg:text-center py-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo eos est corrupti
              perspiciatis libero debitis eaque. Velit voluptatem cumque, corrupti animi
            </p>
            <div className="w-full max-lg:flex items-center justify-center">
              <button className="bg-purple-600 text-purple-50 text-xl px-4 py-2 rounded-lg shadow-2xl mt-8">
                Try It Out
              </button>
            </div>
          </div>
          <img
            src="/0.webp"
            className="w-[800spx] rounded-3xl shadow-2xl max-h-[calc(100-30px)] shadow-black bg-blue-200"
          ></img>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;

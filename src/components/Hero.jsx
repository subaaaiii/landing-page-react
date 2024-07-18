import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full h-screen mx-auto items-center flex flex-col justify-center">
        <p className="text-[#00df9a] md:text-2xl font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
          Grow With Data
        </h1>
        <div className="flex">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold">
            Fast, flexible, financing for
          </p>
          <ReactTyped
            className="text-gray-500 md:text-4xl sm:text-3xl text-xl font-bold pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={140}
            backSpeed={50}
            loop
          ></ReactTyped>
        </div>
        <p className="md:text-2xl text-gray-500 font-bold p-2 md:p-4 text-center">Monitor your data analytics to increase revenue for BTB, BTC, and SASS platform</p>
        <button className="bg-[#00df9a] px-8 py-3 m-2 rounded-md text-black font-medium">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;

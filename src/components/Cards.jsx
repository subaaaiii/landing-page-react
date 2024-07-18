import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";
const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className=" shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300 ">
          <img className="w-20 mt-8 mx-auto" src={single} alt="" />
          <h2 className="text-2xl text-center font-bold mt-8">Single User</h2>
          <p className="text-center text-4xl font-bold py-8">$149</p>
          <div className="text-center font-medium">
            <p className="border-b py-2">500GB Storage</p>
            <p className="border-b py-2">1 Granted user</p>
            <p className="border-b py-2">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] mx-auto my-6 px-6 py-3 font-medium rounded-md">
            Start Trial
          </button>
        </div>
        <div className=" shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300 bg-[#f5f5f5] border border-[#000300]">
        <p className=" bg-[#000300] py-4 w-full text-center text-2xl font-bold text-[#f5f5f5] rounded-t-md">BEST SELLER</p>
          <img className="w-20 mt-8 mx-auto" src={double} alt="" />
          <h2 className="text-2xl text-center font-bold mt-8">Double User</h2>
          <p className="text-center text-4xl font-bold py-8">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b">500GB Storage</p>
            <p className="py-2 border-b">1 Granted user</p>
            <p className="py-2 border-b">Send up to 2 GB</p>
          </div>
          <button className="bg-[#000300] mx-auto my-6 px-6 py-3 font-medium rounded-md mb-8 text-[#00df9a]">
            Start Trial
          </button>
        </div>
        <div className=" shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mt-8 mx-auto" src={triple} alt="" />
          <h2 className="text-2xl text-center font-bold mt-8">Triple User</h2>
          <p className="text-center text-4xl font-bold py-8">$249</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b">500GB Storage</p>
            <p className="py-2 border-b">1 Granted user</p>
            <p className="py-2 border-b">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] font-medium mx-auto py-3 px-6 my-6 rounded-md">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

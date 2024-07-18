import React from "react";

const Newsletter = () => {
  return (
    <div className="max-w-[1240] py-16 justify-center px-4 text-white overflow-hidden">
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2 md:mx-auto">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips and triks to optimize your flow{" "}
          </h1>
          <p className="font-bold py-2">
            sign up to our newsletter to get update
          </p>
        </div>
        <div className="">
          <div className="w-full grid sm:grid-cols-2">
            <input
              className="text-black py-2 px-4 rounded-md"
              placeholder="Enter email"
              type="email"
            />
            <button className="bg-[#00df9a] w-[150px] px-4 py-2 rounded-md text-[#000300] font-medium mt-2 sm:mt-0 sm:ml-4 md:ml-4 lg:ml-4 lg:mt-0">
              Notify Me
            </button>
          </div>
          <div>
            <p>We care about protection of your data.Read our <a className="text-[#00df9a] underline" href="www">
              Privacy Policy
            </a></p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

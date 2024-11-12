import React from 'react';
import logo from '../logo/transparent-emojis-sparkle-2.png';

const Landing = () => {
  return (
    <>
      <div className="text-center mt-10 md:mt-20">
        <h1 className="font-bold text-3xl md:text-5xl">Maximize Your Impact</h1>
        <div className="font-bold text-3xl md:text-5xl mt-2 md:mt-4">
          <span className="text-customRed">Business With </span><span>R</span><span className="text-customBrown">Max</span>
        </div>
      </div>

      <div className="text-center mt-2 md:mt-4 px-4">
        <p className="text-sm md:text-base">
          Enhance your business with Rmax's all-in-one platform - Streaming client
        </p>
        <p className="text-sm md:text-base">
          engagement, automating workflows, and fueling growth.
        </p>
      </div>

      <div className="text-center mt-6 md:mt-10 space-x-3">
        <button className="px-4 py-2 bg-customRed text-white rounded-md hover:bg-customRedHover">
          Get Started
        </button>
        <button className="px-4 py-2 border shadow-md text-black rounded-md">
          Book A Demo
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-10 md:mt-24 mb-10 md:mb-24 space-y-4 md:space-y-0 md:space-x-5 px-4">
        <button className="px-4 py-2 border shadow-md text-black rounded-md w-full md:w-auto">
          Seamless Onboarding
        </button>
        <button className="px-4 py-2 border shadow-md text-black rounded-md w-full md:w-auto">
          Client Engagement
        </button>
        <button className="px-4 py-2 border shadow-md text-black rounded-md w-full md:w-auto">
          Generate Report
        </button>
        <button className="px-4 py-2 border shadow-md text-black rounded-md w-full md:w-auto">
          Revenue Growth
        </button>
        <div className="mt-4 md:mt-0">
          <img src={logo} alt="Company Logo" className="w-12 h-12 md:w-16 md:h-16" />
        </div>
      </div>
    </>
  );
};

export default Landing;

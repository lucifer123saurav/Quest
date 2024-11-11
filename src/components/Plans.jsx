import React, { useState } from 'react';
import AppleIcon from '../logo/apple-icon-4.png'
import GooglePlayIcon from '../logo/google-play-store-icon-logo-symbol-free-png.webp';
const Plans = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="flex flex-col items-center p-6  min-h-screen">
      <h2 className="text-3xl font-semibold text-center">
        Choose Plan <br /> That's Right For You
      </h2>
      <p className="text-gray-600 text-center mt-2">
        Simple and transparent pricing. Start for free, upgrade when you love it.
        <br />
        <span className="text-red-500 font-semibold">30 day free trial in a button</span>
      </p>
      <p className="text-center mt-4">
        Running a <span className="font-semibold">Growth Business or Enterprise?</span> Let's connect - 
        <button className="ml-2 text-red-500 font-semibold">Talk to Sales</button>
      </p>

      <div className="flex items-center mt-6">
        <span className="font-medium">Monthly</span>
        <label className="mx-4">
          <input
            type="checkbox"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
            className="hidden"
          />
          <span className="w-10 h-6 bg-gray-300 rounded-full inline-block relative">
            <span
              className={`w-4 h-4 mt-1 ml-1 bg-white rounded-full absolute transition-all duration-300 ${
                isYearly ? 'translate-x-4' : 'translate-x-0'
              }`}
            ></span>
          </span>
        </label>
        <span className="font-medium">Yearly</span>
        <span className="ml-2 text-red-500 font-semibold">SAVE 25%</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="border border-gray-200 rounded-lg p-6 w-full md:w-64 bg-white">
          <h3 className="text-lg font-semibold text-gray-600">STARTER</h3>
          <div className="flex items-center mt-4">
            <span className="text-3xl font-bold">${isYearly ? 15 : 17}</span>
            <span className="ml-1 text-lg text-gray-500">/ month</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">billed {isYearly ? 'yearly' : 'monthly'}</p>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Commercial License
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> 100+ HTML UI Elements
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Unlimited Domain Support
            </li>
            <li className="flex items-center text-gray-400">
              <span className="mr-2">✖</span> 6 Month Premium Support
            </li>
            <li className="flex items-center text-gray-400">
              <span className="mr-2">✖</span> Life Time Updates
            </li>
          </ul>
          <button className="mt-6 w-full py-2 text-white bg-red-500 rounded-lg font-semibold">
            Get Started
          </button>
          <p className="text-sm text-gray-500 mt-2 text-center">No credit card required</p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 w-full md:w-64 bg-white">
          <h3 className="text-lg font-semibold text-gray-600">PREMIUM</h3>
          <div className="flex items-center mt-4">
            <span className="text-3xl font-bold">${isYearly ? 66 : 88}</span>
            <span className="ml-1 text-lg text-gray-500">/ month</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">billed {isYearly ? 'yearly' : 'monthly'}</p>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Commercial License
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> 100+ HTML UI Elements
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Unlimited Domain Support
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> 6 Month Premium Support
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Life Time Updates
            </li>
          </ul>
          <button className="mt-6 w-full py-2 text-white bg-customRed rounded-lg font-semibold">
            Get Started
          </button>
          <p className="text-sm text-gray-500 mt-2 text-center">No credit card required</p>
        </div>
      </div>

      <a href="#" className="text-blue-500 mt-6 font-semibold">Explore In-Depth Differences</a>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold">Manage Your Business On the Go</h3>
        <p className="text-gray-500 mt-2 max-w-lg mx-auto">
          With free Business Mobile App, you can manage your entire service business from anywhere. Stay connected and stay in control, no matter where your day takes you.
        </p>
        <div className="flex justify-center gap-4 mt-6">
            <div className='bg-gray-50 flex border rounded-md'>
                <img
                src={AppleIcon}
                alt="App Logo"
                className="w-8 h-8 object-contain" 
                />
                <button className=" px-2 py-2 rounded-lg text-black font-medium">
                App Store
                </button>
            </div>
            
            <div className='bg-gray-50 flex border rounded-md'>
            <img
            src={GooglePlayIcon}
            alt="Playstore Logo"
            className="w-8 h-8 object-contain" 
            />
            <button className=" px-2 py-2 rounded-lg text-black font-medium">
            Google Play
            </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;

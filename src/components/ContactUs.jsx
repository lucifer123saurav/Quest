import React from 'react';
import { FiSearch } from 'react-icons/fi';

const ContactUs = () => {
  return (
    <div className="min-h-screen  flex flex-col ml-60 py-16 px-4 sm:px-6 lg:px-8">
      <div className=" mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Get in touch with us.</h1>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">We’re here to assist you.</h1>
      </div>

      <div className="w-full max-w-2xl">
        <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Business Name<span className="text-customRed">*</span>
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                placeholder="Search for your business listing"
                className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-customRed focus:border-customRed"
              />
              <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                <FiSearch size={20} />
              </span>
            </div>
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Your Name<span className="text-">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-customRed focus:border-customRed"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number<span className="text-customRed">*</span>
            </label>
            <div className="mt-1 flex">
              <select className="block w-20 px-3 py-3 border border-gray-300 rounded-l-md focus:ring-customRed focus:border-customRed">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input
                type="text"
                placeholder="9851"
                className="block w-full px-4 py-3 border-t border-b border-r border-gray-300 rounded-r-md focus:ring-customRed focus:border-customRed"
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="e.g xyz@gmail.com"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-customRed focus:border-customRed"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Message<span className="text-customRed">*</span>
            </label>
            <textarea
              placeholder="Write here your message..."
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-customRed focus:border-customRed"
              rows="4"
            ></textarea>
          </div>

          <div className="sm:col-span-2 text-left">
            <button
              type="submit"
              className="mt-4 px-8 py-3 bg-customRed text-white rounded-md font-semibold text-sm hover:bg-customRedHover"
            >
              Leave us a Message →
            </button>
          </div>
        </form>
      </div>

   
      <div className="mt-12 w-full max-w-3xl border-t border-gray-200 pt-8">
        <div className="flex flex-col sm:flex-row justify-between text-center sm:text-left">

          <div className="mb-8 sm:mb-0">
            <h3 className="text-lg font-semibold text-gray-600">Contact Info</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              We are always happy to assist you
            </p>
          </div>

          <div className="mb-8 sm:mb-0">
            <h3 className="text-lg font-semibold text-gray-900">Email Address</h3>
            <p className="font-semibold text-gray-600">--</p>
            <p className=" font-semibold text-gray-600">Support@RMax.com</p>
            <p className="text-gray-500 text-sm">
              Assistance hours: Monday - Friday 6 am to 8 pm EST
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Contact Number</h3>
            <p className="font-semibold text-gray-600">--</p>
            <p className="font-semibold text-gray-600">+91-8657491236</p>
            <p className="text-gray-500 text-sm">
              Assistance hours: Monday - Friday 6 am to 8 pm EST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

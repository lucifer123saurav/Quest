import React from 'react';
import { FiSearch } from 'react-icons/fi';

const FrequentlyQuestion = () => {
  return (
    <div className="max-w-3xl mx-auto text-center mt-24 px-4">
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      <p className="text-gray-500 mb-8">
        Find answers to common questions about our services and features.
        <br />
        For more details, contact our support team.
      </p>

      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Ask Q! e.g. Tell me about key Features."
          className="w-full p-3 pr-14 border border-gray-300 rounded-md text-gray-500 focus:outline-none"
        />
        <button className="w-14 h-12 absolute right-0 top-1/2 transform -translate-y-1/2 bg-customRed text-white rounded-md hover:bg-customRedHover flex items-center justify-center">
          <FiSearch size={20} />
        </button>
      </div>

      <div className="space-y-4">
        <div className="border border-gray-300 rounded-lg p-4 text-left cursor-pointer hover:bg-gray-100">
          <h3 className="font-semibold text-gray-800">What is RMax?</h3>
          <p className="text-gray-500 mt-2">
            Qest is a SaaS platform/ecosystem that lets any small to medium
            service business setup & manage their business quickly & easily.
          </p>
        </div>
        
        <div className="border border-gray-300 rounded-lg p-4 text-left cursor-pointer hover:bg-gray-100">
          <h3 className="font-semibold text-gray-800">How does it work?</h3>
        </div>
        
        <div className="border border-gray-300 rounded-lg p-4 text-left cursor-pointer hover:bg-gray-100">
          <h3 className="font-semibold text-gray-800">How much does it cost?</h3>
        </div>
      </div>

      <p className="text-gray-500 mt-8">
        Haven't got your answer?{' '}
        <a href="#" className="text-customRed underline">
          Contact our support now
        </a>
      </p>
    </div>
  );
};

export default FrequentlyQuestion;

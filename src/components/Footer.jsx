import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-wrap text-gray-400 pb-4 border-b border-gray-600">
          <div className="w-1/6 p-2">
            <h3 className="text-lg font-semibold text-gray-300">Company</h3>
            <ul className="mt-2">
            <li  className="py-1">About Us</li>
            <li  className="py-1">Contact Us</li>
            <li  className="py-1">Careers</li>
             
            </ul>
          </div>
          <div className="w-1/6 p-2">
            <h3 className="text-lg font-semibold text-gray-300">Bussiness Type</h3>
            <ul className="mt-2">   
            <li  className="py-1">Health & Wellness</li>
            <li  className="py-1">Sports</li>
            <li  className="py-1">Learning Activites</li>
            <li  className="py-1">Household Services</li>
            <li  className="py-1">Miscellaneous</li>
            </ul>
          </div>

          <div className="w-1/6 p-2">
            <h3 className="text-lg font-semibold text-gray-300">Bussiness Size</h3>
            <ul className="mt-2">   
            <li  className="py-1">Enterpreneurs</li>
            <li  className="py-1">SMBs</li>
            <li  className="py-1">Growth Bussiness</li>
            <li  className="py-1">Household Services</li>
            <li  className="py-1">Enterprise</li>
            </ul>
          </div>
          <div className="w-1/6 p-2">
            <h3 className="text-lg font-semibold text-gray-300">Download</h3>
            <ul className="mt-2">
            
            <li className="py-1">Bussiness App</li>
            <li className="py-1">Bussiness App</li>
            <li className="py-1">User App</li>
            <li className="py-1">User App</li>  
            </ul>
          </div>
          <div className="w-1/6 p-2">
            <h3 className="text-lg font-semibold text-gray-300">Legal</h3>
            <ul className="mt-2">
            <li className="py-1">Privacy Policy</li>
            <li className="py-1">Terms & Conditions</li>
            <li className="py-1">Return Policy</li>
            </ul>
          </div>
          <div className="w-1/6 p-2">
            <h3 className="text-lg font-semibold text-gray-300">Contact us</h3>
            <li className="py-1">support@Rmax.com</li>
            <li className="py-1">+91-8459671235</li>
          </div>
        </div>
        
        <div className="my-4 border-t border-gray-600"></div>

        <div className="flex justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2024 Copyright, All Rights Reserved @RMax</p>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

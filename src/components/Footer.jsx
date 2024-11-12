import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        
        {/* Links Section */}
        <div className="flex flex-wrap text-gray-400 pb-4 border-b border-gray-600 space-y-8 md:space-y-0 lg:justify-start justify-center">
          <div className="w-full md:w-1/2 lg:w-1/6 p-2 text-center lg:text-left">
            <h3 className="text-lg font-semibold text-gray-300">Company</h3>
            <ul className="mt-2 space-y-1">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 p-2 text-center lg:text-left">
            <h3 className="text-lg font-semibold text-gray-300">Business Type</h3>
            <ul className="mt-2 space-y-1">
              <li>Health & Wellness</li>
              <li>Sports</li>
              <li>Learning Activities</li>
              <li>Household Services</li>
              <li>Miscellaneous</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 p-2 text-center lg:text-left">
            <h3 className="text-lg font-semibold text-gray-300">Business Size</h3>
            <ul className="mt-2 space-y-1">
              <li>Entrepreneurs</li>
              <li>SMBs</li>
              <li>Growth Business</li>
              <li>Household Services</li>
              <li>Enterprise</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 p-2 text-center lg:text-left">
            <h3 className="text-lg font-semibold text-gray-300">Download</h3>
            <ul className="mt-2 space-y-1">
              <li>Business App</li>
              <li>User App</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 p-2 text-center lg:text-left">
            <h3 className="text-lg font-semibold text-gray-300">Legal</h3>
            <ul className="mt-2 space-y-1">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 p-2 text-center lg:text-left">
            <h3 className="text-lg font-semibold text-gray-300">Contact us</h3>
            <ul className="mt-2 space-y-1">
              <li>support@Rmax.com</li>
              <li>+91-8459671235</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-gray-600"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-gray-400 text-sm space-y-4 md:space-y-0">
          <p className="text-center md:text-left">&copy; 2024 RMax, All Rights Reserved</p>
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

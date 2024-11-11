import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({iSSearchbar=true}) {
    console.log(iSSearchbar,"Navbarr");
  return (
<div className="w-full">
    <div className="flex justify-between items-center bg-white p-4 shadow-md">
        <div className="text-2xl font-bold">
        <span>R</span><span className="text-customBrown">Max</span>
        </div>
        <div className="flex gap-4 items-center">
            <Link to="/" className="p-2 text-gray-700 rounded-md hover:bg-gray-100">Home</Link>
            <Link to="/pricing" className="p-2 text-gray-700 rounded-md hover:bg-gray-100">Pricing</Link>
            <Link to="/contact" className="p-2 text-gray-700 rounded-md hover:bg-gray-100">Contact</Link>
            <span className="text-gray-400 mx-2">|</span>
            <button className="px-4 py-2 text-gray-700 border rounded-md hover:bg-gray-100">
                Login
            </button>
            <button className="px-4 py-2 bg-customRed text-white rounded-md hover:bg-customRedHover">
                Try For Free
            </button>
        </div>
    </div>
    {iSSearchbar&&
    <div className="flex items-center max-w-md mx-auto mt-24 w-full">
        <div className="border border-gray-300  rounded-l-md  items-center justify-center bg-white">
            <h4 className="font-bold ml-7">AI</h4>
            <div className="font-bold ml-1"><span>R</span><span className="text-customBrown">Max</span></div>
        </div>

        <input
            type="text"
            name="username"
            placeholder="Curious? Let AI uncover the answers!"
            className="border border-gray-300 p-3 ml-1 rounded-r-md flex-grow"
        />
    </div>
    }   
</div>

  );
}

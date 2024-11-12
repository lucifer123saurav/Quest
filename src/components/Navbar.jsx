import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 

export default function Navbar({ iSSearchbar = true }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="w-full">
            <div className="flex justify-between items-center bg-white p-4 shadow-md">
                <div className="text-2xl font-bold">
                    <span>R</span><span className="text-customBrown">Max</span>
                </div>

                <div className="hidden md:flex gap-4 items-center">
                    <Link to="/" className="p-2 text-gray-700 rounded-md hover:bg-gray-100">Home</Link>
                    <Link to="/pricing" className="p-2 text-gray-700 rounded-md hover:bg-gray-100">Pricing</Link>
                    <Link to="/contact" className="p-2 text-gray-700 rounded-md hover:bg-gray-100">Contact</Link>
                    <span className="text-gray-400 mx-2">|</span>
                    <button className="px-4 py-2 text-gray-700 border rounded-md hover:bg-gray-100">Login</button>
                    <button className="px-4 py-2 bg-customRed text-white rounded-md hover:bg-customRedHover">
                        Try For Free
                    </button>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col items-start bg-white shadow-md p-4">
                    <Link to="/" className="p-2 text-gray-700 rounded-md hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link to="/pricing" className="p-2 text-gray-700 rounded-md hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
                    <Link to="/contact" className="p-2 text-gray-700 rounded-md hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    <button className="px-4 py-2 text-gray-700 border rounded-md hover:bg-gray-100 mt-2" onClick={() => setIsMobileMenuOpen(false)}>Login</button>
                    <button className="px-4 py-2 bg-customRed text-white rounded-md hover:bg-customRedHover mt-2" onClick={() => setIsMobileMenuOpen(false)}>
                        Try For Free
                    </button>
                </div>
            )}


            {iSSearchbar&&
                <div className="flex items-center max-w-md mx-auto mt-24 sm:w-full ">
                    <div className="border border-gray-300  rounded-l-md  items-center justify-center bg-white">
                        <h4 className="font-bold ml-7">AI</h4>
                        <div className="font-bold ml-1"><span>R</span><span className="text-customBrown">Max</span></div>
                    </div>

                    <input
                        type="text"
                        name="username"
                        placeholder="Curious? Let AI uncover the answers!"
                        className="border border-gray-300 p-3 ml-1 rounded-r-md flex-grow "
                    />
                </div>
            } 

        </div>
    );
}


// export default function Navbar({iSSearchbar=true}) {
//     console.log(iSSearchbar,"Navbarr");
//   return (
// <div className="w-full">
//     <div className="flex justify-between items-center bg-white p-4 shadow-md">
//         <div className="text-2xl font-bold">
//         <span>R</span><span className="text-customBrown">Max</span>
//         </div>
//         <div className="flex gap-4 items-center">
//             <Link to="/" className="p-2 text-gray-700 rounded-md hover:bg-gray-100">Home</Link>
//             <Link to="/pricing" className="p-2 text-gray-700 rounded-md hover:bg-gray-100">Pricing</Link>
//             <Link to="/contact" className="p-2 text-gray-700 rounded-md hover:bg-gray-100">Contact</Link>
//             <span className="text-gray-400 mx-2">|</span>
//             <button className="px-4 py-2 text-gray-700 border rounded-md hover:bg-gray-100">
//                 Login
//             </button>
//             <button className="px-4 py-2 bg-customRed text-white rounded-md hover:bg-customRedHover">
//                 Try For Free
//             </button>
//         </div>
//     </div>
//     {iSSearchbar&&
//     <div className="flex items-center max-w-md mx-auto mt-24 w-full">
//         <div className="border border-gray-300  rounded-l-md  items-center justify-center bg-white">
//             <h4 className="font-bold ml-7">AI</h4>
//             <div className="font-bold ml-1"><span>R</span><span className="text-customBrown">Max</span></div>
//         </div>

//         <input
//             type="text"
//             name="username"
//             placeholder="Curious? Let AI uncover the answers!"
//             className="border border-gray-300 p-3 ml-1 rounded-r-md flex-grow"
//         />
//     </div>
//     }   
// </div>

//   );
// }

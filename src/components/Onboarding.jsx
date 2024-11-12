import React from 'react';
import user from '../logo/user-logo.webp';
import download from '../logo/pngtree-red-download-buttons-icons-transparent-images-png-image_8995403.png';
import website from '../logo/pngtree-computer-red-flat-icon-isolated-wireless-photo-png-image_13783883.png';

export const Onboarding = () => {
  return (
    <div className="w-full max-w-screen overflow-hidden px-4">
      <div className="text-center mt-24 md:mt-48">
        <h1 className="font-bold text-3xl md:text-5xl">Onboard business in 3 simple steps</h1>
        <h3 className="mt-4 text-base md:text-lg">
          Quick assisted onboarding with 30-day free trial. No credit card needed.
        </h3>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center w-full mt-10 mb-24 space-y-10 md:space-y-0 md:space-x-6">
        <div className="flex flex-col items-center w-full md:w-auto">
          <div className="relative bg-white rounded-full p-4 shadow-lg w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
            <span className="absolute top-1 left-1 bg-gray-200 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs font-bold">1</span>
            <img src={user} alt="Claim profile" className="h-12 w-12 md:h-16 md:w-16 object-cover rounded-full" />
          </div>
          <div className="w-full max-w-[250px] md:max-w-[300px] text-center mt-4 md:mt-5">
            <h2 className="font-semibold">Claim your preset profile</h2>
            <p className="mt-2 text-sm">
              Unlock tailored service and seamlessly elevate your experience by claiming your preset profile today.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full md:w-auto">
          <div className="relative bg-white rounded-full p-4 shadow-lg w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
            <span className="absolute top-1 left-1 bg-gray-200 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs font-bold">2</span>
            <img src={download} alt="Download" className="h-12 w-12 md:h-16 md:w-16 object-cover rounded-full" />
          </div>
          <div className="w-full max-w-[250px] md:max-w-[300px] text-center mt-4 md:mt-5">
            <h2 className="font-semibold">Download resources</h2>
            <p className="mt-2 text-sm">
              Get all the essential resources you need to start using our platform effectively and effortlessly.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full md:w-auto">
          <div className="relative bg-white rounded-full p-4 shadow-lg w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
            <span className="absolute top-1 left-1 bg-gray-200 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs font-bold">3</span>
            <img src={website} alt="Visit website" className="h-12 w-12 md:h-16 md:w-16 object-cover rounded-full" />
          </div>
          <div className="w-full max-w-[250px] md:max-w-[300px] text-center mt-4 md:mt-5">
            <h2 className="font-semibold">Explore the platform</h2>
            <p className="mt-2 text-sm">
              Start exploring the platform and discover new features to enhance your business journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

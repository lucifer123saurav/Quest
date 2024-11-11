import React from 'react'
import user from '../logo/user-logo.webp';
import download from '../logo/pngtree-red-download-buttons-icons-transparent-images-png-image_8995403.png';
import website from '../logo/pngtree-computer-red-flat-icon-isolated-wireless-photo-png-image_13783883.png'

export const Onboarding = () => {
  return (
    <>
        <div className='text-center mt-48'>
            <h1 class="font-bold text-5xl">Onboard business in 3 simple steps</h1>
            <h3 className='mt-4'>Quick assisted onboarding with 30day free trail. No credit card needed.</h3>
        </div>

        <div class="flex justify-around w-full px-4 mt-10 mb-24">
    
            <div>
                <div class="relative bg-white rounded-full p-4 shadow-lg w-32 h-32 flex items-center justify-center ml-20">
                    <span class="absolute top-0 left-0 bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                    <img src={user} alt="Image 1" class="h-16 w-16 object-cover rounded-full"></img>
                </div>
                <div className='w-[300px] text-center mt-5'>
                <h2 className='font-semibold'>Claim your preset profile</h2>
                <p className='mt-2'>Unock tailored service and seamlessly elevate your experience by claiming your preset profile today</p>
                </div>
            </div>
            <div>
                <div class="relative bg-white rounded-full p-4 shadow-lg w-32 h-32 flex items-center justify-center ml-20">
                    <span class="absolute top-0 left-0 bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                    <img src={download} alt="Image 2" class="h-16 w-16 object-cover rounded-full"></img>
                </div>

                <div className='w-[300px] text-center mt-5'>
                <h2 className='font-semibold'>Claim your preset profile</h2>
                <p className='mt-2'>Unock tailored service and seamlessly elevate your experience by claiming your preset profile today</p>
                </div>
            </div>

            <div>
                <div class="relative bg-white rounded-full p-4 shadow-lg w-32 h-32 flex items-center justify-center ml-20">
                    <span class="absolute top-0 left-0 bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                    <img src={website} alt="Image 3" class="h-16 w-16 object-cover rounded-full "></img>
                </div>

                <div className='w-[300px] text-center mt-5'>
                    <h2 className='font-semibold'>Claim your preset profile</h2>
                    <p className='mt-2'>Unock tailored service and seamlessly elevate your experience by claiming your preset profile today</p>
                </div>
            
            </div>

        </div>
    </>   
  )
}

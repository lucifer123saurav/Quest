import React from 'react'
import logo from '../logo/transparent-emojis-sparkle-2.png'

const Landing = () => {
  return (
    <>
        <div class="text-center mt-20">
            <h1 class="font-bold text-5xl">Maximize Your Impact</h1>
            <div class="font-bold text-5xl mt-4">
                <span className='text-customRed'>Business With </span><span>R</span><span className='text-customBrown'>Max</span>
            </div>
        </div>
        <div className='text-center mt-4'>
            <p>Enhance your business with Rmax's all-in-one platform-Streaming client</p>
            <p>engagement, automating workflows, and fueling growth.</p>
        </div>
        <div class='text-center mt-10'>
            <button className="px-4 py-2 bg-customRed text-white rounded-md hover:bg-customRedHover">
                Get Started 
            </button>
            <button className="px-4 py-2 ml-5 border  shadow-md text-blacks rounded-md ">
                Book A Demo
            </button>
        </div>

        <div class="flex items-center justify-center mt-24 mb-24 space-x-5">

            <button class="px-4 py-2 border shadow-md text-black rounded-md">
                Seamless Onboarding
            </button>
            <button class="px-4 py-2 border shadow-md text-black rounded-md">
                Client Engagement
            </button>
            <button class="px-4 py-2 border shadow-md text-black rounded-md">
                Generate Report
            </button>
            <button class="px-4 py-2 border shadow-md text-black rounded-md">
                Revenue Growth
            </button>
            <div className='ml-2'>
             <img src={logo} alt="Company Logo" class="w-16 h-16" />
            </div>
            
        </div>


    </>
  )
}

export default Landing

import React from 'react'
import underline_Vector from "../Assets/underline_Vector.png"
import Vector1 from "../Assets/Vector1.png"
import Banner_image from "../Assets/Banner_Image.png"
import Text from "./text"
import Buttons from "./buttons"

export default function banner() {
    return (
        <div className='w-full min-h-screen overflow-hidden bg-[#f7f3f3] flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-20 py-10 md:py-20'>
            {/* Left Content */}
            <div className='w-full md:w-1/2 flex flex-col justify-center'>
                <h1 className='capitalize font-roboto text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
                    simplifying <br />
                    <span className='text-blue-700'>compliance </span>
                    for <br />
                    <span>
                        <img src={underline_Vector} alt="underline_Vector" className='w-40 md:w-60 lg:w-70 inline-block' />
                    </span>
                </h1>
                <p className=' mt-[-34px] font-roboto text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
                    research analysts

                </p>


                <div className='mt-6 md:mt-8 w-full md:w-3/4'>
                    <Text />

                    <div className='flex flex-col sm:flex-row gap-3 mt-6'>
                        <button className='flex-1 sm:flex-none flex items-center justify-center bg-blue-700 hover:bg-blue-800 cursor-pointer transition-all duration-300 p-2 rounded-2xl text-white font-bold'>
                            Get Started
                        </button>

                        <button className='flex-1 sm:flex-none flex items-center justify-center border-2 border-blue-700 hover:bg-blue-700 hover:text-white cursor-pointer transition-all duration-300 p-2 rounded-2xl text-blue-700 font-bold'>
                            Book A Consultation
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className='w-full md:w-1/2 flex justify-center mt-8 md:mt-0'>
                <img src={Banner_image} alt="Banner_image" className='w-80 sm:w-96 md:w-[400px] lg:w-[500px] h-auto' />
            </div>
        </div>
    )
}

import React from 'react'
import underline_Vector from "../assets/underline_Vector.png"
import Vector1 from "../assets/Vector1.png"
import Banner_image from "../assets/Banner_image.png"
import Text from "./text"
import Buttons from "./buttons"

export default function banner() {
    return (
        <div className='w-screen h-155  overflow-hidden bg-[#f7f3f3]'>
            <div >

                <h1 className=' capitalize  font-roboto text-5xl font-bold  relative left-20 top-20'>simplifying <br />
                    <span className='text-blue-700'>compliance </span>
                    for <br />
                    <img src={underline_Vector} alt="underline_Vector" className='relative w-70 top-0' />

                    research analysts
                </h1>

            </div>
            <img src={Banner_image} alt="Banner_image" className='relative  top-[-15%]  right-[-50%] w-[600px] ' />
            <div className='capitalize w-[40%] mt-[-28%] ml-[6%]'>
                <Text />
                <span className='flex w-[40%] hover:bg-blue-800 cursor-pointer transition-all duration-300 justify-center items-center bg-blue-700 p-2 rounded-2xl text-white font-bold mt-2'>
                    <Buttons name={"Get Started"} />


                </span>
                <span className=' relative mt-[-7%] left-[45%] flex w-[40%] hover:bg-blue-800 hover:text-white cursor-pointer transition-all duration-300 justify-center items-center border-2 border-blue-700 p-2 rounded-2xl text-blue-700 font-bold mt-2 h-10'>
                    <Buttons name={"Book A Consultion"} />


                </span>
            </div>
        </div>
    )
}

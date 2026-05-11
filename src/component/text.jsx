import React from 'react'
import { TiTick } from "react-icons/ti";

export default function Text() {
    return (
        <div>

            <p>Stay focused on your insights—we’ll
                handle the compliance. Our expert solutions ensure
                your research practices meet every regulatory
                requirement with confidence and ease</p>
            <ul className='mt-5 space-y-3' >
                <li className=' text-lg flex items-center '><TiTick className='  bg-blue-500 text-white  w-5 h-5 rounded-full mr-3 ' />End-To-End Compliance Support</li>
                <li className='text-lg flex items-center'><TiTick className='  bg-blue-500 text-white  w-5 h-5 rounded-full mr-3 ' /> Regulatory filings made simple</li>
                <li className='text-lg flex items-center'><TiTick className='  bg-blue-500 text-white  w-5 h-5 rounded-full mr-3 ' /> Tailored solutions for independent analysts & firms   </li>
            </ul>
        </div>
    )
}

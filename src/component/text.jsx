import React from 'react'
import { TiTick } from "react-icons/ti";

export default function Text() {
    return (
        <div>
            <p className='text-sm md:text-base text-gray-700 leading-relaxed mb-4'>
                Stay focused on your insights—we'll handle the compliance. Our expert solutions ensure your research practices meet every regulatory requirement with confidence and ease
            </p>
            <ul className='mt-5 space-y-3'>
                <li className='text-base md:text-lg flex items-start md:items-center'>
                    <TiTick className='bg-blue-500 text-white w-5 h-5 rounded-full mr-3 flex-shrink-0 mt-0.5 md:mt-0' />
                    <span>End-To-End Compliance Support</span>
                </li>
                <li className='text-base md:text-lg flex items-start md:items-center'>
                    <TiTick className='bg-blue-500 text-white w-5 h-5 rounded-full mr-3 flex-shrink-0 mt-0.5 md:mt-0' />
                    <span>Regulatory filings made simple</span>
                </li>
                <li className='text-base md:text-lg flex items-start md:items-center'>
                    <TiTick className='bg-blue-500 text-white w-5 h-5 rounded-full mr-3 flex-shrink-0 mt-0.5 md:mt-0' />
                    <span>Tailored solutions for independent analysts & firms</span>
                </li>
            </ul>
        </div>
    )
}

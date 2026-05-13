import React from 'react'
import Vector2 from '../assets/Vector2.png'

import Banner3 from './banner3'
import Box from './box'
import Regulatory_Clarity from "../assets/Regulatory_Clarity.png"
import Hassle_Free_Filings from "../assets/Hassle_Free_Filings.png"
import Risk_Protection from "../assets/Risk_Protection.png"
import '../App.css'


export default function banner2() {
    return (
        <div className='w-full min-h-screen mt-10 md:mt-20 bg-white px-4 md:px-8 lg:px-20 py-10 md:py-20'>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-start'>
                <div className='w-full lg:w-1/2'>
                    <h1 id="h1" className='capitalize font-roboto font-bold text-2xl md:text-3xl lg:text-4xl mb-6'>
                        Why <span className='text-[#0166FF]'>Compliance Matters</span> for Research Analysts
                    </h1>
                    <p id='p1' className=' mt-[-120px] relative left-150 text-base md:text-lg text-gray-700 leading-relaxed'>
                        In today's regulatory environment, even a small oversight can lead to penalties, reputational risks, and loss of client trust. We help Research Analysts and firms navigate complex compliance requirements so they can focus on delivering high-quality research without worry.
                    </p>
                </div>
                <div className='w-full lg:w-1/2 relative'>
                    <div id="fm" className='mb-8 md:mb-12'>
                        <Banner3 />
                    </div>
                    <div id="l" className='flex flex-col gap-4 md:gap-6'>
                        <div className='bg-[#f7f3f3] rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow'>
                            <Box img={Regulatory_Clarity} name={"Regulatory Clarity"} content={"We decode complex compliance rules into simple actionable steps"} />
                        </div>
                        <div className='bg-[#f7f3f3] rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow'>
                            <Box img={Hassle_Free_Filings} name={"Hassle-Free Filings Clarity"} content={"From registration to ongoing reporting—we manage it end-to-end."} />
                        </div>
                        <div className='bg-[#f7f3f3] rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow'>
                            <Box img={Risk_Protection} name={"Risk Protection"} content={"Stay ahead of audits, inspections, and compliance gaps with proactive support."} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

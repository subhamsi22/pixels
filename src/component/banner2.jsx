import React from 'react'
import Vector2 from '../assets/Vector2.png'

import Banner3 from './banner3'
import Box from './box'
import Regulatory_Clarity from "../assets/Regulatory_Clarity.png"
import Hassle_Free_Filings from "../assets/Hassle_Free_Filings.png"
import Risk_Protection from "../assets/Risk_Protection.png"



export default function banner2() {
    return (
        <div className=' w-screen h-150 mt-20 relative left-0 top-0 flex'>
            <h1 className='relative  capitalize font-roboto font-bold ml-40 text-3xl w-[44%] text-bold'> Why <span className='text-[#0166FF]'>Compliance Matters </span>  for Research Analysts</h1>
            <p className='ml-50 mt-[-10px] w-[70%]'>In today’s regulatory environment, even a small oversight can lead to penalties, reputational risks, and loss of client trust. We help Research Analysts and firms navigate complex compliance requirements so they can focus on delivering high-quality research without worry.</p>
            <img src={Vector2} alt="Vector2" className='relative left-[-62%] top-[15%] w-[20px] h-20 transform -translate-x-1/2 -translate-y-1/2' />
            <span className='absolute top-40 w-110 right-[55%] z-10'>
                <Banner3 />
            </span>
            <span className='mt-[150px] bg-[#f7f3f3] left-[55%] absolute h-[132px] w-[487px] rounded-xl '>
                <Box img={Regulatory_Clarity} name={"Regulatory Clarity"} content={"we decode complex compliance rules into simple actionable steps"} />

            </span>
            <span className='mt-[320px] bg-[#f7f3f3] left-[55%] absolute h-[132px] w-[487px] rounded-xl '>
                <Box img={Hassle_Free_Filings} name={"Hassle-Free Filings Clarity"} content={"From registration to ongoing reporting—we manage it end-to-end."} />

            </span>

            <span className='mt-[520px] bg-[#f7f3f3] left-[55%] absolute h-[132px] w-[487px] rounded-xl '>
                <Box img={Risk_Protection} name={"Risk Protection"} content={"Stay ahead of audits, inspections, and compliance gaps with proactive support."} />

            </span>



        </div>
    )
}

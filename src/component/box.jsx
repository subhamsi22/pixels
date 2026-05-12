import React from 'react'

export default function Box(props) {
    return (
        <div className=' h-[132px] w-[487px]  '>
            <img src={props.img} alt="" className='h-[30px] w-[32px] mt-8 ml-3' />
            <h1 className='flex w-130 ml-16 mt-[-6%] font-bold text-2xl' >{props.name}</h1>
            <br />
            <p className='  capitalize font-roboto font-medium text-base  ml-16 mt-[-4%]' >{props.content}</p>

        </div>
    )
}

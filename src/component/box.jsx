import React from 'react'

export default function Box(props) {
    return (
        <div className='flex gap-4 md:gap-6'>
            <img src={props.img} alt="" className='h-8 md:h-10 w-8 md:w-10 flex-shrink-0 mt-1' />
            <div className='flex-1'>
                <h1 className='font-bold text-lg md:text-xl mb-2'>{props.name}</h1>
                <p className='capitalize font-roboto font-medium text-sm md:text-base text-gray-700'>{props.content}</p>
            </div>
        </div>
    )
}

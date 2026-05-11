import React from 'react'
import logo from '../assets/logo.png'

export default function Nav() {
    return (
        <div>
            <nav className="  w-screen h-15">
                <ul className='flex ml-80  gap-10  text-black bold pt-4 '>
                    <img className='relative left-[-25%] w-25 ' src={logo} alt="" />
                    <li ><a className='text-blue-400' href="">Home</a></li>
                    <li><a href="">About us</a></li>
                    <li><a href="">our Services</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Contact </a></li>
                    <button className='bg-blue-400 text-white font-bold mt-[-8px] ml-30 w-40 h-10 rounded-2xl'>Contact Us</button>
                </ul>


            </nav>


        </div>
    )
}

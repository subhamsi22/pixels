import React, { useState } from 'react'
import logo from '../Assets/Logo.png'
import { HiMenu, HiX } from 'react-icons/hi'
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineTool, AiOutlineTag, AiOutlineQuestionCircle, AiOutlinePhone } from 'react-icons/ai'

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const menuItems = [
        { icon: <AiOutlineHome className='text-2xl' />, label: 'Home', href: '#' },
        { icon: <AiOutlineInfoCircle className='text-2xl' />, label: 'About Us', href: '#' },
        { icon: <AiOutlineTool className='text-2xl' />, label: 'Our Services', href: '#' },
        { icon: <AiOutlineTag className='text-2xl' />, label: 'Pricing', href: '#' },
        { icon: <AiOutlineQuestionCircle className='text-2xl' />, label: 'FAQ', href: '#' },
        { icon: <AiOutlinePhone className='text-2xl' />, label: 'Contact', href: '#' }
    ]

    return (
        <div>
            <nav className="w-full h-auto bg-white shadow-sm">
                <div className="flex items-center justify-between px-4 md:px-10 py-4">
                    {/* Logo */}
                    <img className='w-16 md:w-20' src={logo} alt="logo" />
                    
                    {/* Desktop Menu */}
                    <ul className='hidden md:flex gap-6 lg:gap-10 text-black font-semibold items-center'>
                        <li><a className='text-blue-400 hover:text-blue-600 transition' href="#">Home</a></li>
                        <li><a href="#" className='hover:text-blue-600 transition'>About us</a></li>
                        <li><a href="#" className='hover:text-blue-600 transition'>Our Services</a></li>
                        <li><a href="#" className='hover:text-blue-600 transition'>Pricing</a></li>
                        <li><a href="#" className='hover:text-blue-600 transition'>FAQ</a></li>
                        <li><a href="#" className='hover:text-blue-600 transition'>Contact</a></li>
                        <button className='bg-blue-400 text-white font-bold px-6 py-2 rounded-2xl hover:bg-blue-500 transition'>
                            Contact Us
                        </button>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-2xl text-blue-400 focus:outline-none"
                    >
                        {isOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 px-6 py-8">
                        <ul className='flex flex-col gap-8 text-black font-semibold'>
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className='flex items-center gap-4 hover:text-blue-600 transition group'>
                                        <span className='text-black group-hover:text-blue-600 transition'>
                                            {item.icon}
                                        </span>
                                        <span className='text-lg'>{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button className='w-full bg-blue-500 text-white font-bold px-6 py-3 rounded-2xl hover:bg-blue-600 transition mt-12 text-lg'>
                            Contact Us
                        </button>
                    </div>
                )}
            </nav>
        </div>
    )
}

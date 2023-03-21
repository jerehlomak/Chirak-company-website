import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'


import logo from '../assets/images/img/logo.png'
import Contact from './Contact/Contact'

const  navItems = [
    {
        name: 'Home',
        path: ''
    },
    {
        name: 'About',
        path: 'about'
    },
    {
        name: 'Projects',
        path: 'projects'
    },
    {
        name: 'Career',
        path: 'career'
    },
]

 
const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false) 
    const [contact, setContact] = useState(false)
    
    return (
    <div className=" md:px-12">
    <div className='flex justify-between pt-8 items-center px-8 md:px-0 lg:px-10'>
        <div className='cursor-pointer'>
            <Link to='/'><img src={logo} alt="logo" style={{width: '110px'}} /></Link>
        </div>
        <div className='block md:hidden text-white cursor-pointer'
            onClick={() => setShowNavbar(!showNavbar)}
        >
            <AiOutlineMenu size={24}/>
        </div>
        <div className='hidden md:flex gap-8 items-center font-alice font-semibold text-xl text-white'>
            {navItems.map((navItem, index) => (
                <NavLink key={index} to={`/${navItem.path}`}>
                    {navItem.name}
                </NavLink>
            ))}
            <p className='cursor-pointer' onClick={() => setContact(true)}>Contact</p>
        </div>
        {showNavbar && (
            <div className=''>
                <div className='fixed top-0 left-0 w-[100%] h-[100vh] bg-white transition duration-1000 ease-in flex flex-col z-10 p-4'>
                    <span onClick={() => setShowNavbar(false)}>
                        <FaTimes size={28} className='absolute top-[44px] right-[30px] text-black cursor-pointer'  />
                    </span>
                    <div onClick={() => setShowNavbar(false)} className='flex flex-col m-2 cursor-pointer uppercase font-alice text-center text-[2rem] mt-20'>
                        <Link to='/' >
                            Home
                        </Link>
                        <Link to='/about'>
                            About
                        </Link>
                        <Link to='/projects'>
                            Projects
                        </Link>
                        <span onClick={() => setContact(true)}>Contact</span>
                        <Link to='/career'>
                            Career
                        </Link>
                        {/* <span onClick={() => setContact(true)}>Contact</span> */}

                    </div>
                </div>
            </div>
        )}
    </div>
            {contact && <Contact setContact={setContact} />}
    </div>
  )
}

export default Header
import React, {useState} from 'react'
import logo from '../../assets/images/img/logo.png'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Contact from '../Contact/Contact'


const Footer = () => {
    const [showNavbar, setShowNavbar] = useState(false) 
    const [contact, setContact] = useState(false)
    const social = 'p-1.5 text-center rounded-full cursor-pointer'
  return (
    <div className='container mx-auto pb-16 lg:px-10 justify-center items-center'>

        <div className='w-full relative'>
            <div className='inset-0 -top-14 border-t border-[#fff]/50 w-[80%] mx-auto'  />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-white font-alice my-10 px-6 md:px-0 justify-start'>
                <div className='block space-y-6'>
                    <Link to='/'><img className='h-10 ' src={logo} alt="" /></Link>
                    <p className='text-white/70 w-[70%]'>
                        Creating a leverage system 
                        in all profession of life,
                        transforming human mind 
                        with creative innovations.
                    </p>
                </div>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-2xl'>Quick Links</h1>
                    <div className='flex flex-col space-y-2 text-white/70'>
                        <a href='/'>Home</a>
                        <Link to='/about'>About</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/career'>Careers</Link>
                    </div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-2xl'>Contact</h1>
                    <div className='flex flex-col space-y-2 text-white/70'>
                        <span onClick={() => setContact(true)} >
                            <a 
                                href="#."
                                >Contact</a>
                            <a style={{display: 'block'}} href="/career">Careers</a>
                        </span>
                        
                        <a href="#.">FAQs</a>
                        <a href="#.">Terms of Service</a>
                    </div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-2xl'>Social Media</h1>
                    <div className='flex gap-4 items-center'>
                        <span className={`bg-[#1877F2] ${social}`} >
                            <a target="_blank" href="https://www.facebook.com/chirakprojects" rel="noopener noreferrer">
                                <BsFacebook  className='text-white/70' size={21}/>
                            </a>
                        </span>
                        <span className={`bg-[#1DA1F2] ${social}`} >
                            <a target="_blank" href="https://twitter.com/ChirakProjects" rel="noopener noreferrer">
                                <BsTwitter className='text-white/70' size={21}/>
                            </a>
                        </span>
                        <span className={`bg-[#2867B2] ${social}`} >
                            <a target="_blank" href="https://www.linkedin.com/in/chirakprojects/" rel="noopener noreferrer">
                                <FaLinkedinIn className='text-white/7-' size={21}/>    
                            </a>                          
                        </span>
                        <span className={`bg-[#F00073] ${social}`} >
                            <a target="_blank" href="https://www.instagram.com/chirakprojects/" rel="noopener noreferrer">
                                <BsInstagram className='text-white/70' size={21}/>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div className='text-lg font-alice text-white/80 mt-10'>
                <p className='text-center'>All rights reserved @ chirakprojects.com</p>
            </div>
        </div>
        {contact && <Contact setContact={setContact} />}
    </div>
  )
}

export default Footer
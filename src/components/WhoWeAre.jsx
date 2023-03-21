import React, { useState } from 'react'
import login from '../assets/images/img/login.png'
import Contact from './Contact/Contact'

const WhoWeAre = () => {
    const [contact, setContact] = useState(false)
  return (
    <div className='w-full bg-[#BBB6F9]/30 py-20'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
            <div className='relative flex flex-col h-[80%] items-center justify-center'>
                <div className='relative'>
                    <div className='absolute -top-5 -left-24 md:-top-10 md:-left-40 rounded-full w-10 h-10 border-2 border-[#139EB1]'/>
                    <div className='absolute top-0 -left-40 md:top-0 md:-left-52 rounded-full w-10 h-10 bg-[#123057]'/>
                    <div className='absolute top-12 -left-44 rounded-full w-10 h-10 border-2 border-[#139EB1]'/>
                </div>

                <img className='h-full' src={login} alt="" />

                <div className='relative'>
                    <div className='absolute bottom-0 -right-28 md:bottom-4 md:-right-44 rounded-full w-8 h-8 bg-[#139EB1]'/>
                    <div className='absolute bottom-3 -right-40 md:bottom-3 md:-right-56 rounded-full w-8 h-8 bg-[#139EB1]'/>
                    <div className='absolute -bottom-10 -right-40 md:-bottom-10 md:-right-48 rounded-full w-10 h-10 bg-[#123057]'/>
                </div>
            </div>
            <div className='w-full flex flex-col items-center justify-center md:items-start md:justify-start p-8 space-y-4 font-alice xl:w-[70%]'>
                <h2 className='text-black text-xl'>Chirak Project Unlimited</h2>
                <h1 className='text-3xl text-black font-semibold'>Who We Are</h1>
                <p className='leading-6 text-sm w-full  md:text-start'>We are creating a stable and respected business and 
                    investment group, which will
                    maintain a strong 
                    position in the Professional markets across the globe.
                </p>
                <button className='w-[70%] md:w-[40%] text-white uppercase rounded-full py-2 px-3 bg-[#139EB1]'
                    onClick={() => setContact(true)}
                >
                    let's talk
                </button>
            </div>
            
        </div>

        {contact &&  <Contact setContact={setContact} />}
    </div>
  )
}

export default WhoWeAre
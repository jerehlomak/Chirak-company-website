import React from 'react'
// import { HiOutlineCode } from 'react-icons/hi'
// import { FaDesktop } from 'react-icons/fa'
import { FaHeadset } from 'react-icons/fa'
import { FaUserGraduate } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";



import star from '../assets/images/img/Vector-star.png'
import diamond from '../assets/images/img/Vector-diamond.png'
import circle from '../assets/images/img/Vector-circle.png'
import angle from '../assets/images/img/Vector-angle.png'



const Shapes = () => {
    return (
        <>
            <div className='relative w-3 h-3 sm:hidden'>
                <img src={star} alt="star" className='absolute top-5 left-[16rem] h-3 w-3' />
                <img src={diamond} alt="diamond" className='absolute top-4 left-[9rem] h-3 w-3' />
                <img src={circle} alt="circle" className='absolute -top-0 left-[14rem] h-3 w-3' />
                <img src={angle} alt="angle" className='absolute -top-0 left-[11rem] h-3 w-3' />
            </div>
        </>
    )
}

const About = () => {
    
  return (
    <div className='relative flex flex-col items-center justify-center py-16 bg-[#BBB6F9]/20 md:mt-0'>
        <h1 className='text-4xl text-black/70 font-semibold font-alice pb-1'>
            What We Do
        </h1>
        <div className='border-b-2 w-14 border-[#10A8E9]' />
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 justify-center items-center  gap-y-20'>
            <div className='relative flex flex-col space-y-2'>
                <Shapes />
                <div className='p-8 rounded-full text-white bg-gradient-to-t from-[#575408]/50 to-[#A99B1D]/50 shadow-lg place-self-center'>
                    <FaUserGraduate size={32} className='font-semibold' />
                </div>
                <h2 className='text-black/80 text-center font-alice font-medium text-2xl'>
                Education
                </h2>
                <p className='text-black text-center font-alice w-[50%] place-self-center'>
                At CHIRAK, We've set up and are constantly upgrading a platform that will bring students together regardless of distance to learn whatever it is they desire to learn from well trained, certified and qualified tutors. 
                </p>
            </div>

            <div className='relative flex flex-col space-y-2'>
                <Shapes />
                <div className='p-8 rounded-full text-white bg-gradient-to-t from-[#022396]/50 to-[#200DFF]/50 shadow-lg place-self-center'>
                    <FaCity size={32} className='font-semibold' />
                </div>
                <h2 className='text-black/80 text-center font-alice font-medium text-2xl'>
                Estate Development
                </h2>
                <p className='text-black text-center font-alice w-[50%] place-self-center'>
                Our services encompasses activities that range from the renovation and re-lease of existing buildings to the purchase of raw land and the sale of developed land or parcels to others.
                </p>
            </div>

            <div className='relative flex flex-col space-y-2'>
                <Shapes />
                <div className='p-8 rounded-full text-white bg-gradient-to-t from-[#EF89FF]/50 to-[#DC08FF]/50 shadow-lg place-self-center'>
                    <FaFileInvoice size={32} className='font-semibold' />
                </div>
                <h2 className='text-black/80 text-center font-alice font-medium text-2xl'>
                Project Management
                </h2>
                <p className='text-black text-center font-alice w-[50%] place-self-center'>
                We have the skills, knowledge and expertise to achieve your specific project objectives.
                </p>
            </div>

            <div className='relative flex flex-col space-y-2'>
                <Shapes />
                <div className='p-8 rounded-full text-white bg-gradient-to-t from-[#00FFFF]/50 to-[#007878]/50 shadow-lg place-self-center'>
                    <FaMoneyCheck size={32} className='font-semibold' />
                </div>
                <h2 className='text-black/80 text-center font-alice font-medium text-2xl'>
                Finance
                </h2>
                <p className='text-black text-center font-alice w-[50%] place-self-center'>
                The desire of gold is not for gold. It is for the means of freedom and benefit.”
We have financial professionals that can guide you into successfully figuring out and achieving your financial goal.
                </p>
            </div>

            <div className='relative flex flex-col space-y-2'>
                <Shapes />
                <div className='p-8 rounded-full text-white bg-gradient-to-t from-[#FFAF96]/50 to-[#FF0808]/50 shadow-lg place-self-center'>
                    <FaLayerGroup size={32} className='font-semibold' />
                </div>
                <h2 className='text-black/80 text-center font-alice font-medium text-2xl'>
                Resource management
                </h2>

                <p className='text-black text-center font-alice w-[50%] place-self-center'>
                We aim at the efficient and effective development of resources when they are needed. Such as financial resources, inventory, human skills, production resources, or information technology and natural resources.
                </p>
            </div>
            <div className='relative flex flex-col space-y-2'>
                <Shapes />
                <div className='p-8 rounded-full text-white bg-gradient-to-t from-[#00D1FF]/20 to-[#4C25E9]/50 shadow-lg place-self-center'>
                    <FaHeadset size={32} className='font-semibold' />
                </div>
                <h2 className='text-black/80 text-center font-alice font-medium text-2xl'>
                Consulting
                </h2>
                <p className='text-black text-center font-alice w-[50%] place-self-center'>
                We provide consulting services to organizations to improve their performance or in any way to assist in achieving any sort of organizational objectives.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
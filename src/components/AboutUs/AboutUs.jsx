import React from 'react'
import Banner from '../Banner/Banner'
import oilVector from '../../assets/images/img/vectors/oilVector.png'
import trans from '../../assets/images/img/vectors/trans.png'
import house from '../../assets/images/img/vectors/house.png'
import gradge from '../../assets/images/img/vectors/gradge.png'
import gradge2 from '../../assets/images/img/vectors/gradge2.png'
import tech from '../../assets/images/img/vectors/tech.png'
import agric from '../../assets/images/img/vectors/agric.png'

import macbook from '../../assets/images/img/macbook.png'

import { GiOnTarget } from 'react-icons/gi'
import { FaEye } from 'react-icons/fa'
import MainFooter from '../MainFooter/MainFooter'


const AboutUs = () => {
  return (
    <div className='about-us'>
        <Banner title1='About Chirak' title2='Chirak Group of Companies' />

        <div className='md:flex justify-center gap-6 mt-10 font-alice'>
            <div className='flex flex-col items-center justify-center space-y-4'>
                <div className='py-4 px-14 bg-white rounded-md shadow-lg'>
                    <span>
                        <img className='px-4' src={oilVector} alt="" />
                    </span>
                    <h2 className='text-lg text-center text-[#FFAE41] font-semibold'>Oil and Gas</h2>
                </div>
                <div className='py-4 px-12 bg-white rounded-md shadow-lg'>
                    <span>
                        <img className='px-4' src={trans} alt="" />
                    </span>
                    <h2 className='text-lg text-center text-[#D3AB3C] font-semibold'>Transportation</h2>
                </div>
            </div>
            <div className='flex flex-col items-center space-y-4 mt-4 md:mt-0'>
                <div className='py-4 px-14 bg-white rounded-md shadow-lg'>
                    <span>
                        <img className='px-4' src={agric} alt="" />
                    </span>
                    <h2 className='text-lg text-center text-[#00A859] font-semibold'>Agriculture</h2>
                </div>
                <div className='py-4 px-14 bg-white rounded-md shadow-lg'>
                    <span>
                        <img className='px-4' src={tech} alt="" />
                    </span>
                    <h2 className='text-lg text-center text-[#00AFEF] font-semibold'>Technology</h2>
                </div>
                <div className='py-4 px-14 bg-white rounded-md shadow-lg'>
                    <span>
                        <img className='px-4' src={gradge} alt="" />
                    </span>
                    <h2 className='text-lg text-center text-[#CE101D] font-semibold'>Chirak Institute</h2>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center space-y-4 mt-4 md:mt-0'>
                <div className='py-4 px-14 bg-white rounded-md shadow-lg'>
                    <span>
                        <img className='px-4' src={house} alt="" />
                    </span>
                    <h2 className='text-lg text-center text-[#0014F2] font-semibold'>Real Estate</h2>
                </div>
                <div className='py-4 px-14 bg-white rounded-md shadow-lg'>
                    <span>
                        <img className='px-4' src={gradge2} alt="" />
                    </span>
                    <h2  className='text-lg text-center text-[#EF772C] font-semibold'>Education</h2>
                </div>
            </div>
        </div>

        <div className='flex mt-20 py-20 items-center justify-center font-alice bg-[#EDEFF5]'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='max-w-[20rem] flex flex-col items-center shadow-xl bg-white rounded-t-2xl '>
                    <div className='w-full bg-[#090F9C] px-6 py-16 rounded-t-2xl items-center shadow-xl'>
                        <span className='flex items-center justify-center'>
                            <GiOnTarget className='text-white' size={48} />
                        </span>
                    </div>
                    <div className=' px-6 w-full py-14 space-y-4'>
                        <h2 className='uppercase text-xl font-semibold'>Mission</h2>
                        <p className='text-sm leading-6 tracking-wider'>
                        To enable economic growth through our diversified portfolio and to provide solutions that support communities and protect the planet.
At the same time, maintaining profitable growth through superior customer service, unlimited innovations, quality delivery and commitment.
                        </p>
                    </div>
                </div>

                <div className='max-w-[20rem] flex flex-col items-center shadow-xl bg-white rounded-t-2xl'>
                    <div className='w-full bg-[#090F9C] px-6 py-16 rounded-t-2xl items-center shadow-xl'>
                        <span className='flex items-center justify-center'>
                            <FaEye className='text-white' size={48} />
                        </span>
                    </div>
                    <div className=' px-6 w-full py-14 space-y-4'>
                        <h2 className='uppercase text-xl font-semibold'>Vision</h2>
                        <p className='text-sm leading-6 tracking-wider'>
                            Creating a leverage system in all profession of life, transforming human mind with creative innovations.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col bg-[#BBB6F9]/20  py-20 items-center justify-center font-alice'>
            <h1 className='text-black text-center font-bold text-3xl'>Goals</h1>
            <div className='border-b-2 w-20 border-[#10A8E9]' />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-20'>
                <div className='w-[20rem] flex flex-col space-y-4'>
                    <div className='flex space-x-4 items-center'>
                        <div className='h-4 w-4 bg-black rounded-full'/>
                        <h2 className='text-xl font-bold'>Innovation</h2>
                    </div>
                    <div className='flex space-x-4 items-center'>
                        <div className='h-4 w-4 bg-black rounded-full'/>
                        <h2 className='text-xl font-bold'>Employments</h2>
                    </div>
                    <div className='flex space-x-4 items-center'>
                        <div className='h-4 w-4 bg-black rounded-full'/>
                        <h2 className='text-xl font-bold'>Social Responsibility</h2>
                    </div>
                    <div className='flex space-x-4 items-center'>
                        <div className='h-4 w-4 bg-black rounded-full'/>
                        <h2 className='text-xl font-bold'>Growth</h2>
                    </div>
                    <div className='flex space-x-4 items-center'>
                        <div className='h-4 w-4 bg-black rounded-full'/>
                        <h2 className='text-xl font-bold'>Productivity</h2>
                    </div>
                </div>

                <div className='h-[15rem] w-[20rem] mt-10 md:mt-0'>
                    <img className='h-full w-full' src={macbook} alt="" />
                </div>
            </div>
        </div>

        <MainFooter color='bg-[#BBB6F9]/20' />
    </div>
  )
}

export default AboutUs
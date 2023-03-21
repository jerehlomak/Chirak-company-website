import React from 'react'
import Banner from './Banner/Banner'
import MainFooter from './MainFooter/MainFooter'
import comingsoon from '../assets/images/img/comingsoon.jpg'

const Career = () => {
  return (
    <div className='max-h-screen w-[100%] justify-center items-center'>
        <div className='h-screen'>
          <img className='w-full h-full' src={comingsoon} alt="" />
        </div>
        {/* <Banner title1='Career Page' title2='' /> */}
        {/* <h1 className='text-3xl text-black'>Coming Soon</h1> */}
        {/* <MainFooter color='bg-[#BBB6F9]/20' /> */}
    </div>
  )
}

export default Career
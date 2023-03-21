import React, { useState } from 'react'
import Header from '../Header'

// import { BsSearch } from 'react-icons/bs'

import { BlogDetailsData } from './BlogDetailsData'
import MainFooter from '../MainFooter/MainFooter'
import BlogHeader from './BlogHeader'
import BlogFooter from './BlogFooter'

const BlogDetails = ({ heading }) => {
    const [blogDetails, ] = useState(BlogDetailsData)

  return (
    <div className='bg-[#BBB6F9]/20'>
        <div id='banner1' className='banner w-full'>
            <Header />

            <div className='flex flex-col items-center justify-center font-alice gap-8 py-10 px-2'>
                <h2 className='capitalize text-center text-white text-3xl font-bold leading-10'>
                    12 Top Digital Marketing Strategies For Your Business In Nigeria
                </h2>
                <p className='text-white/80 text-sm text-center'>
                    Home | 8 Top Digital Marketing Strategies For Your Business In Nigeria
                </p>
                <div className='flex h-10 w-full md:w-[30vw] text-center mb-20 px-4'>
                    <input className='w-full h-full px-6 py-4 rounded-l-lg outline-none' type="text" placeholder={` Search here`} />
                    <button className='h-full text-white bg-[#3F1E85] rounded-r-lg px-4 py-2 text-center'>
                        Search
                    </button>
                </div>
            </div>
        </div>

        <div className='w-full flex flex-wrap md:flex-nowrap md:py-16 px-8 md:px-20 gap-8'>
            <div className='w-full md:w-2/3 font-alice'>
                <BlogHeader blogDetails={blogDetails} />
            </div>

            <div className='w-full md:w-1/3 font-alice'>
                <BlogFooter blogDetails={blogDetails} />
            </div>
        </div>

        <MainFooter />
    </div>
  )
}

export default BlogDetails
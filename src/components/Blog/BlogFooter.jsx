import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const BlogFooter = ({ blogDetails }) => {
    const social = 'p-1.5 text-center rounded-full cursor-pointer'
    
  return (
    <div className='w-full flex flex-col items-start justify-start'>
        <div className='flex flex-col relative'>
            <h1 className='text-3xl'>Recent Posts</h1>
            <div className='absolute border-b-2 w-20 border-[#10A8E9] inset-0 ml-10' />
        </div>
        <div className='flex flex-col space-y-2 mt-4'>
            {blogDetails.posts.map((post, index) => (
                <p key={index} className='text-lg font-bold'>
                    {post}
                </p>
            ))}
        </div>
        <div className='flex flex-col mt-4'>
            <div className='flex flex-col relative'>
                <h1 className='text-3xl'>Recent Comments</h1>
                <div className='absolute border-b-2 w-20 border-[#10A8E9] inset-0 ml-20' />
            </div>
            <div className='flex flex-col space-y-2 mt-4 justify-start items-start'>
                {blogDetails.comments.map((comment, index) => (
                    <p key={index} className='text-lg font-bold'>
                        {comment}
                    </p>
                ))}
            </div>
        </div>

        <div className='flex flex-col mt-4'>
        <div className='flex flex-col relative'>
            <h1 className='text-3xl'>Categories</h1>
            <div className='absolute border-b-2 w-20 border-[#10A8E9] inset-0 ml-10' />
        </div>
            <div className='flex flex-wrap gap-6 mt-4 justify-start items-center'>
                {blogDetails.categories.map((category, index) => (
                    <div key={index} className='flex gap-3 items-center justify-center'>
                        <div className='h-3 w-3 bg-[#3913B8] rounded-full'/>
                        <p className='font-semibold'>{category}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className='flex flex-col mt-4'>
        <div className='flex flex-col relative'>
            <h1 className='text-3xl'>Popular Tags</h1>
            <div className='absolute border-b-2 w-20 border-[#10A8E9] inset-0 ml-10' />
        </div>
            <div className='flex flex-wrap gap-6 mt-4 justify-start items-start'>
                {blogDetails.populars.map((popular, index) => (
                    <div key={index} className='flex gap-3 items-center justify-center'>
                        <div className='h-3 w-3 bg-[#3913B8] rounded-full'/>
                        <p className='font-semibold'>{popular}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className='flex flex-col mt-4'>
        <div className='flex flex-col relative'>
            <h1 className='text-3xl'>Share This</h1>
            <div className='absolute border-b-2 w-20 border-[#10A8E9] inset-0 ml-8' />
        </div>
            <div className='flex gap-4 items-center mt-4'>
                <span className={`bg-[#1877F2] ${social}`} >
                    <BsFacebook className='text-white' size={21}/>
                </span>
                <span className={`bg-[#1DA1F2] ${social}`} >
                    <BsTwitter className='text-white' size={21}/>
                </span>
                <span className={`bg-[#2867B2] ${social}`} >
                    <FaLinkedinIn className='text-white' size={21}/>
                </span>
                <span className={`bg-[#F00073] ${social}`} >
                    <BsInstagram className='text-white' size={21}/>
                </span>
            </div>
        </div>

        <div className='flex flex-col mt-4'>
        <div className='flex flex-col relative'>
            <h1 className='text-3xl'>Authur</h1>
            <div className='absolute border-b-2 w-20 border-[#10A8E9] inset-0 ml-1' />
        </div>

            <div className='mt-4 flex gap-4'>
                <div className='h-16 w-16'>
                    <img className='w-full h-full rounded-full' src={blogDetails.comment.profile} alt="profile" />
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-lg text-black font-semibold'>{blogDetails.author.name}</p>
                    <p className='text-sm'>{blogDetails.author.timestamp}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogFooter
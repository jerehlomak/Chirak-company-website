import React from 'react'

const BlogHeader = ({ blogDetails }) => {
  return (
    <div className='w-full flex flex-col space-y-4'>
        <div className='w-full h-[12rem] md:h-[18rem]'>
            <img src={blogDetails.blog.imgUrl} alt="blog img" className='w-full h-full object-contain md:object-none' />
        </div>
        <p className='text-sm text-black'>
            {blogDetails.blog.details1}
        </p>
        <h1 className='text-3xl mt-4' >
            {blogDetails.blog.heading}
        </h1>
        <p className='text-sm text-black'>
            {blogDetails.blog.details2}
        </p>

        <div className='flex flex-col'>
            <div className='flex flex-col'>
                <div className='flex flex-col relative'>
                    <h1 className='text-2xl'>{blogDetails.comment.comment.length} Comment</h1>
                    <div className='absolute border-b-2 w-20 border-[#10A8E9] inset-0 ml-5 ' />
                </div>

                <div className='flex gap-4 mt-4'>
                    <div className='h-10 w-10'>
                        <img className='w-full h-full rounded-full' src={blogDetails.comment.profile} alt="profile" />
                    </div>
                    <div className='flex flex-col w-full md:w-[70%] bg-[#CCD0FC]/20 rounded-lg p-4 gap-2'>
                        <p className='font-semibold'>
                            {blogDetails.comment.name}
                        </p>
                        <p>
                            {blogDetails.comment.comment}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col'>
            <div className='flex flex-col'>
                <div className='flex flex-col relative'>
                    <h1 className='text-2xl'>Leave a Reply</h1>
                    <div className='absolute border-b-2 w-20 border-[#10A8E9] inset-0 ml-5' />
                </div>
                <p className='w-full md:w-[70%] text-sm mt-3'>Your email address will not be published. Required fields are marked *</p>
            </div>
            <form className='mt-4 w-full md:w-[70%] space-y-3'>
                <div className=''>
                    <textarea 
                        type="text" 
                        required
                        placeholder='Comment *'
                        className='w-full h-full outline-none rounded-lg bg-[#CCD0FC]/20 py-4 px-2'
                    >
                    </textarea>
                </div>
                <div className=''>
                    <input
                        type="text" 
                        required
                        placeholder='Name *'
                        className='w-full h-full outline-none rounded-lg bg-[#CCD0FC]/20 py-4 px-2'
                    />
                </div>
                <div className=''>
                    <input
                        type="email" 
                        required
                        placeholder='Email *'
                        className='w-full h-full outline-none rounded-lg bg-[#CCD0FC]/20 py-4 px-2'
                    />
                </div>
                <button className='bg-[#090F9C] text-white/80 py-2 px-4 rounded-full text-sm'>Post Comment</button>
            </form>
        </div>
    </div>
  )
}

export default BlogHeader
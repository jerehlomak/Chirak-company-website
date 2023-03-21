import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const News = ({ email, formData, setFormData, handleSubmit }) => {
  return (
    <>
        <div className='font-alice space-y-3'>
            <h1 className='text-3xl text-white tracking-widest text-center'>
                Newsletter
            </h1>
            <p className='text-sm text-white text-center'>
                Be the first to get our update!
            </p>
            <div className='flex h-10 w-full md:w-[30vw] text-center'>
                <input 
                    className='w-full px-6 py-4 rounded-l-lg outline-none' 
                    type="text" 
                    placeholder='Your email' 
                    name='email'
                    value={email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value }) } 
                />
                <button 
                    className='text-white bg-[#3F1E85] rounded-r-lg px-4 py-3'
                    onClick={handleSubmit}
                >
                    <FaPaperPlane />
                </button>
            </div>
        </div>
    </>
  )
}

export default News
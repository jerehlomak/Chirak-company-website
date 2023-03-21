import React, { useState } from 'react'
import programming2 from '../../assets/images/img/programming2.png'
import { useDispatch } from 'react-redux'

import { postSubscription } from '../../store/features/Subscription'
import News from './News'

const NewsLetter = () => {
    const [formData, setFormData] = useState({
        email: ''
    })

    const { email } = formData
    console.log(formData)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const userEmail = { email }
        console.log(userEmail)
        dispatch(postSubscription(userEmail))
        setFormData({
            email: ''
        })
    }
  return (
    <div className='relative w-full flex flex-col items-center justify-center py-16'>
        <div className='container mx-auto'>
            <div className='flex-auto w-[70%] mx-auto bg-white rounded-3xl px-8 pb-10 md:py-4 items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
                    <div className='h-[100%] w-[100%]'>
                        <img className='h-full w-full' src={programming2} alt="code" />
                    </div>
                    <div className='flex flex-col gap-4 font-alice'>
                        <h1 className='text-xl md:text-3xl text-black'>CHIRAK ARCHITECTURE</h1>
                        <p className='w-full md:w-[80%]'>
                            CHIRAK is design to expand to other countries and 
                            continents within a short period of time. In the individual 
                            countries, CHIRAK PROJECTS does business in industries 
                            such as: Real Estate Industry, Technology, Education, 
                            Agriculture Activities, Oil & Gas, Import & Export.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center mt-16'>
                <News 
                    email={email} 
                    setFormData={setFormData}
                    formData={formData}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    </div>
  )
}

export default NewsLetter
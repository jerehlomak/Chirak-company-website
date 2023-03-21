import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import ReCAPTCHA from 'react-google-recaptcha'
import { useDispatch, useSelector } from 'react-redux'
import { postContact } from '../../store/features/Contact'

const Contact = ({ setContact }) => {
    const [isVerified, setIsVerified] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        msg: '',
    })

    const dispatch = useDispatch()
    const loading = useSelector(state => state.contact.loading)
    console.log(loading)

    const { name, email, subject, msg } = formData

    const handleChange = (value) => {
        console.log("Captcha value:", value)
        if (value) {
            setIsVerified(true)
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        const post = { name, email, subject, msg }
        dispatch(postContact(post))
        // setContact(false)
        setFormData({
            name: '',
            email: '',
            subject: '',
            msg: '',
        })
    }

  return (
    <div className='bg-black/70 opacity-95 fixed inset-0 z-50   '>
        <div className='flex h-screen justify-center items-center '>
            <div className='flex flex-col p-8 bg-white h-[85vh] md:h-[90vh] w-[85%] md:w-[60%] z-10 rounded-lg shadow-lg font-alice'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl'>Let's Talk!</h1>
                    <FaTimes className='cursor-pointer' size={28} onClick={() => setContact(false)} />
                </div>
                <p className='w-full md:w-[80%] text-sm mt-5 text-[#5f5d5d]'>How can we help? Send  us a message today! How can we help? Send  us a message today! How can 
                    we help? Send  us a message today!
                </p>
                <form >
                    <div className='py-7 px-4 md:px-12'>
                        <div className='w-[100%] md:w-[80%]'>
                            <input 
                                className='border-b-2 border-[#E4E4E4] px-3 text-[#5f5d5d] outline-none w-full'
                                type="text" 
                                placeholder='Name*' 
                                required 
                                name='name'
                                value={name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className='w-[100%] md:w-[80%] mt-5'>
                            <input 
                                className='border-b-2 border-[#E4E4E4] px-3 text-[#5f5d5d] outline-none w-full'
                                type="email" 
                                placeholder='Email*' 
                                required 
                                name='email'
                                value={email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className='w-[100%] md:w-[80%] mt-5'>
                            <input 
                                className='border-b-2 border-[#E4E4E4] px-3 text-[#5f5d5d] outline-none w-full'
                                type="text" 
                                placeholder='Subject*' 
                                required 
                                name='subject'
                                value={subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            />
                        </div>
                        <div className='w-[100%] md:w-[80%] mt-5'>
                            <textarea 
                                className='border-b-2 border-[#E4E4E4] px-3 text-[#5f5d5d] outline-none w-full'
                                placeholder='Message*'
                                required
                                name='msg'
                                value={msg}
                                onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                            >    
                            </textarea>
                        </div>
                        <div className='flex flex-col w-full md:w-[60%] justify-center items-center mt-5'>
                            <div className=''>
                                <ReCAPTCHA
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                    onChange={handleChange}
                                    className='w-full place-self-center'
                                />
                            </div>
                            <button
                                onClick={handleSubmit}
                                disabled={!isVerified}
                                className='w-[70%] text-xs md:text-sm my-5 mb-5 px-2 md:px-4 py-2 rounded-full text-white bg-[#090F9C] uppercase'
                            >{loading ? 'Request Sent' : 'Send A Request' }</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
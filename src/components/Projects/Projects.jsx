import React from 'react'
import { Link } from 'react-router-dom'

import project1 from '../../assets/images/img/project1.jpg'
import student from '../../assets/images/img/student.png'
import dashboard from '../../assets/images/img/dashboard.png'
import onboarding from '../../assets/images/img/onboarding.png'


const Projects = () => {
  return (
    <div className='relative w-full flex flex-col items-center justify-center py-16 bg-[#DEE9FF]/30'>
        <div className='flex items-center'>
            <h1 className='text-4xl text-black/70 font-semibold font-alice pb-1'>
                Latest Projects
            </h1>
        </div>
        <p className='absolute right-2 md:right-20 lg:right-40 top-20 text-xs sm:text-sm cursor-pointer font-semibold font-alice'><Link to='/projects'>View All</Link></p>
        <div className='border-b-2 w-14 border-[#10A8E9]' />
        
        <div className='flex flex-col justify-center items-center gap-20 md:gap-10 mt-8'>
            <div className="container w-100 lg:w-4/5 mx-auto flex flex-col px-4 md:px-0 space-y-14">
                <div className="w-full flex flex-col md:flex-row overflow-hidden rounded-lg shadow-xl mt-4 w-100 mx-2 text-white font-alice">
                    <div className="md:h-96 w-auto md:w-1/2">
                        <img alt="prjt-one" className="inset-0 h-full w-full object-cover object-center" src={project1} />
                    </div>
                    <div className="w-auto md:w-1/2 py-6 px-6 flex flex-col justify-center space-y-7 text-center bg-[#090F9C]">
                        <h1 className=' font-medium text-xl md:text-3xl'>Oil and Gas</h1>
                        <p className=''>Oil and natural gas are major industries in the energy market and play an influential role in the global economy as the world's primary fuel sources. The processes and systems involved in producing and distributing oil and gas are highly complex, capital-intensive, and require state-of-the-art technology. With the support of our stakeholders we plan to further Upstream, consorting with other exploration and production (E&P) companies, to find reservoirs and drill oil and gas wells. Chirak will be the Midstream company  responsible for transportation from the wells to refineries and also the downstream company responsible for refining and the sale of the finished products.
Our customers and partners can rest, assured that we are fully committed to not only getting the job accomplished but exceeding expectations in our every endeavor.
Through this, We are empowering and creating shared value by investing and growing the communities in which we live and work.</p>
                        <button className='py-2 px-6 place-self-center rounded-full text-[#3F1E85] bg-white font-semibold hover:shadow-xl transition duration-300'>Read more</button>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row-reverse overflow-hidden rounded-lg shadow-xl mt-4 w-100 mx-2 text-white font-alice">
                    <div className="flex md:h-96 w-auto md:w-1/2 bg-white justify-center items-center">
                        <img className='h-[80%] md:h-[80%]' src={student} alt="" />
                        <img className='h-[70%] md:h-[50%]' src={onboarding} alt="" />
                        <img className='hidden md:block h-[90%] md:h-[70%]' src={dashboard} alt="" />
                    </div>
                    <div className="w-auto md:w-1/2 py-6 px-6 flex flex-col justify-center space-y-7 text-center bg-[#090F9C]">
                        <h1 className=' font-medium text-xl md:text-3xl'>Quick Brown Fox</h1>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos qui perspiciatis aspernatur sed beatae recusandae. Velit amet neque tenetur at ipsa porro maxime fugiat aut quas repellendus optio, modi eius, laboriosam sapiente ea quidem!</p>
                        <button className='py-2 px-6 place-self-center rounded-full text-[#3F1E85] bg-white font-semibold hover:shadow-xl transition duration-300'>Read more</button>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row overflow-hidden rounded-lg shadow-xl mt-4 w-100 mx-2 text-white font-alice">
                        <div className="md:h-96 w-auto md:w-1/2">
                            <img alt="objt-two" className="inset-0 h-full w-full object-cover object-center" src={project1} />
                        </div>
                        <div className="w-auto md:w-1/2 py-6 px-6 flex flex-col justify-center space-y-7 text-center bg-[#090F9C]">
                            <h1 className=' font-medium text-xl md:text-3xl'>Quick Brown Fox</h1>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos qui perspiciatis aspernatur sed beatae recusandae. Velit amet neque tenetur at ipsa porro maxime fugiat aut quas repellendus optio, modi eius, laboriosam sapiente ea quidem!</p>
                            <button className='py-2 px-6 place-self-center rounded-full text-[#3F1E85] bg-white font-semibold hover:shadow-xl transition duration-300'>Read more</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Projects
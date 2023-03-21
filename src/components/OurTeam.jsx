import React from 'react'
import profile1 from '../assets/images/img/team4.jpg'
import profile2 from '../assets/images/img/team1.png'
import profile3 from '../assets/images/img/team3.jpg'
import profile4 from '../assets/images/img/team2.jpg'

const OurTeam = () => {
  return (
    <div className='w-full bg-[#10A8E9]/10 py-20 px-4 md:px-0'>
        <div className="container mx-auto">
            <div className='flex flex-col items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 space-x-10'>
                    <div className='flex flex-col space-y-6'>
                        <div className='bg-white py-2 px-4 rounded-full w-[80%] job_con'>
                            <strong  className="job_name ml-4"><span>Clement John</span></strong>
                            <span className="muted-desc">- Founder/CEO</span>
                            <p className='w-full ml-3 text-black text-sm font-alice  job_p p-4 md:p-2'>
                            An African business magnate, internet entrepreneur. He is known for founding the C-Classroom, Chirak Institute and its parent company Chirak of which he is the Founder, chief executive officer, and controlling shareholder. 
                            </p>
                        </div>
                        <div className='relative'>
                            <div className='absolute -top-4 left-5 w-4 h-4 bg-[#126683] rounded-full' />
                            <div className='absolute top-1 left-8 w-3 h-3 bg-[#139EB1] rounded-full' />
                        </div>
                        <div className='h-20 w-20 ml-10'>
                            <img className='w-full h-full rounded-full object-cover' src={profile2} alt="profile" />
                        </div>
                    </div>

                    <div className='flex flex-col space-y-6 items-end justify-end'>
                        <div className='bg-white py-2 px-4 rounded-full w-[80%] job_con'>
                            <strong  className="job_name ml-4"><span>Martha Adeleye</span></strong>
                            <span className="muted-desc">- Administrative Director</span>
                            <p className='w-full ml-3 text-black text-sm font-alice  job_p p-2'>
                            An Educationist, Content Creator and a Motivational Enthusiast who is passionate about Life Transformation, Relationship Building and management. She is Professionally certified in Customer Relationship and Management.
                            </p>
                        </div>
                        <div className='relative'>
                            <div className='absolute -top-4 right-10 w-4 h-4 bg-[#126683] rounded-full' />
                            <div className='absolute top-1 right-8 w-3 h-3 bg-[#139EB1] rounded-full' />
                        </div>
                        <div className='h-20 w-20 '>
                            <img className='w-full h-full rounded-full object-cover' src={profile1} alt="profile" />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center font-alice space-y-4 my-10'>
                    <h1 className='text-3xl'>Meet our Team</h1>
                    <p className='w-full md:w-[50%] text-center text-black font-alice '>Chirak Projects is creating a leverage system 
                        in all profession of life, transforming the human 
                        mind with creative trendy innovations.
                    </p>
                    <button className='py-2 px-6 uppercase bg-[#139EB1] rounded-full text-[#fff]'>let's talk</button>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 space-x-10'>
                    <div className='flex flex-col space-y-6'>
                        <div className='h-20 w-20'>
                            <img className='w-full h-full rounded-full object-cover' src={profile4} alt="profile" />
                        </div>
                        <div className='relative'>
                            <div className='absolute -top-4 left-5 w-4 h-4 bg-[#126683] rounded-full' />
                            <div className='absolute top-1 left-8 w-3 h-3 bg-[#139EB1] rounded-full' />
                        </div>  
                        <div className='bg-white py-2 px-4 rounded-full w-[80%] job_con'>
                            <strong  className="job_name ml-4"><span>Stephen Sunday Bobai</span></strong>
                            <span className="muted-desc">- Director of Business Development</span>
                            <p className='w-full ml-3 text-black text-sm font-alice job_p p-2'>
                            A self-motivated, organised, passion driven, accommodating, humble, peace loving and a people-oriented individual. He is a great opportunist, business oriented and takes delight in mentorship.  
                            </p>
                        </div>    
                    </div>

                    <div className='flex flex-col space-y-6 items-end justify-end'>
                        <div className='h-20 w-20 '>
                            <img className='w-full h-full rounded-full object-cover' src={profile3} alt="profile" />
                        </div>
                        <div className='relative'>
                            <div className='absolute -top-4 right-10 w-4 h-4 bg-[#126683] rounded-full' />
                            <div className='absolute top-1 right-8 w-3 h-3 bg-[#139EB1] rounded-full' />
                        </div>
                        <div className='bg-white py-2 px-4 rounded-full w-[80%] job_con'>
                            <strong  className="job_name ml-4"><span>Sunday Ishaya</span></strong>
                            <span className="muted-desc">- Technical Director</span>
                            <p className='w-full ml-3 text-black text-sm font-alice job_p p-2'>
                            Experienced Software Engineer adept in bringing forth expertise in design, development, installation, testing and maintenance of software systems. Proficient in various platforms, languages, and embedded systems.
                            </p>
                        </div> 
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default OurTeam
import React from 'react'
import Banner from '../Banner/Banner'
import MainFooter from '../MainFooter/MainFooter'
// import Projects from './Projects'

import project1 from '../../assets/images/img/project1.jpg'
import agric from '../../assets/images/img/agric.jpg'
import education from '../../assets/images/img/education.jpg'
import oilandgas from '../../assets/images/img/oilandgas2.jpg'
import realestate from '../../assets/images/img/realestate.avif'

const projects = [
    {
        title: 'Oil and Gas',
        display: 'flex-row',
        image: oilandgas,
        description: "Oil and natural gas are major industries in the energy market and play an influential role in the global economy as the world's primary fuel sources. The processes and systems involved in producing and distributing oil and gas are highly complex, capital-intensive, and require state-of-the-art technology. With the support of our stakeholders we plan to further Upstream, consorting with other exploration and production (E&P) companies, to find reservoirs and drill oil and gas wells."
    },
    {
        title: 'Agriculture',
        display: 'flex-row-reverse',
        image: agric,
        description: "When people think of agriculture, they often envision crop farming: soil and land preparation and sowing, fertilizing, irrigating, and harvesting different types of plants and vegetation. However at Chirak we believe that  agriculture also provides opportunities for economic equity and helps people prosper around the world. Agriculture remains the largest sector in Nigeria contributing an average of 24% to the nation's GDP over the past ten years (2013 – 2022). "
    },
    {
        title: 'Real Estate',
        display: 'flex-row',
        image: realestate,
        description: 'Our Real Estate project consists of land and improvements, which include buildings, fixtures, roads, structures, and utility systems. We are pros in the field of the land business, property the executives and new improvement promoting. Our customers incorporate people, private financial specialists, business elements, syndications, centers, and townhouses.'
    },
    // {
    //     title: 'Cryptocurrencies',
    //     display: 'flex-row-reverse',
    //     description: 'Cryptocurrencies are widely considered to be the most promising innovation that this generation has been trying to perfect in this economical frenzy of freedom. Well, for clarification, cryptocurrencies are designed to be digital assets protected by a strong cryptography and a mining algorithm that defines, controls and verifies the transactions happening on the time-stamped distributed ledger, usually known as blockchain.'
    // },
    {
        title: 'Chirak Institute',
        display: 'flex-row-reverse',
        image: education,
        description: "CHIRAK INSTITUTE is here to ensure a suitable E-Educational platform for as many who are willing to make a change in their world and be of utmost relevance to their society at large. We bring practical education down to the grass root even when using a technological means to enhance the educational system and live beyond poverty level. Chirak institute Offers 80% Skills and 20% professional courses using One C-Class to ensure 100% interactive session."
    },
]

const AllProjects = () => {
  return (
    <div className='bg-[#EDEFF5]'>
        <Banner title1='projects' title2='Latest Projects' />
        <div className='relative flex flex-col justify-center items-center my-10'>
            <div className="container w-100 lg:w-4/5 mx-auto flex flex-col px-4 lg:px-0 space-y-14">
                {projects.map((project, idx) => (
                    <div key={idx} className={`w-full flex flex-col md:${project.display} overflow-hidden rounded-lg shadow-xl mt-4 w-100 mx-2 text-white font-alice`}>
                        <div className="md:h-96 w-auto md:w-1/2">
                            <img alt="obj-one" className="inset-0 h-full w-full object-cover object-center" src={project.image} />
                        </div>
                        <div className={`w-auto md:w-1/2 py-6 px-6 flex flex-col justify-center space-y-7 text-center ${project.display === 'flex-row' ? 'bg-[#12395E]' : 'bg-[#139EB1]'}`}>
                            <h1 className=' font-medium text-xl md:text-3xl'>{project.title}</h1>
                            <p className=''>{project.description}</p>
                            {/* <button className='py-2 px-6 place-self-center rounded-full text-[#3F1E85] bg-white font-semibold hover:shadow-xl transition duration-300'>Read more</button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        <MainFooter color='bg-[#DEE9FF]/30' />
    </div>
  )
}

export default AllProjects
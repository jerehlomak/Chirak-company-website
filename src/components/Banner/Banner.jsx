import React from 'react'
import { Header } from '../../components'
import bannerImg from '../../assets/images/img/banner-img.png'
import vector1 from '../../assets/images/img/vectors/vector1.png'
import vector2 from '../../assets/images/img/vectors/vector2.png'
import vector3 from '../../assets/images/img/vectors/vector3.png'

import {linkParticles} from '../../components/Animate/Particles';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Banner = ({ title1, title2 }) => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);
  return (
    <> 
        <div id='banner' className='banner relative'>
            <Header />

            <div className='relative flex flex-col items-center justify-center font-alice'>
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={linkParticles}
          />
                <div className='-mt-20 md:mt-0'>
                  <h2 className='uppercase text-center text-white text-lg font-bold leading-6 mb-10'>{title1}</h2>
                  <div className='hidden absolute w-[100%] md:w-[80%] bottom-80 md:flex items-center justify-between'>
                      <img src={vector3} alt="vector 1" />
                      <img src={vector2} alt="vector 2" />
                      <img src={vector1} alt="vector 3" />
                  </div>
                  <div className=''>
                      <img className='' src={bannerImg} alt="bannerimage" />
                  </div>

                  <div className='mt-20 flex flex-col items-center justify-center'>
                      <h1 className='text-black text-center font-bold text-2xl'>{title2}</h1>
                      <div className='border-b-2 w-20 border-[#10A8E9]' />
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner
import React from 'react'
import { Header, Hero, About, WhoWeAre, OurTeam, NewsLetter, Footer } from '../components'
// import {linkParticles} from '../components/Animate/Particles';
// import Particles from "react-particles";
// import { loadFull } from "tsparticles";
// import { useCallback } from "react";

const HomePage = () => {
  // const particlesInit = useCallback(async (engine) => {
  //   console.log(engine);
  //   // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //   // starting from v2 you can add only the features you need reducing the bundle size
  //   await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);

  return (
    <>
      <div className='bg-[#BBB6F9]/20'>
        <div id='top-content' className='bg-[#BBB6F9]/20'>
          <div className='container mx-auto'>
            <Header />
            <Hero />            
          </div>  
          {/* <Particles />   */}
          {/* <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={linkParticles}
            
          /> */}
        </div>
        <About />
        {/* <Projects /> */}
        <div className=''>
          <WhoWeAre />
        </div>
        <OurTeam />
        <div id="footer">
          <div className='pt-40'>
            <NewsLetter />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
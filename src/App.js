import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage'
import BlogPage from './pages/BlogPage';
import CareerPage from './pages/CareerPage';
import './App.css'

import {linkParticles} from './components/Animate/Particles';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

// import { BlogDetails } from './components';

function App() {
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

      <div className=''>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={linkParticles}
          />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          {/* <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:id' element={<BlogDetails />} /> */}
          <Route path='/career' element={<CareerPage />} />
        </Routes>
      </div>
  );
}

export default App;

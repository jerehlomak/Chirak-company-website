import React from 'react'
import './AnimateWord.css'

const AnimateWord = ({ title1, title2 }) => {
  return (
    <>
        {/* <h1 className='header font-alice font-bold text-3xl text-white uppercase'>{title1}</h1>  */}
        <h3 className='header w-full font-alice font-bold text-2xl text-white mb-10 uppercase'> 
            <span>{title2}</span>
        </h3>
    </>
  )
}

export default AnimateWord
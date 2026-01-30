import React from 'react'
import bannerImage from '../assets/banner.png'

const Hero = () => {
  return (
    <div>
       <div className='relative'>
        <img src={bannerImage} alt="" className='w-full h-110' />
       </div>
       <div className='absolute top-60 left-120 flex flex-col text-center'>

        <h1 className='font-bold text-6xl text-[#393939] font-Lexend'>Guidance for Success</h1>
        <p className='font-normal leading-17 text-lg text-[#121010]'>Unlock your potential with our comprehensive career counseling services.</p>
       <div>
        <button className=' bg-[#146C94] text-[#FFFEFE] h-14 w-41 rounded'> Get Started </button>
       </div>
       </div>

    </div>
  )
}

export default Hero
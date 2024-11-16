import React from 'react'
import bannerImg from '../../assets/bannerImg.png'

const Hero = () => {
  return (
    <section className='h-screen relative bg-cover bg-center text-white' style={{backgroundImage: `url(${bannerImg})`}}>
    <div className='md:pt-48 pt-24 px-2 text-center space-y-8 md:w-1/2 mx-auto'>
        <h1 className='text-4xl lg:text-6xl font-medium lg:leading-tight'>Make your interior more
        minimalistic & modern</h1>
        <p className='text-2xl font-normal lg:w-1/2 mx-auto'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
        {/* search field */}
        <div>
        <input className='w-full md:w-80 px-6 py-2 bg-white/25 rounded-full border border-gray-300 focus:outline-none' type='text' placeholder='Search Furniture'/> 
        </div>
    </div>

    </section>
  )
}

export default Hero
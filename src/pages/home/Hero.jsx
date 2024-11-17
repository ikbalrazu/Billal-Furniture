import React from 'react'
import bannerImg from '../../assets/bannerImg.png'
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <section className='h-screen relative bg-cover bg-center text-white' style={{backgroundImage: `url(${bannerImg})`}}>
    <div className='md:pt-48 pt-24 px-2 text-center space-y-8 md:w-1/2 mx-auto'>
        <h1 className='text-4xl lg:text-4xl font-medium lg:leading-tight'>Make your interior more
        minimalistic & modern</h1>
        <p className='text-2xl font-normal lg:w-1/2 mx-auto'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
        {/* search field */}
        <div className='relative inline-block z-30'>
        <input className='w-full md:w-80 px-6 py-2 bg-white/25 rounded-full border border-gray-300 focus:outline-none' type='text' placeholder='Search Furniture'/> 
        <div className='absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full cursor-pointer'>
            <FaSearch/>
        </div>
        </div>

        {/* bottom blur effer */}
        <div className='absolute inset-x-0 bottom-0 h-3/4 -mb-5 bg-gradient-to-t from-white via-transparent to-transparent'/>

    </div>

    </section>
  )
}

export default Hero
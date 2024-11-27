import React from 'react'
import bannerImg from '../../assets/bannerImg.png'
import Products from './Products'

const Shop = () => {
  return (
    <section className='min-h-screen'>
      {/* banner */}
      <div className='w-full h-[400px] bg-cover flex justify-center items-center text-4xl text-white' style={{backgroundImage: `url(${bannerImg})`}}>
      <h1 className=''>Shop Our Products</h1>
      </div>
      <Products headline="What's your choices"/>
    </section>
  )
}

export default Shop
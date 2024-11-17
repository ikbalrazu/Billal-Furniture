import React from 'react'
import btnicon from '../../assets/button-icon.png'

const WhyChoose = () => {
  return (
    <section className='section-container'>
       <div className='my-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-8 md:gap-12 text-left mx-12'>
       <div className='text-4xl font-bold'>
        Why <br/> Choosing Us
       </div>

       <div>
        <h3 className='text-2xl font-semibold mb-3'>Luxury facilities</h3>
        <p className='text-base mb-2'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
        <button className='text-sm text-primary flex items-center gap-1'>
            More Info
            <img src={btnicon}/>
        </button>
        {/* <Button text="More Info"/> */}
       </div>

       <div>
        <h3 className='text-2xl font-semibold mb-3'>Affordable Price</h3>
        <p className='text-base mb-2'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
        <button className='text-sm text-primary flex items-center gap-1'>
            More Info
            <img src={btnicon}/>
        </button>
       </div>
      
       <div>
        <h3 className='text-2xl font-semibold mb-3'>Luxury facilities</h3>
        <p className='text-base mb-2'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
        <button className='text-sm text-primary flex items-center gap-1'>
            More Info
            <img src={btnicon}/>
        </button>
       </div>
       

       </div>

       
    </section>
  )
}

export default WhyChoose
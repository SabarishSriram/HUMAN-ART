import React from 'react'
import UniCorn from '../assets/Unicorn.webp'

function Universe() {
  return (
    <div>
        <div className='flex items-center justify-center mt-7'>
            <img className='md:w-[900px] w-[350px]' src={UniCorn} alt="" />
        </div>

        <div className='px-11'> 
            <p className='font-bold md:text-4xl text-3xl text-left md:text-center mt-5'>Designing a universe</p>

            <p className=' text-left font-serif text-lg mt-3 md:px-40 md:text-center'>We’re building the Humankind brand, its world, stories, and characters. Our goal is to capture the hearts and minds of kids and adults worldwide with epic creations, a unique vision, and community-driven storytelling.</p>

            <div className='flex flex-col md:flex-row md:justify-center justify-left mt-4 mb-8 items-left'>

            <button className='bg-white text-black md:mt-0  md:text-base font-bold text-base rounded-full border-[3px] border-[#000000]  py-4 md:ml-0 w-[150px] md:w-60'>Discover the Art</button>
            </div>
        </div>
    </div>
  )
}

export default Universe
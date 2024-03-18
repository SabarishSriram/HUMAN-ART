import React from 'react'
import Human from '../assets/Human.png'
import Kind from '../assets/Kind.png'


function Hero() {
  return (
    <div>
        <div className='mt-36 md:mt-28'>
            <img src={Human}  className='w-[1175px] mx-auto'alt=""/>
            <img src={Kind} alt="" className=' w-[1175px] mx-auto md:mt-[-200px] mt-[-65px]' />
        </div>

        <p className='font-serif font-extralight mt-5 text-center md:text-2xl text-xl '>Creating a magical world for the kid in all of us.</p>

        <div className='w-full flex md:flex-row flex-col justify-center mt-9 items-center '>
            <button className='bg-white text-black font-bold text-base rounded-full border-[3px] md:text-base md:w-1/6 w-3/4 border-black px-6 md:px-4 md:mr-3 py-4 mt-3 '> 🎁 Get a Lunchbox!</button>
            
            <button className='bg-black text-white font-bold text-base rounded-full border-[3px] md:text-base md:w-1/6 w-3/4 border-black px-6 py-4 mt-3 '> ⚔️ Play Now!</button>
        </div>
    </div>
  )
}

export default Hero
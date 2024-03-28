import React from 'react'
import Herokind from '../assets/Herokind.webp'

function Card2() {
  return (
    <div className='grid md:grid-cols-2 border-[5px] m-3 md:mx-14 md:py-6  border-black rounded-3xl mt-12'>
        <div className='flex justify-center items-center px-8'>
            
            <img src={Herokind} alt="" className=' mt-7 m-3 rounded-lg w-[380px] md:w-[450px]' />
        </div>
        <div className=' px-4 my-auto '>
            <h1 className='font-extrabold text-xl md:text-3xl  py-4'>Play Herokind!</h1>

            <p className='font-serif tracking-wide  text-lg md:mt-3'>Herokind is a unique game made just for Humankind NFT collectors. It combines the fun of collectibles with the anticipation of daily adventure events.</p>

            <p className='font-serif tracking-wide mt-6 text-lg md:mt-3'>Send your Humankind collectibles to places like Tenotch Forest, Skull Volcano, and Cloud Island, where the environment and events are unpredictable and can change at any time.</p>


            <div className='flex md:justify-start justify-center mt-4 mb-8'>
                
                <button className='bg-[#FFD91A] text-black md:text-base font-bold text-base rounded-full border-[3px] border-[#BB7A00]  py-4 ml-2 md:ml-0 w-4/5 md:w-40 hover:bg-[#ddff47] hover:shadow-2xl duration-300 ease-in-out'> ⚔️ Play Now!</button>
            </div>

        </div>
        
    </div>
  )
}

export default Card2
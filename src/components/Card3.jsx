import React from 'react'
import HumanKind from '../assets/HumankindFund.webp'

function Card3() {
  return (
    <div className='grid md:grid-cols-2 border-[5px] m-3 md:mx-14 md:py-6  border-black rounded-3xl mt-12'>
        <div className='flex justify-center items-center'>
            
            <img src={HumanKind} alt="" className=' mt-7 m-3 rounded-lg w-[300px] md:w-[450px]' />
        </div>
        <div className=' px-4 my-auto '>
            <h1 className='font-extrabold text-xl md:text-3xl  py-4'>Bring your ideas to life with the Humankind Fund</h1>

            <p className='font-serif tracking-wide  text-lg md:mt-3'>The Humankind Fund is a community-driven initiative that supports and empowers projects that share the values and mission of the Humankind brand. Join us in bringing creative ideas to life and making a positive impact on the world.</p>


            <div className='flex md:justify-start justify-center mt-4 mb-8'>
                
                <button className='bg-[#FFD91A] text-black md:text-base font-bold text-base rounded-full border-[3px] border-[#BB7A00]  py-4 md:ml-0 w-[340px] md:w-40'> 💖 Learn More!</button>
            </div>

        </div>
        
    </div>
  )
}

export default Card3
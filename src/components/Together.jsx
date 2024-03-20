import React from 'react'
import Building from '../assets/Building.webp'

function Together() {
  return (
    <div className=' grid md:grid-cols-3 justify-center items-center'>
        <div className='flex col-span-2	 items-center flex-col'>
          <img src={Building} alt="" />
          
        </div>

        <div className='px-11'> 
            <p className='font-bold md:text-4xl text-3xl text-left md:text-left md:px-4 mt-5'>Building together</p>

            <p className=' text-left font-serif text-lg mt-3 md:px-4 md:text-left'>Our mission is to entertain and inspire people all over the globe through the power of art, kindness, and unique storytelling in web3.</p>

            <div className='flex flex-col md:flex-row md:justify-center justify-left mt-4 mb-8 items-left'>

            <button className='bg-white text-black md:mt-0  md:text-base font-bold text-base rounded-full border-[3px] border-[#000000]  py-4 md:ml-0 w-[150px] md:w-60'>Explore Careers</button>
            </div>
        </div>
    </div>
  )
}

export default Together
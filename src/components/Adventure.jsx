import React from 'react'
import Adventure from '../assets/Adventure1.webp'

function Together() {
  return (
    <div className=' mt-[40px]'>
        <div className='flex items-center flex-col'>
          <img src={Adventure} alt="" />
          
        </div>

        <div className='px-11 md:px'> 
            <p className='font-bold md:text-4xl text-3xl text-center md:text-center mt-5'>Join our adventure</p>

            <p className=' text-left font-serif text-lg mt-3 md:px-40 md:text-center'>Despite the many evil forces in the world, there is hope. We can still make a positive difference through art and community. We’re looking for other geeks, punks, and freaks like us who believe in the power of storytelling to be a part of our quest.</p>

            <div className='flex flex-col md:flex-row md:justify-center justify-center items-center mt-4 mb-8 items-left'>

            <button className='bg-black text-white md:mt-0  md:text-base font-bold text-base rounded-full border-[3px] border-[#000000]  py-4 md:ml-0 w-[170px] md:w-60'>👾 Join our discord</button>
            </div>
        </div>
    </div>
  )
}

export default Together
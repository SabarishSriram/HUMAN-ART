import React from 'react'
import Robot from '../assets/Robot.gif'

function Art() {
  return (
    <div className="bg-[url('./assets/Bg-small.png')] py-[10px] h-[830px] md:h-[630px]">
      <div className="grid md:grid-cols-2 justify-center md:px-5 items-center">
        <div className=' bg-white border-[4px] border-black rounded-3xl md:px-12 px-6 mx-3 mt-9'>
          <p className='font-bold md:text-5xl text-2xl text-left mt-5'>Art and kindness are our tools of trade</p>

          <p className=' text-left font-serif text-lg mt-3'>Humankind is a creative force developing relatable characters and epic stories for a global audience across various formats powered by decentralization.</p>

          <div className='flex flex-col md:flex-row md:justify-left justify-left mt-4 mb-8 items-left'>

            <button className='bg-white text-black md:mt-0 mt-2 md:text-base font-bold text-base rounded-full border-[3px] border-[#000000]  py-4 md:ml-0 w-[150px] md:w-40'>Learn About Us</button>
          </div>
        </div>
        <div>
          <img src={Robot} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Art
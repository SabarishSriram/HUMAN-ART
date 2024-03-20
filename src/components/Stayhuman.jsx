import React from 'react'
import Studio from '../assets/Studio.webp'
import Fund from '../assets/Fund.webp'


function Stayhuman() {
  return (
    <div>
      <div className=''>
        <p className='text-white bg-black text-center font-bold text-[75px] md:text-[120px] sm:text-[90px] mb-[-50px]'>stayhuman</p>
      </div>
      <div className="bg-[url('./assets/Stayhuman.png')] h-[730px] md:h-[650px] w-full bg-cover bg-black py-9 grid md:grid-cols-2 justify-center md:px-5 items-center">

          <div className=' bg-white border-[4px] border-black rounded-3xl md:px-12 py-5 mx-3 mt-9 px-7 '>
            <div className='flex justify-center'>
              <img className='w-[115px]' src={Studio} alt="" />
            </div>
            <p className='font-bold md:text-2xl text-2xl text-center mt-5'>Humankind Studios</p>

            <p className=' text-left font-serif text-lg mt-3'>A creative studio designing the stories, world, and brand of Humankind.</p>
          </div>
          <div className=' bg-white border-[4px] border-black rounded-3xl md:px-12 px-7 py-5 mx-3 mt-9'>
            <div className='flex items-center justify-center'>
              <img className='w-[150px]' src={Fund} alt="" />
            </div>
            <p className='font-bold md:text-2xl text-2xl text-center mt-5'>Humankind Fund</p>

            <p className=' text-left font-serif text-lg mt-3'>A fund that helps artists conceive their creations free of economic dependencies.</p>
          </div>
      </div>
    </div>
  )
}

export default Stayhuman
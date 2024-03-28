import React from 'react'
import Lunchbox from '../assets/lunchbox.gif'

function Card4() {
  return (
    <div className='grid md:grid-cols-2 border-[5px] m-3 md:mx-14 md:py-6  border-black rounded-3xl mt-12'>

        <div className='flex justify-center items-center'>
            
            <img src={Lunchbox} alt="" className=' mt-7 m-3 rounded-lg w-[380px] md:w-[450px]' />
        </div>
        
        <div className=' px-4 my-auto '>
            <h1 className='font-extrabold text-xl md:text-3xl  py-4'>Grab your lunchbox. It will be a long journey.</h1>

            <p className='font-serif tracking-wide  text-lg md:mt-3'>We are delighted you’re finally joining our adventure alongside Maya and Dallas. It all starts with a simple and nostalgic object: a lunchbox. A lunchbox? What for? Well, it’s gonna be a long journey!.</p>

            <p className='font-serif mt-6 tracking-wide  text-lg md:mt-3'>Every lunchbox will unlock a Humankind on a brave quest. You’ll be able to claim your Kind with them. We’ve made our generative lunchboxes with art we’ve been creating for the last year.
            </p>

            <div className='flex flex-col md:flex-row md:justify-start justify-center mt-4 mb-8 items-center'>
                
                <button className='bg-[#000000] text-white md:text-base font-bold text-base rounded-full border-[3px] border-[#000000] md:mr-2  py-4 ml-2 md:ml-0 w-[250px] md:w-[225px] hover:bg-[#E03327] hover:shadow-2xl duration-300 ease-in-out'>🌊 Get one from Opensea</button>

                <button className='bg-[#ffffff] text-black mt-2 md:text-base font-bold text-base rounded-full border-[3px] border-[#000000]  py-4 ml-2 md:ml-0 w-[250px] md:w-40 '>🌮 Learn more</button>
            </div>
            

        </div>
        
    </div>
  )
}

export default Card4
import React from 'react'
import Person1 from '../assets/Person1.webp'
import Person2 from '../assets/Person2.webp'
import Person3 from '../assets/Person3.webp'
import Person4 from '../assets/Person4.webp'
import Person5 from '../assets/Person5.webp'
import Person6 from '../assets/Person6.webp'
import Person7 from '../assets/Person7.webp'
import Person8 from '../assets/Person8.webp'
import Person9 from '../assets/Person9.webp'



function Hero2() {
  return (
    <div className="bg-[url('./assets/Bg1.png')] py-[10px] h-[640px] md:h-[700px] ">
        <div className='bg-black mt-12 md:px-40 p-4 rounded-3xl mx-3  '>
            <div className='flex items-center justify-center '> 
                <img src={Person1} alt="" className='w-16 md:w-[150px] rounded-full  ' />
                <img src={Person2} alt="" className='w-16 rounded-full md:w-[150px] ' />
                <img src={Person3} alt="" className='w-16 rounded-full md:w-[150px]  mt' />
                <img src={Person4} alt="" className='w-16 rounded-full md:w-[150px]  mt' />
            </div>
            <div className='flex items-center justify-center'>
                <img src={Person5} alt="" className='w-16 md:w-[150px] rounded-full  ' />
                <img src={Person6} alt="" className='w-16 rounded-full md:w-[150px] ' />
                <img src={Person7} alt="" className='w-16 rounded-full md:w-[150px]  mt' />
                <img src={Person8} alt="" className='w-16 rounded-full md:w-[150px]  mt' />
                <img src={Person9} alt="" className='w-16 rounded-full md:w-[150px]  mt' />
            </div>
            
            <p className='font-bold text-white md:text-4xl text-3xl text-center mt-5'>Humankind Collectibles</p>

            <p className='text-white text-center font-serif text-lg mt-3'>Back in 2022, we launched a set of diverse and unique art collectibles featuring the Humankind species, the most prevalent in The Land of Kinds</p>

            <div className='flex flex-col md:flex-row md:justify-center justify-center mt-4 mb-8 items-center'>
                
                <button className='bg-white text-black md:text-base font-bold text-base rounded-full border-[3px] border-[#000000] md:mr-2  py-4 ml-2 md:ml-0 w-[300px] md:w-[225px]'> Get one from Opensea</button>

                <button className='bg-black text-white md:mt-0 mt-2 md:text-base font-bold text-base rounded-full border-[3px] border-[#ffffff]  py-4 ml-2 md:ml-0 w-[300px] md:w-40'>🌮 Learn more</button>
            </div>
        </div>
    </div>
  )
}

export default Hero2
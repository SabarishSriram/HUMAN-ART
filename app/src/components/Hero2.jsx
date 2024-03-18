import React from 'react'

function Hero2() {
  return (
    <div>
        <div className='bg-black p-4 rounded-3xl mx-3 '>
            <p className='font-bold text-white text-3xl text-center'>Humankind Collectibles</p>

            <p className='text-white text-center font-serif text-lg mt-3'>Back in 2022, we launched a set of diverse and unique art collectibles featuring the Humankind species, the most prevalent in The Land of Kinds</p>

            <div className='flex flex-col md:flex-row md:justify-start justify-center mt-4 mb-8 items-center'>
                
                <button className='bg-white text-black md:text-base font-bold text-base rounded-full border-[3px] border-[#000000] md:mr-2  py-4 ml-2 md:ml-0 w-[350px] md:w-[225px]'> Get one from Opensea</button>

                <button className='bg-black text-white mt-2 md:text-base font-bold text-base rounded-full border-[3px] border-[#ffffff]  py-4 ml-2 md:ml-0 w-[350px] md:w-40'>🌮 Learn more</button>
            </div>
        </div>
    </div>
  )
}

export default Hero2
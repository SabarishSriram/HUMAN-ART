import React from 'react'
import Cards1 from '../assets/Cards1.webp'

function Card1() {
  return (
    <div className='grid md:grid-cols-2 border-[5px] m-3 md:mx-14 md:py-6  border-black rounded-3xl mt-28'>
        <div className='flex justify-center items-center'>
            
            <img src={Cards1} alt="" className=' mt-7 m-3 rounded-lg w-[300px] md:w-[450px]' />
        </div>
        <div className=' px-4 my-auto '>
            <h1 className='font-extrabold text-xl md:text-3xl  py-4'>Wrestle. Wrestle. Wrestle!</h1>
            <p className='font-serif tracking-wide  text-lg md:mt-3'>Step into the arena with Wrestle, the latest game feature in Herokind. Pit your Humankind characters against a diverse array of monsters, from the ferocious Alligatornado to the cunning Nerdy Dragon. Strategize your moves and watch your characters grow in this turn-based adventure.</p>
            <div className='flex md:justify-start justify-center mt-4 mb-8'>
                <button className='bg-black text-white md:text-base font-bold text-base rounded-full border-[3px] border-black  py-3 md:ml-0 ml-2 w-36 md:w-40'> 🤓 Learn More</button>
                <button className='bg-[#FFD91A] text-black md:text-base font-bold text-base rounded-full border-[3px] border-[#BB7A00]  py-4 ml-2 w-36 md:w-40'> 🤼 Wrestle Now!</button>
            </div>

        </div>
        
    </div>
  )
}

export default Card1
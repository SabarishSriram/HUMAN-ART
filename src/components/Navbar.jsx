import React from 'react'
import Icon from "../assets/Icon.svg";
import { IoMenu } from "react-icons/io5";


function Navbar() {
  return (
    <div className='fixed top-0 left-0 w-full ml-[20px]  hidden md:flex justify-between h-[50px] bg-white items-center'>
            <img src={Icon} alt="" className='w-9' />
            <p className=' font-bold text-base ml-2 w-full md:text-lg	'>humankind</p>

              <p className='font-bold ml-1 px-3'>Wrestle</p>
              <p className='font-bold px-3'>Collectibles</p>
              <p className='font-bold px-3'>Shop</p>
              <p className='font-bold px-3'>Community</p>
              <p className='font-bold px-3'>Subscribe</p>
              <button className='bg-black text-white w-[325px] py-2 mr-8 font-bold rounded-full'>Play Now! 💀</button>
              
           
        <IoMenu size={40} className='fixed md:hidden right-8' /> 
    </div>
    
  )
}

export default Navbar
import React from 'react'
import Icon from "../assets/Icon.svg";
import { IoMenu } from "react-icons/io5";


function Navbar() {
  return (
    <div className='flex bg-white w-full fixed z-10 top-0 items-center  py-4 px-4'>
        <div className='flex items-center w-full'>
            <img src={Icon} alt="" className='w-9' />
            <p className=' font-bold text-base	'>humankind</p>
            <div className='ml-[20px]  hidden md:flex justify-center items-center'>
              <p className='font-bold ml-[400px]'>Wrestle</p>
              <p className='font-bold ml-[25px]'>Collectibles</p>
              <p className='font-bold ml-[25px]'>Shop</p>
              <p className='font-bold ml-[25px]'>Community</p>
              <p className='font-bold ml-[25px]'>Subscribe</p>
              <button className='bg-black text-white w-32 py-2 ml-3 font-bold rounded-full'>Play Now! 💀</button>
              
            </div>
        </div>
        <IoMenu size={40} className='fixed md:hidden right-8' /> 
    </div>
    
  )
}

export default Navbar
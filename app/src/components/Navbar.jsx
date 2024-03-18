import React from 'react'
import Icon from "../assets/Icon.svg";
import { IoMenu } from "react-icons/io5";


function Navbar() {
  return (
    <div className='flex bg-white w-full fixed z-10 top-0 items-center  py-4 px-4'>
        <div className='flex'>
            <img src={Icon} alt="" className='w-9' />
            <p className=' ml-2 font-bold text-base	'>humankind</p>
        </div>
        <IoMenu size={40} className='fixed right-8' /> 
    </div>
    
  )
}

export default Navbar
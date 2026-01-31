import React from 'react'
import imgLogo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center fixed top-0 left-0 w-full bg-white shadow-md z-50'>
        <div>
            <img src={imgLogo} alt="logo" className='h-15 mx-20'/>
        </div>

        <div className='flex gap-5 mx-20 justify-center items-center font-Manrope  '>
            <NavLink to="/"  className={({isActive}) => isActive ? "border-b-2 border-[#146C94]  text-[#146C94] font-bold" : ""}>HOME</NavLink>
            <NavLink to="/services" className={({isActive}) => isActive ? "border-b-2 border-[#146C94]  text-[#146C94] font-bold" : ""}> SERVICES </NavLink>
            <NavLink to="/package" className={({isActive}) => isActive ? "text-[#146C94] border-b-2 border-[#146C94] font-bold" : ""}> PACKAGE </NavLink>  
            <NavLink to="/aboutus" className={({isActive}) => isActive ? "text-[#146C94] font-bold border-b-2 border-[#146C94] " : ""}> ABOUT US </NavLink>
           
            <button className='btn btn-neutral w-30'> Login </button>
        </div>

    </div>
  )
}

export default Navbar
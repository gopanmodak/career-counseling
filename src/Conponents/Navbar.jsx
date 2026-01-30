import React from 'react'
import imgLogo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center fixed top-0 left-0 w-full bg-white shadow-md z-50'>
        <div>
            <img src={imgLogo} alt="logo" className='h-15 mx-20'/>
        </div>

        <div className='flex gap-5 mx-20 justify-center items-center font-Manrope  '>
            <Link to="/">HOME</Link>
            <Link to="/services"> SERVICES </Link>
            <Link to="/resources"> RESOURCES </Link>  
            <Link to="/aboutus"> ABOUT US </Link>
           
            <button className='btn btn-neutral w-30'> Sign in </button>
        </div>

    </div>
  )
}

export default Navbar
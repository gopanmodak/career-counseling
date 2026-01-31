import React, { useContext } from 'react'
import imgLogo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { toast } from 'react-toastify'

const Navbar = () => {
  const {user,logout}=useContext(AuthContext)
  const handlOnLogOut=()=>{
    logout()
    .then(()=>{
      toast.success('Logout Successfully')  
    })
    .catch(error=>console.log(error))
  }
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

            {user ? <NavLink to="/profile" className={({isActive}) => isActive ? "text-[#146C94] font-bold border-b-2 border-[#146C94] " : ""}> MY PROFILE </NavLink>: ""}
           
           {user ? <div className='flex gap-5'><img src={user.photoURL} alt="" className='w-12 h-12 rounded-full object-cover border'/> <Link to="/login" className='btn btn-neutral w-15 rounded' onClick={handlOnLogOut}> Logout </Link> </div>: <Link to="/login" className='btn btn-neutral w-30'> Login </Link>}
        </div>

    </div>
  )
}

export default Navbar
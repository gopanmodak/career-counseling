import React from 'react'
import Navbar from '../Conponents/Navbar'
import Footer from '../Conponents/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
       <nav>
        <Navbar />
        <main className='flex-1 pt-20 pb-20 px-4'>
          <Outlet></Outlet>
        </main>

        <footer>
            <Footer />
        </footer>
       </nav>

    </div>
  )
}

export default MainLayout
import React from 'react'
import Navbar from '../Conponents/Navbar'
import Footer from '../Conponents/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
       <nav>
        <Navbar />
        <main className='min-h-[calc(120vh-490px)] h-full mt-20 mb-10'>
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
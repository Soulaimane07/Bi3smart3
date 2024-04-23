import React from 'react'
import Navadmin from '../../../Components/Navbar/Navadmin'
import Sidebar from '../../../Components/Navbar/Sidebar'
import User from './User'
import Footer from '../../../Components/Footer/Footer'
function ReadUser() {
  return (
    <>
    <Navadmin />
    
    <main className='min-h-screen mt-28 flex items-start'>
    <Sidebar />
    <User />
        </main>
    <Footer />
    </>
  )
}

export default ReadUser
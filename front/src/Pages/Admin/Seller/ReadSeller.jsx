import React from 'react'
import Sidebar from '../../../Components/Navbar/Sidebar'
import Seller from './Seller'
import Footer from '../../../Components/Footer/Footer'
import SellerNavbar from '../../../Components/Navbar/Seller/SellerNavbar'

function ReadSeller() {
  return (
    <>
    <SellerNavbar />
    
    <main className='min-h-screen mt-28 flex items-start'>
    <Sidebar />
    <Seller />
        </main>
    <Footer />
    </>
  )
}

export default ReadSeller
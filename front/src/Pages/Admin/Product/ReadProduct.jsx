import React from 'react'
import SellerNavbar from '../../../Components/Navbar/Seller/SellerNavbar'
import Sidebar from '../../../Components/Navbar/Sidebar'
import Product from './Product'
import Footer from '../../../Components/Footer/Footer'

function ReadProduct() {
  return (
    <>
    <SellerNavbar />
    
    <main className='min-h-screen mt-28 flex items-start'>
    <Sidebar />
    <Product />
        </main>
    <Footer />
    </>
  )
}

export default ReadProduct
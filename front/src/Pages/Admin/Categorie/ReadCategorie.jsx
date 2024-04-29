import React from 'react'
import Sidebar from '../../../Components/Navbar/Sidebar'
import Categorie from './Categorie'
import Footer from '../../../Components/Footer/Footer'
import SellerNavbar from '../../../Components/Navbar/Seller/SellerNavbar'

function ReadCategorie() {
  return (
    <>
    <SellerNavbar />
    
    <main className='min-h-screen mt-28 flex items-start'>
    <Sidebar />
    <Categorie />
        </main>
    <Footer />
    </>
  )
}

export default ReadCategorie
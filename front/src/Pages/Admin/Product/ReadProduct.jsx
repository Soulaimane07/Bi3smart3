import React from 'react'
import Navadmin from '../../../Components/Navbar/Navadmin'
import Sidebar from '../../../Components/Navbar/Sidebar'
import Product from './Product'
import Footer from '../../../Components/Footer/Footer'

function ReadProduct() {
  return (
    <>
    <Navadmin />
    
    <main className='min-h-screen mt-28 flex items-start'>
    <Sidebar />
    <Product />
        </main>
    <Footer />
    </>
  )
}

export default ReadProduct
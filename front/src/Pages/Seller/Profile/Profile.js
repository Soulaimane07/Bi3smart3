import React from 'react'
import SellerNavbar from '../../../Components/Navbar/Seller/SellerNavbar'
import SellerSidebar from '../../../Components/Navbar/Seller/SellerSidebar'
import Footer from '../../../Components/Footer/Footer'
import { useSelector } from 'react-redux'
import Boxs from './Boxes'

function Profile() {
  const user = useSelector(state => state.User.data)

  return (
    <>
      <SellerNavbar />

      <main className='min-h-screen flex pr-10'>
        <SellerSidebar />

        <article className='flex-1 px-2 py-2'>
          <h1 className='text-2xl font-medium'> Welcome {user?.fname} </h1>
          <Boxs /> 
        </article>
      </main>

      <Footer />
    </>
  )
}

export default Profile
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Navbar/Sidebar'
import Footer from '../../../Components/Footer/Footer'
import { useSelector } from 'react-redux'
import Boxs from './Boxs'

function Profile() {
  const user = useSelector(state => state.User.data)

  return (
    <>
      <Navbar />

      <main className='min-h-screen flex pr-10'>
        <Sidebar />

        <article className='flex-1 px-2 py-2'>
          <h1 className='text-2xl font-medium'> Welcome {user.fname} </h1>
          <Boxs /> 
        </article>
      </main>

      <Footer />
    </>
  )
}

export default Profile
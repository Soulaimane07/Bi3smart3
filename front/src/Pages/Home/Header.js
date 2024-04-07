import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={{ backgroundImage: `url(../images/header.jpg)` }} className='Header overflow-hidden flex flex-col justify-center space-y-2 text-white px-20'>
        <h1 className='text-2xl'> BEST OF THE BEST </h1>
        <p className='text-6xl pb-10'> Gold Earring For <br></br> Women </p>
        <Link to="/products" className=' text-gray-800 font-medium bg-white w-fit px-14 rounded-lg py-2'> Explore Now </Link>
    </header>
  )
}

export default Header
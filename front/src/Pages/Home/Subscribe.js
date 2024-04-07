import React from 'react'
import { Link } from 'react-router-dom'

function Subscribe() {
  return (
    <div style={{ backgroundImage: `url(../images/header.jpg)` }} className='Header mt-28 overflow-hidden flex flex-col justify-center space-y-2 text-white px-20'>
        <h1 className='text-4xl font-medium'> Get Your Latest Update ! </h1>
        <h1 className='text-4xl pb-2 font-medium'> Up to 40% off on all items. </h1>
        <p className='pb-6 text-lg'> Subscribe to our latest newsletter to get zbout special discounts. </p>
        <Link to="/products" className=' text-gray-800 font-medium bg-white w-fit px-14 rounded-lg py-2'> Subscribe </Link>
    </div>
  )
}

export default Subscribe
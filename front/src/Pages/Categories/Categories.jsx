import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Filtrage from '../Products/Filtrage'
import Product from '../../Components/Product/Product'
export const Categories = () => {
  let list = [1,2,3,4,5,6,1,2,3,4,5,6]
  return (
    <>
    <Navbar />
    <main className='min-h-screen mt-28 flex items-start'>
        <Filtrage />
        <div className='w-5/6 border-l-2 '>
          <h1 className=' text-2xl mb-4 bg-gray-100 px-10  py-6 rounded-md font-bold text-center '> Categorie1</h1>
          <div className=' grid grid-cols-4 gap-6 px-20 py-8'>
          {list.map(()=><Product/>)}
          </div>
        </div>
      
    </main>
    <Footer />
    </>
  )
}

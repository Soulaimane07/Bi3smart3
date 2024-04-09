import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Filtrage from './Filtrage'
import Product from '../../Components/Product/Product'
function Products() {
    let list = [1,2,3,4,5,6,1,2,3,4,5,6]

  return (
    <>
        <Navbar />

        <main className='min-h-screen mt-28 flex items-start'>
            <Filtrage />

            <div className='flex-1 w-full grid grid-cols-4 gap-6 px-20 py-8'>
                {list.map((item,key)=>(
                <Product/>
                ))}
            </div>
        </main>

        <Footer />
    </>
  )
}

export default Products
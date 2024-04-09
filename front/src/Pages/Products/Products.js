import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Filtrage from './Filtrage'

function Products() {
    let list = [1,2,3,4,5,6,1,2,3,4,5,6]

  return (
    <>
        <Navbar />

        <main className='min-h-screen mt-28 flex items-start'>
            <Filtrage />

            <div className='flex-1 w-full grid grid-cols-4 gap-6 px-20 py-8'>
                {list.map((item,key)=>(
                    <div key={key} className='bg-blue-950 flex justify-center rounded-md pb-10'>
                        <div className='bg-blue-200 w-60 h-40 mx-2 my-2'></div>
                    </div>
                ))}
            </div>
        </main>

        <Footer />
    </>
  )
}

export default Products
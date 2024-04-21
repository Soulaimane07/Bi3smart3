import React from 'react'
import SellerNavbar from '../../../Components/Navbar/Seller/SellerNavbar'
import SellerSidebar from '../../../Components/Navbar/Seller/SellerSidebar'
import Footer from '../../../Components/Footer/Footer'
import { GetProducts } from '../../../Components/Functions';
import { IoAdd } from "react-icons/io5";

function Products() {
    let products = GetProducts()

  return (
    <>
      <SellerNavbar />

      <main className='min-h-screen flex pr-10'>
        <SellerSidebar />

        <article className=' flex-1 px-2 py-2'>
            <header className='w-full mb-8 justify-between flex text-center'>
                <h1 className='text-2xl font-medium'> Products ({products?.length}) </h1>
                <button className='flex items-center px-6 border-2 bg-blue-600 text-white border-blue-600 hover:text-blue-700 hover:bg-white transition-all  rounded-sm py-2 space-x-1'> 
                    <IoAdd size={20} />
                    <p> Product </p>
                </button>
            </header>

            <main className='grid grid-cols-4 px-20'>
                {products?.map((item,key)=>(
                    <div key={key} className='mb-8 mx-2 shadow-lg rounded-md overflow-hidden'>
                        <div className=' relative h-80'>
                            <img className='w-full h-full mx-auto ' src={item.image} alt='logo' />
                            <h1 className=' py-6 bottom-0 bg-white w-full absolute text-center text-lg mt-2 font-medium'> {item.titre} </h1>
                        </div>
                    </div>
                ))}
            </main>
        </article>
      </main>

      <Footer />
    </>
  )
}

export default Products
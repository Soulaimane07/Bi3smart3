import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { BsCartDash } from "react-icons/bs";
import Footer from '../../Components/Footer/Footer';




function panier() {
    let image =[
       '../images/visa.svg',
       '../images/american-express.svg',
       '../images/discover.svg',
       '../images/maestro.svg',
       '../images/mastercard.svg',
       '../images/paypal.svg',
       '../images/venmo.svg',
       

    ]
  return (
    <>
    <headear>
        <Navbar />
    </headear>
    <main className='min-h-screen mt-44 flex mx-10 space-x-6'>
        
        <div className='flex-1  '>
            <h1 className=' text-2xl mb-6 bg-gray-100 px-10  py-6 rounded-md '>ALL ITEMS (0)</h1>
            <div className=' bg-gray-100 px-16  py-10 flex justify-center flex-col min-h-screen rounded-md'>
                <div className=' mx-auto'> <BsCartDash size={100}/></div>
            <h1 className='text-xl text-center my-6'>
             YOUR CART IS EMPTY
            </h1>
            <button className=' w-fit mx-auto text-2xl bg-black text-white rounded-lg px-12 py-2 hover:scale-110 transition-all'>SHOP NOW</button>
            </div>
            
        </div>
        <div className=' w-50 h-60 py-2 right-0 '>
            <div className=' bg-gray-100  mb-6 px-6 py-6 rounded-md'>
                <h1 className='text-2xl mb-2 font-bold'>Order Summary</h1>
                <h1 className='text-2xl '>$11.98</h1>
                <button className='  text-lg bg-black text-white rounded-lg px-12 py-2 hover:scale-110 transition-all my-2 mt-4'>Checkout Now(0)</button>
            </div>
            <div className=' bg-gray-100 px-6 py-4 rounded-md'> 
                <h1 className='mb-6 font-bold text-lg'>We Accept</h1>
            <div className=' grid grid-cols-5 '>
                {image.map((item,key)=>(
                
                <img src={item}   className='w-10' />
                
            ))}
            </div>
            </div>
        </div>
    </main>
    
        <Footer />

  
    
    

   </>
  )
}

export default panier
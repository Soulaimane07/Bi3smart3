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
        <Navbar />
        
        <main className='min-h-screen mt-28 py-8 flex mx-10 space-x-6'>
            <div className='flex-1'>
                <h1 className=' text-2xl mb-4 bg-gray-100 px-10  py-6 rounded-md font-bold '> ALL ITEMS (0)</h1>
                <div className=' bg-gray-100 px-16  py-10 flex justify-center flex-col min-h-screen rounded-md'>
                    <div className=' mx-auto opacity-70 mb-10'> <BsCartDash size={100}/></div>
                    <h1 className='text-xl text-center mb-1 font-bold'>YOUR CART IS EMPTY</h1>
                    <p className='text-center opacity-80'> Connectez-vous pour voir votre panier et commencer vos achats. </p>
                    <button className='mt-6 w-fit mx-auto text-lg bg-black text-white rounded-md px-20 py-3 hover:scale-105 transition-all'>SHOP NOW</button>
                </div>
            </div>

            <div className='w-96 h-60 right-0'>
                <div className=' bg-gray-100 py-6 px-6 mb-4 rounded-md'>
                    <h1 className='text-2xl mb-2 font-bold'>Order Summary</h1>
                    <h1 className='text-2xl '>$11.98</h1>
                    <button className='mt-6 text-lg bg-black text-white rounded-md w-full py-3 hover:scale-105 transition-all'>Checkout Now (0)</button>
                </div>
                <div className=' bg-gray-100 px-6 py-4 rounded-md'> 
                    <h1 className='mb-6 font-bold text-lg'>We Accept</h1>
                    <div className=' grid grid-cols-6 items-center '>
                        {image.map((item,key)=>(
                            <img key={key} src={item} className='w-10' />
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
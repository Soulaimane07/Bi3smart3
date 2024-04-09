import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { BsCartDash } from "react-icons/bs";
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import ProductsPanier from '../../Components/ProductsPanier';



function Panier() {
    let image =[
       '../images/visa.svg',
       '../images/american-express.svg',
       '../images/discover.svg',
       '../images/maestro.svg',
       '../images/mastercard.svg',
       '../images/paypal.svg',
       '../images/venmo.svg',
    ]
    let products =[1,2,3,4,5,6,7,8,9]
    const [price,setprice] = useState(0)
    
    
    return (
    <>
        <Navbar />
        
        <main className='min-h-screen mt-28 py-8 flex mx-10 space-x-6'>
            <div className='flex-1'>
                <h1 className=' text-2xl mb-4 bg-gray-100 px-10  py-6 rounded-md font-bold '> ALL ITEMS ({products.length})</h1>
                {products.length==0 ? 
                <div className=' bg-gray-100 px-16  py-10 flex justify-center flex-col min-h-screen rounded-md'>
                    <div className=' mx-auto opacity-70 mb-10'> <BsCartDash size={100}/></div>
                    <h1 className='text-xl text-center mb-1 font-bold'>YOUR CART IS EMPTY</h1>
                    <p className='text-center opacity-80'> Connectez-vous pour voir votre panier et commencer vos achats. </p>
                    <Link to='/Products' className='mt-6 w-fit mx-auto text-lg bg-black text-white rounded-md px-20 py-3 hover:scale-105 transition-all'>SHOP NOW</Link>
                   
                </div>
                :<ProductsPanier products={products} price={price} setprice={setprice}/>}
                
               
            </div>

            <div className='w-96 h-60 right-0'>
                <div className=' bg-gray-100 py-6 px-6 mb-4 rounded-md'>
                    <h1 className='text-2xl mb-2 font-bold'>Order Summary</h1>
                    <h1 className='text-2xl '>${price}</h1>
                    <Link  > <div  className='bg-black text-white w-full py-2 text-center mt-6 rounded-lg hover:scale-105 transition-all'>Checkout Now (0)</div></Link>
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

export default Panier
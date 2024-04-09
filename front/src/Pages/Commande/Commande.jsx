import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import { BsCartDash } from "react-icons/bs";
import Product from '../../Components/Product/Product';
function Commande() {
    const [price,setprice] = useState(0)
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
            <div className='flex-1 bg-gray-100 ' >
                <h1 className=' text-2xl mb-4 bg-gray-100 px-10  py-6 rounded-md font-bold '>Place Order </h1>
                
                    <div className=' grid grid-cols-2 w-full'> 
                        <input className=' h-16 my-4 mx-10 px-2' type="text" placeholder='First Name*' />
                        <input className='h-16 my-4 mx-10 px-2' type="text" placeholder='Last Name*' />                  
                    </div>
                    <div className='grid grid-cols-1 w-full'>
                        <input className=' h-16 my-4 mx-10 px-2' type="text" placeholder='telephone*' />
                        <input className='   h-16 my-4  px-2 mx-10' type="text" placeholder='Address*' /> 
                    </div>
                
                <div className=' bg-gray-100 my-5  rounded-md'>
                    <h1 className=' text-2xl  bg-gray-100 px-10  pt-4 rounded-md font-bold '>Order Details </h1>
                    <div className=' bg-white my-5 mx-5  rounded-md'>
                    <div className=' grid grid-cols-4 px-5 pb-5 '>
                        <div className='mt-10'><Product /></div>
                        <div className='mt-10'><Product /></div>
                        <div className='mt-10'><Product /></div>
                        </div>
                    </div>
                    </div>
                    <div className=' bg-gray-100 my-5 px-5 rounded-md'>
                    <h1 className=' text-2xl mb-4 bg-gray-100 px-10  pt-6 rounded-md font-bold '>PAYMENT METHOD </h1>
                    <div className=' bg-white grid grid-cols-2 items-center '>
                        {image.map((item,key)=>(
                            <>
                         
                                <input type="radio" name="pay"  />
                                <img key={key} src={item}  className='w-20 mt-5' />
                               
                          
                            </>
                        ))}
                    </div>
                    </div>
               
            </div>
            <div className='w-96 h-60 right-0'>
                <div className=' bg-gray-100 py-6 px-6 mb-4 rounded-md'>
                    <h1 className='text-2xl mb-2 font-bold'>Order Summary</h1>
                    <h1 className='text-2xl '>${price}</h1>
                    <Link to="/commande"  > <div  className='bg-black text-white w-full py-2 text-center mt-6 rounded-lg hover:scale-105 transition-all'>Order Now</div></Link>
                </div>
                </div>
        </main>
        <Footer/>
    </>)
}

export default Commande
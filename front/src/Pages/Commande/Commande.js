import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import { BsCartDash } from "react-icons/bs";
import Product from '../../Components/Product/Product';
import { useDispatch, useSelector } from 'react-redux';
function Commande() {
    const[paymant,setpaymant]=useState()
    const price = useSelector(state => state.Panier.price);                                         
    let image =[
        '../images/visa.svg',
        '../images/american-express.svg',
        '../images/discover.svg',
        '../images/maestro.svg',
        '../images/mastercard.svg',
        '../images/paypal.svg',
        '../images/venmo.svg',
     ]
     let products=useSelector((state)=>state.Panier.productsSelected)
     
    
  return (
    <>
        <Navbar />
        
        <main className='min-h-screen mt-28 py-8 flex mx-10 space-x-6'>
            <div className='flex-1 bg-gray-100 px-10 ' >
                
                <h1 className=' text-2xl bg-gray-100   py-6 rounded-md font-medium '>PLACE ORDER </h1>
                <div className='bg-white px-5 py-5 rounded-lg mb-12'>
                    <div className=' grid gap-4 grid-cols-2 w-full mb-6'> 
                        <input className='  px-4 rounded-lg border-2 border-gray-400 ' type="text" placeholder='First Name*' />
                        <input className=' py-2  px-4 rounded-lg border-2 border-gray-400' type="text" placeholder='Last Name*' />                  
                    </div>
                    <div className='flex flex-col w-full space-y-6'>
                        <input className=' py-2 rounded-lg border-2 border-gray-400  px-4' type="text" placeholder='telephone*' />
                        <input className='    py-2 rounded-lg border-2 border-gray-400   px-4 ' type="text" placeholder='Address*' /> 
                    </div>
                </div>
                <div className=' bg-gray-100 my-6  rounded-lg mb-12'>
                    <h1 className=' text-2xl  bg-gray-100 uppercase   rounded-md font-medium '>Order Details </h1>
                   
                    <div className=' grid grid-cols-4 px-5 py-5 gap-4 bg-white my-5   rounded-md'>
                    
                        {products.map((item,key)=>( <Product />))}
                       
                        </div>
                    
                    </div>
                    <div className=' bg-gray-100 my-5  rounded-md'>
                    <h1 className=' text-2xl mb-4 bg-gray-100    rounded-md font-bold '>PAYMENT METHOD </h1>
                    <div className=' bg-white gap-4 grid grid-cols-7 items-center px-5 py-5 rounded-lg'>
                        {image.map((item,key)=>(
                            <button onClick={()=>setpaymant(item)} className={`${paymant==item ? ' border-black' : ' border-transparent'} border-2 p-2 h-20 w-26 rounded-sm transition-all`} >
                                <img key={key} src={item}  className='w-full h-full ' />
                            </button>
                        ))}
                    </div>
                    </div>
               
            </div>
            <div className='w-96 h-60 right-0 '>
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
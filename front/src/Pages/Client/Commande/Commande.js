import React, { useEffect, useState } from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import {Product, ProductCommande} from '../../../Components/Product/Product';
import { useDispatch, useSelector } from 'react-redux';
import OrderSummery from '../../../Components/OrderSummery';
import { panierActions } from '../../../redux/Slices/PanierSlices';

function Commande() {
    const dispatch = useDispatch()

    const [fname,setfname]=useState("")  
    const [lname,setlname]=useState("")
    const [tel,settel]=useState("")
    const [add,setadd]=useState("")
    const [paymant,setpaymant]=useState(null)
    
    const Orderdata={
        "fname":fname,
        "lname":lname,
        "tel":tel,
        "add":add,
        "paiment":paymant,
        "products": null
    }                              
    
    let image =[
        '../images/visa.svg',
        '../images/american-express.svg',
        '../images/discover.svg',
        '../images/maestro.svg',
        '../images/mastercard.svg',
        '../images/paypal.svg',
        '../images/venmo.svg',
    ]




    const [savedCommande, setSavedCommande] = useState({})

    useEffect(()=> {
        let data = localStorage.getItem("bi3smart_commande")
        setSavedCommande(JSON.parse(data))
    }, [])

    let products = useSelector((state)=> state.Panier.products)
    
    let productsDetails = []
    savedCommande?.products?.map((item,key)=>(
        productsDetails = [...products?.filter((itemm)=> itemm.id == item), ...productsDetails]
    ))

    dispatch(panierActions.setPrice(savedCommande?.price))

    
    
  return (
    <>
        <Navbar />
        <main className='min-h-screen mt-28 py-8 flex mx-10 space-x-6'>
            <div className='flex-1 bg-gray-100 px-10 py-6'>
                <div className='rounded-lg mb-10'>
                    <h1 className='text-xl font-bold mb-3'>PLACE ORDER </h1>
                    <div className='px-5 py-5 rounded-md bg-white '>
                        <div className=' grid gap-4 grid-cols-2 w-full mb-6'> 
                            <input onChange={(e)=>setfname(e.target.value)} className='  px-4 rounded-md border-2 outline-gray-500 transition-all border-gray-300 ' type="text" placeholder='First Name*' />
                            <input onChange={(e)=>setlname(e.target.value)} className=' py-2  px-4 rounded-md border-2 outline-gray-500 transition-all border-gray-300' type="text" placeholder='Last Name*' />                  
                        </div>
                        <div className='flex flex-col w-full space-y-6'>
                            <input onChange={(e)=>settel(e.target.value)} className=' py-2 rounded-md border-2 outline-gray-500 transition-all border-gray-300  px-4'  type="tel" placeholder='telephone*' />
                            <input onChange={(e)=>setadd(e.target.value)} className='py-2 rounded-md border-2 outline-gray-500 transition-all border-gray-300   px-4 ' type="text" placeholder='Address*' /> 
                        </div>
                    </div> 
                </div>
                
                <div className='rounded-lg mb-12'>
                    <h1 className=' text-xl uppercase rounded-md font-bold mb-3'>Order Details </h1>
                    <div className=' flex flex-col space-y-4 px-5 py-5  bg-white rounded-md'>
                        {productsDetails?.map((item,key)=>( 
                            <ProductCommande item={item} key={key} />
                        ))}
                    </div>
                </div>

                <div className='rounded-md'>
                    <h1 className=' text-xl mb-3 rounded-md font-bold '>PAYMENT METHOD </h1>
                    <div className=' bg-white gap-4 grid grid-cols-7 items-center px-5 py-5 rounded-lg'>
                        {image.map((item,key)=>(
                            <button key={key} onClick={()=>setpaymant(item)} className={`${paymant===item ? ' border-black' : ' border-transparent'} border-2 p-2 h-20 w-26 rounded-sm transition-all`} >
                                <img src={item}  className='w-full h-full ' />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <OrderSummery Orderdata={Orderdata} page={"commande"} />
        </main>
        <Footer/>
    </>)
}

export default Commande
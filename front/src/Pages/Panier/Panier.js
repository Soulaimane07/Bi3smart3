import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { BsCartDash } from "react-icons/bs";
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import ProductsPanier from '../../Components/ProductsPanier';
import { useDispatch, useSelector } from 'react-redux';
import { panierActions } from '../../app/Slices/PanierSlices';

function Panier() {
    let image =[
       '../images/visa.svg',
       '../images/discover.svg',
       '../images/maestro.svg',
       '../images/mastercard.svg',
       '../images/paypal.svg',
       '../images/venmo.svg',
    ]

    let products = useSelector((state)=> state.Panier.products)
    let productsSelected = useSelector((state)=> state.Panier.productsSelected)

    const dispatch = useDispatch()
    const price = useSelector(state => state.Panier.price);

    useEffect(()=> {
        dispatch(panierActions.calculePrice());
    }, [dispatch, productsSelected]);
    
    return (
        <>
            <Navbar />
            
            <main className='min-h-screen mt-28 py-8 flex mx-10 space-x-4'>
                <div className='flex-1'>
                    <h1 className=' text-xl mb-4 bg-gray-100 px-10  py-6 rounded-md font-bold '> ALL ITEMS ({products.length})</h1>
                    {products.length === 0 
                        ? 
                            <div className=' bg-gray-100 px-16  py-10 flex justify-center flex-col min-h-screen rounded-md'>
                                <div className=' mx-auto opacity-70 mb-10'> <BsCartDash size={100}/></div>
                                <h1 className='text-xl text-center mb-1 font-bold'>YOUR CART IS EMPTY</h1>
                                <p className='text-center opacity-80'> Connectez-vous pour voir votre panier et commencer vos achats. </p>
                                <Link to='/Products' className='mt-6 w-fit mx-auto text-lg bg-black text-white rounded-md px-20 py-3 hover:scale-105 transition-all'>SHOP NOW</Link>
                            </div>
                        :
                            <ProductsPanier />
                    }
                </div>

                <div className='w-96 h-60 right-0'>
                    <div className=' bg-gray-100 py-6 px-6 mb-4 rounded-md'>
                        <h1 className='text-xl mb-2 font-bold'>Order Summary</h1>
                        <h1 className='text-2xl '> ${price} </h1>
                        <Link to={productsSelected.length!==0 && '/commande'}> 
                            <div className={`bg-black text-white w-full py-2 text-center mt-6 rounded-lg  ${productsSelected.length==0 ? 'opacity-40 cursor-default':'opacity-100  hover:scale-105 transition-all'} `}>
                                Checkout Now ({productsSelected.length})
                            </div>
                        </Link>
                    </div>
                    <div className=' bg-gray-100 px-6 py-4 rounded-md'> 
                        <h1 className='mb-4 font-bold text-lg'>We Accept</h1>
                        <div className=' grid grid-cols-6 items-stretch'>
                            {image.map((item,key)=>(
                                <img key={key} src={item} alt='' className='w-10 h-10 overflow-hidden ' />
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
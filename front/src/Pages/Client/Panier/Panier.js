import React, { useEffect } from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import { BsCartDash } from "react-icons/bs";
import Footer from '../../../Components/Footer/Footer';

import ProductsPanier from '../../../Components/ProductsPanier';
import { useDispatch, useSelector } from 'react-redux';
import { panierActions } from '../../../redux/Slices/PanierSlices';
import OrderSummery from '../../../Components/OrderSummery';
import { authPageActions } from '../../../redux/Slices/AuthSlice';

function Panier() {
    

    let products = useSelector((state)=> state.Panier.products)
    let productsSelected = useSelector((state)=> state.Panier.productsSelected)

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(panierActions.calculePrice());
    }, [dispatch, productsSelected]);
   
    const OpenAuth = () => {
        dispatch(authPageActions.open())
    }
    
    
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
                                <button onClick={OpenAuth} className='mt-6 w-fit mx-auto text-lg bg-blue-500 text-white rounded-md px-14 py-2 hover:scale-105 transition-all'> Sign In  /  Register </button>
                            </div>
                        :
                            <ProductsPanier />
                    }
                </div>
                <OrderSummery Orderdata={null} page={"panier"}/>
            </main>
        
            <Footer />
        </>
  )
}

export default Panier
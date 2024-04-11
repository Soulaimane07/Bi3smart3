import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


function OrderSummery({page,Orderdata}) {
    const condition=Orderdata.fname==="" || Orderdata.lname==="" || Orderdata.tel==="" || Orderdata.add==="" ||Orderdata.paiment===null
    console.log(Orderdata)
    const price = useSelector(state => state.Panier.price); 
    let productsSelected=useSelector((state)=>state.Panier.productsSelected)
  return (
    <div className=' bg-gray-100 py-6 px-6 mb-4 rounded-md'>
                    <h1 className='text-2xl mb-2 font-bold'>Order Summary</h1>
                    <h1 className='text-2xl '>${price}</h1>
                    {page==="panier" &&(
                             <Link to={productsSelected.length!==0 && '/commande'}> 
                            <div className={`bg-black text-white w-full py-2 text-center mt-6 rounded-lg  ${productsSelected.length==0 ? 'opacity-40 cursor-default':'opacity-100  hover:scale-105 transition-all'} `}>
                                Checkout Now ({productsSelected.length})
                            </div>
                             </Link>
                    )}
                    {page==="commande" &&(
                        <button disabled={condition}  className={ `${condition?" opacity-40":" hover:scale-105   "} bg-black text-white w-full py-2 text-center mt-6 rounded-lg transition-all`}> 
                                Order Now 
                        </button>
                    )}

                    
                </div>
  )
}

export default OrderSummery
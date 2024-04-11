import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function OrderSummery({page, Orderdata}) {
    let price = useSelector(state => state.Panier.price); 
    let productsSelected=useSelector((state)=>state.Panier.productsSelected)
    const condition = Orderdata?.fname ==="" || Orderdata?.lname ==="" || Orderdata?.tel ==="" || Orderdata?.add ==="" ||Orderdata?.paiment === null || Orderdata?.products?.length === 0
    

    let image =[
      '../images/visa.svg',
      '../images/discover.svg',
      '../images/maestro.svg',
      '../images/mastercard.svg',
      '../images/paypal.svg',
      '../images/venmo.svg',
   ]


    const [navbar, setNavbar] = useState(false)
    const [y, setY] = useState(0)

    const changebg = () => {
        if(window.scrollY !== 0){
            setNavbar(true);
        } else {
            setNavbar(false)
        }

        if(window.scrollY < y){
            setNavbar(false)
        }
        setY(window.scrollY)
    }

    window.addEventListener('scroll',changebg)


  return (
    <div className={`${navbar ? 'top-6' : 'top-36'} transition-all w-96 h-60 right-0 sticky`}>
    <div className='bg-gray-100 py-6 px-6 mb-4 rounded-md'>
      <div>
        <h1 className='text-2xl mb-2 font-bold'>Order Summary</h1>
        <h2 className='text-2xl'>${price}</h2>
        {page === "panier" &&(
            <Link to={productsSelected.length!==0 && '/commande'}> 
              <div className={`bg-black text-white w-full py-2 text-center mt-6 rounded-lg  ${productsSelected.length==0 ? 'opacity-40 cursor-default':'opacity-100  hover:scale-105 transition-all'} `}>
                Checkout Now ({productsSelected.length})
              </div>
            </Link>
        )}
        {page === "commande" &&
            <button disabled={condition} className={ `${condition ? "opacity-40" : "hover:scale-105"} bg-black text-white w-full py-2 text-center mt-6 rounded-lg transition-all`}> 
              Order Now 
            </button>
        }
      </div>

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
  )
}

export default OrderSummery
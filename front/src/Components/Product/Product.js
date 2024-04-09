import React from 'react'
import { FaHeart } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";


function Product() {
  return (
    <div className=' rounded-sm w-fit  overflow-hidden'>
        <div className='  h-64 relative ' > 
        <img src ="../images/t-shirt-jordan.png"  className='h-full '></img>   
            <div className=' absolute top-1 right-1 flex items-center space-x-1 justify-between w-full px-2 ' >
               <div className='flex items-center space-x-2'> 
                  <p className='text-white text-sm'>10  </p> 
                  <FaHeart color="red" size={14}/> 
                </div>
               <button className=' opacity-70 hover:opacity-100 transition-all'>
                  <BsFillCartPlusFill color='white'  />
               </button> 
            </div>
        </div>
        <div  className='px-2'>
            <h1 className='font-medium text-lg'> products </h1>
            <h2 className='font-bold'>40,00$ </h2>
        </div>  
    </div> 
  )
}

export default Product
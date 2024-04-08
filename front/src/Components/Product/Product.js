import React from 'react'
import { FaHeart } from "react-icons/fa";
function Product() {
  return (
    <div className='bg-gray-500 w-fit'>
        <div className='bg-gray-600 w-48 h-60 relative ' >  
            <div className=' absolute top-1 right-1 flex items-center space-x-1 ' >
                <p className='text-white'>10 </p>
                <FaHeart color="red" size={18}/>
            </div>
        </div>
        <div  className='px-2'>
            <h1> products</h1>
            <h2 >40,00$</h2>
        </div>  
    </div> 
  )
}

export default Product
import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { panierActions } from '../../app/Slices/PanierSlices';
import { GoTrash } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { productActions } from '../../app/Slices/ProductSlice';

function Product({item, favorit}) {
  const dispatch = useDispatch()

  const addToFav = () => {
    dispatch(panierActions.addToFavorites(item))
  }

  const removeFromFav = () => {
    dispatch(panierActions.removeFromFavorites(item.id))
  }

  const OpenProduct = () => {
    dispatch(productActions.open(item))
  }

  const [hover, setHover] = useState(false)

  return (
    <div className=' rounded-sm w-fit mb-6 overflow-hidden  p-2 hover:shadow-xl transition-all'>
        <div className='h-72 relative mb-1' > 
          <button 
            className='h-full'
            onMouseEnter={()=> setHover(true)} 
            onMouseLeave={()=> setHover(false)}
            onClick={OpenProduct}
          >
            <img src ={item.image}  className='h-full rounded-sm'></img>   
          </button>
          

          {favorit
            ?
              <button 
                onClick={removeFromFav} 
                onMouseEnter={()=> setHover(true)} 
                onMouseLeave={()=> setHover(false)}
                title='Remove product from your Wish List' 
                className=' absolute top-1 left-1 transition-all text-black bg-white opacity-80 hover:opacity-100 px-2 rounded-full'
              > 
                {hover 
                  ?
                    <div className='px-3 py-1 text-gray-800'>
                      <GoTrash size={12}  />
                    </div>
                  :
                    <div className='flex items-center space-x-2'>
                      <p className=' text-sm'> 10 </p> 
                      <FaHeart color="red" size={14}/> 
                    </div>
                }
              </button>
            :
              <button 
                onClick={addToFav} 
                onMouseEnter={()=> setHover(true)} 
                onMouseLeave={()=> setHover(false)}
                title='Add product to your Wish List' 
                className=' absolute top-1 left-1 transition-all text-black bg-white opacity-80 hover:opacity-100 px-2 rounded-full'
              > 
                {hover 
                  ?
                    <div className='px-3 py-1 text-gray-800'>
                      <FaPlus size={12}  />
                    </div>
                  :
                    <div className='flex items-center space-x-2'>
                      <p className=' text-sm'> 10 </p> 
                      <FaHeart color="red" size={14}/> 
                    </div>
                }
              </button>
          }
        </div>
        <div  className='px-1'>
          <h1 className='font-medium text-lg'> {item?.title} </h1>
          <div className='flex justify-between items-center'>
            <h2 className='font-bold'> ${item?.price} </h2>
            <button
              onClick={OpenProduct}
              className=' border-2 border-gray-500 px-4 rounded-full py-1 opacity-70 hover:opacity-100 transition-all'
            >
                <BsFillCartPlusFill size={16} />
              </button> 
          </div>
        </div>  
    </div> 
  )
}

export default Product
import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { panierActions } from '../../redux/Slices/PanierSlices';
import { GoTrash } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { productActions } from '../../redux/Slices/ProductSlice';
import { TiPlus } from 'react-icons/ti';
import { MdOutlineRemove } from 'react-icons/md';
import { CiTrash } from 'react-icons/ci';
import { PiHeartStraightFill } from 'react-icons/pi';
import { GetCategorie } from '../Functions';


export function ProductPanier({item}){
  const dispatch = useDispatch()
  const [counter,setcounter]=useState(1)
 
  const [checked, setChecked] = useState(false);


  const Remove = () => {
      dispatch(panierActions.removeProduct(item.productItem.id))
  }

  const selectProduct = () => {
      setChecked(!checked)
      !checked
          ?   dispatch(panierActions.addSelectProduct(item))
          :   dispatch(panierActions.removeSelectProduct(item))
  };

  const addToFav = () => {
      dispatch(panierActions.addToFavorites(item.productItem))
  }
  

  const addQuantite = () => {
      setcounter(counter+1)
      // dispatch(panierActions.addQuantite(item))
  }


  let selectedProducts = useSelector((state)=> state.Panier.productsSelected)

  let selected = selectedProducts.filter(function(itemm) {
      return itemm.productItem.id === item.productItem.id 
  })

 const categorie = GetCategorie(item.productItem.categorie)

 return (
      <div className={`${selected.length !== 0  ? 'bg-blue-100' : 'bg-white'} cursor-pointer transition-all w-full px-2 py-2 flex rounded-md items-stretch`}>
          <img onClick={selectProduct} className='w-36 h-28 rounded-sm' alt='' src={item.productItem.image} />
          <div className=' left text-left  mx-3 w-full flex flex-col'>
              <div onClick={selectProduct} className='pt-2 h-full'> 
                  <h1 className='text-xl'> {item.productItem.titre} </h1>
                  <h1 className='text-sm'> Categorie: {categorie.titre} </h1>
                  <h1 className='text-sm'> Size: {item.size} </h1>
                  <h2 className=' text-lg font-bold'> ${item.productItem.prix}</h2>
              </div>
          
              <div className=' cursor-default flex space-x-2 justify-end  items-center mt-3'>
                  <div className='flex'>
                      <button onClick={addQuantite} className=' border-2 rounded-l-lg px-2'>
                          <TiPlus />
                      </button>
                      <h1 className=' border-t-2 border-b-2 px-2'>{counter}</h1>
                      <button disabled={counter===1} onClick={()=>setcounter(counter-1)  } className={` border-2 rounded-r-lg px-2 ${counter===1 && 'opacity-40'}`}>
                          <MdOutlineRemove />
                      </button>
                  </div>
                  <button onClick={Remove} className=' opacity-40 hover:opacity-100 transition-all '>
                      <CiTrash size={25} />
                  </button>
                  <button onClick={addToFav}
                      className='opacity-20 hover:text-red-500 hover:opacity-100  transition-all'
                  >
                      <PiHeartStraightFill size={25}/>
                  </button>
              </div> 
          </div>
      </div>
 )
}

export function Product({item, favorit}) {
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
            <img src ={item.image}  className='h-full rounded-sm' alt='product' />  
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
          <h1 className='font-medium text-lg'> {item?.titre} </h1>
          <div className='flex justify-between items-center'>
            <h2 className='font-bold'> ${item?.prix} </h2>
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
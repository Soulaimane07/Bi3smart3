import React, { useState } from 'react';
import { TiPlus } from "react-icons/ti";
import { MdOutlineRemove } from "react-icons/md";
import { PiHeartStraightFill } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { panierActions } from '../app/Slices/PanierSlices';
import { CiTrash } from "react-icons/ci";

function Product({item}){
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
        return itemm.productItem.id == item.productItem.id 
    })

 
   return (
        <div className={`${selected.length !== 0  ? 'bg-blue-100' : 'bg-white'} cursor-pointer transition-all w-full px-2 py-2 flex rounded-md items-stretch`}>
            <img onClick={selectProduct} className='w-36 h-28 rounded-sm' alt='' src={item.productItem.image} />
            <div className=' left text-left  mx-3 w-full flex flex-col'>
                <div onClick={selectProduct} className='pt-2 h-full'> 
                    <h1 className='text-xl'> {item.productItem.title} </h1>
                    <h2 className=' text-lg font-bold'> ${item.productItem.price}</h2>
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

function ProductsPanier() {
    let products = useSelector((state)=> state.Panier.products)

  return (
    <div className=' bg-gray-100 px-4 py-4 flex-col space-y-2 rounded-md'>
        {products.map((item,key)=>(
            <Product key={key} item={item} />
        ))}
    </div>
  )
}

export default ProductsPanier
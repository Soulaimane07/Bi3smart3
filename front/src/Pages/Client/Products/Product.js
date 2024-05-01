import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sizes } from '../../../Components/Functions';
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsBox2 } from "react-icons/bs";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { productActions } from '../../../redux/Slices/ProductSlice';
import { panierActions } from '../../../redux/Slices/PanierSlices';
import { authPageActions } from '../../../redux/Slices/AuthSlice';

function Product() {
    const productItem = useSelector(state => state.ProductPage.product)
    const [size, setSize] = useState(null)

    const condition = !productItem | size === null

    const selectedProduct = {
        productItem,
        size
    } 
    
    const dispatch = useDispatch()
    
    const closeProduct = () => {
        dispatch(productActions.close())
    }




    let userId= useSelector(state => state.User.data?.id)

    const AddCart = () => {
        if(userId === undefined){
            dispatch(authPageActions.open())
        }else{
            // let fav = {
            //     userId: userId,
            //     productId: item.id
            // }
        
            // axios.post('http://127.0.0.1:8000/api/favoris/', fav)
            //     .then((res)=> {
            //         dispatch(getFavorits(userId))
            //         dispatch(getProducts())
            //         dispatch(getProductsByCategorie(item.categorie))
            // })
            // .catch((err)=> {
            //     console.log(err);
            // })
        }
    }

    // const addCart = () => {
    //     dispatch(panierActions.addProduct(selectedProduct))
    //     closeProduct()
    // }



  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 transition-all w-full h-full z-40 mx-0 flex justify-center items-center'>
        <div className='relative flex items-stretch space-x-6 bg-white text-black h-fit w-1/2 rounded-lg py-10 px-10'>
            
            <div className='w-1/2 rounded-md overflow-hidden'>
                <img src={productItem.image} alt='' className='w-full h-full' />
            </div>
            <div className='flex-1 flex flex-col clear-start'>
                <div className='flex-1 h-full'>
                    <h1 className='text-2xl font-medium'> {productItem.titre} </h1>
                    <h2 className='text-2xl font-bold mt-2'> ${productItem.prix} </h2>
                    <div className='border-t-2 py-2 border-dotted mt-6'>
                        <h1> Size </h1>  
                        <div className='flex items-center justify-between space-x-4 mt-1'>
                            {sizes.map((item,key)=>(
                                <button 
                                    key={key} 
                                    onClick={()=> setSize(item)} 
                                    className={`${item === size && 'border-black'} w-full py-1 border-2 transition-all hover:border-black rounded-full`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='bg-gray-100 py-2 px-4 rounded-md mt-6 mb-6'>
                        <div className='flex opacity-70  py-1 rounded-md items-center space-x-3'>
                            <LiaShippingFastSolid size={20} color='green' />
                            <h1 className='  text-sm'> Free Shipping </h1>
                        </div>
                        <div className='flex opacity-70 py-1 rounded-md items-center space-x-3'>
                            <HiOutlineInboxArrowDown size={20} color='green' />
                            <h1 className='  text-sm'> Free Return & Exchange </h1>
                        </div>
                        <div className='flex opacity-70 py-1 rounded-md items-center space-x-3'>
                            <BsBox2 size={20} color='green' />
                            <h1 className='  text-sm'> Sold by Bi3Smart </h1>
                        </div>
                    </div>
                </div>

                <button
                    onClick={AddCart}
                    disabled={condition}
                    className={`${condition ? 'opacity-40' : 'opacity-100 hover:scale-105'} transition-all uppercase text-md bg-blue-600 w-full text-white py-2.5 rounded-md`}
                > Add to cart </button>
            </div>
            
            <button onClick={closeProduct} className=' absolute top-4 right-10 hover:scale-110 opacity-70  transition-all'>
                <IoClose size={24} />
            </button>
        </div>
    </div>
  )
}

export default Product
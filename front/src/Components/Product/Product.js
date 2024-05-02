import React, { useState } from 'react'
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { getPanier, panierActions } from '../../redux/Slices/PanierSlices';
import { getProducts, productActions } from '../../redux/Slices/ProductSlice';
import { TiPlus } from 'react-icons/ti';
import { MdOutlineRemove } from 'react-icons/md';
import { CiTrash } from 'react-icons/ci';
import { PiHeartStraightFill } from 'react-icons/pi';
import { GetCategorie, apiUrl } from '../Functions';
import Favorits from './Components/Favorits';
import { authPageActions } from '../../redux/Slices/AuthSlice';
import axios from 'axios';
import { getFavorits } from '../../redux/Slices/FavoritsSlice';


export function ProductPanier({item}){
  const dispatch = useDispatch()
  const [counter,setcounter]=useState(item?.quantite)
 
  const [checked, setChecked] = useState(false);


  const Remove = () => {
      axios.delete(`http://127.0.0.1:8000/api/panierpk/${item.id}/`)
        .then((res)=> {
          dispatch(getPanier(item?.userId))
          dispatch(panierActions.removeSelectProduct(item.id))
        })
        .catch((err)=> {
          console.error(err);
        })
  }

  const selectProduct = () => {
      setChecked(!checked)
      !checked
          ?   dispatch(panierActions.addSelectProduct(item.id))
          :   dispatch(panierActions.removeSelectProduct(item.id))
  };


  let userId= useSelector(state => state.User.data?.id)

  const addToFav = () => {
      if(userId === undefined){
        dispatch(authPageActions.open())
      }else{
          let fav = {
              userId: userId,
              productId: item.productId.id
          }
      
          axios.post('http://127.0.0.1:8000/api/favoris/', fav)
              .then((res)=> {
                  dispatch(getFavorits(userId))
                  dispatch(getProducts())
          })
          .catch((err)=> {
              console.log(err);
          })
      }
  }
  
  const addQuantite = () => {
    setcounter(counter+1)

    let quantite = counter + 1

    axios.patch(`http://127.0.0.1:8000/api/panierpk/${item?.id}/`, {quantite})
      .then((res)=>{
        dispatch(getPanier(item?.userId))
      })
      .catch((err)=>{
        console.error(err)
      })
  }

  const removeQuantite = () => {
    setcounter(counter-1)

    let quantite = counter - 1

    axios.patch(`http://127.0.0.1:8000/api/panierpk/${item?.id}/`, {quantite})
      .then((res)=>{
        dispatch(getPanier(item?.userId))
      })
      .catch((err)=>{
        console.error(err)
      })
  }


  let selectedProducts = useSelector((state)=> state.Panier.productsSelected)

  let selected = selectedProducts.filter(function(itemm) {
      return itemm === item.id 
  })

 const categorie = GetCategorie(item.productId.categorie)



  



 return (
      <div className={`${selected.length !== 0  ? 'bg-blue-100' : 'bg-white'} cursor-pointer transition-all w-full px-2 py-2 flex rounded-md items-stretch`}>
          <img onClick={selectProduct} className='w-36 h-28 rounded-sm' alt='' src={`${apiUrl}${item.productId.image}`} />
          <div className=' left text-left  mx-3 w-full flex flex-col'>
              <div onClick={selectProduct} className='pt-2 h-full'> 
                  <div className='text-2xl font-medium flex items-center space-x-6 mb-1'> 
                    <h1>{item.productId.titre} </h1>
                    <div className='opacity-90 flex items-center'>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded"> {item?.size ?? "size"} </span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded"> {categorie.titre ?? "Categorie"} </span>
                    </div>
                  </div>
                  <h2 className=' text-lg font-bold'> Price: ${item.productId.prix}</h2>
                  <h2 className=' text-lg font-bold'> Total: ${item.productId.prix*item?.quantite}</h2>
              </div>
          
              <div className=' cursor-default flex space-x-2 justify-end  items-center mt-3'>
                  <div className='flex'>
                      <button onClick={addQuantite} className=' border-2 rounded-l-lg px-2'>
                          <TiPlus />
                      </button>
                      <h1 className=' border-t-2 border-b-2 px-2'>{counter}</h1>
                      <button disabled={counter===1} onClick={removeQuantite} className={` border-2 rounded-r-lg px-2 ${counter===1 && 'opacity-40'}`}>
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
          
          <Favorits item={item} hover={hover} setHover={setHover} favorit={favorit} />
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

export const  ProdcutSearch = ({item}) => {
  const dispatch = useDispatch()

  const OpenProduct = () => {
    dispatch(productActions.open(item))
  }

  return (
    <button onClick={OpenProduct} className='flex space-x-2 hover:bg-gray-300 p-2 rounded-md transition-all'>
      <div className='w-20 rounded-md overflow-hidden'>
        <img className='w-20 h-20' src={`http://127.0.0.1:8000/${item.image}`} alt={`image ${item.id}`} />
      </div>
      <div className='flex justify-between flex-1'>
        <h1> {item.titre} </h1>
        <h1> ${item.prix} </h1>
      </div>
    </button>
  )
}
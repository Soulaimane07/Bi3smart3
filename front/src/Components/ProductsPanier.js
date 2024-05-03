import {useDispatch, useSelector } from 'react-redux';
import { ProductPanier } from './Product/Product';
import { useEffect } from 'react';
import { panierActions } from '../redux/Slices/PanierSlices';

function ProductsPanier() {
    const dispatch = useDispatch()
    let products = useSelector((state)=> state.Panier.products)
    let selectedProducts = useSelector((state)=> state.Panier.productsSelected)

    useEffect(()=>{
        let productsDetails = []
        let price = 0
  
        selectedProducts?.map((item,key)=>(
          productsDetails = [...products?.filter((itemm)=> itemm.id == item), ...productsDetails]
        ))
  
        productsDetails?.map((item,key)=>(
          price = item.quantite * item.prix + price
        ))
  
        dispatch(panierActions.setPrice(price))

        console.log(productsDetails);
    }, [selectedProducts, products])
    

    return (
    <div className=' bg-gray-100 px-4 py-4 flex-col space-y-2 rounded-md'>
        {products?.map((item,key)=>(
            <ProductPanier key={key} item={item} />
        ))}
    </div>
  )
}

export default ProductsPanier
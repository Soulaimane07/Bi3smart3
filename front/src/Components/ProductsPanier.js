import {useSelector } from 'react-redux';
import { ProductPanier } from './Product/Product';



function ProductsPanier() {
    let products = useSelector((state)=> state.Panier.products)

  return (
    <div className=' bg-gray-100 px-4 py-4 flex-col space-y-2 rounded-md'>
        {products.map((item,key)=>(
            <ProductPanier key={key} item={item} />
        ))}
    </div>
  )
}

export default ProductsPanier
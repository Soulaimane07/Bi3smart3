import { GetProducts} from '../../Components/Functions'
import {Product} from '../../Components/Product/Product'


function Products() {
    const products = GetProducts()

  return (
    <div className='mt-28'>
        <h1 className='text-center font-medium text-3xl'> Trending Products </h1>
        
        <div className="grid grid-cols-4 gap-1 px-40 mb-16 mt-10">
            {products?.map((item,key)=>(
                <Product item={item} key={key} />
            ))}
        </div>
    </div>
  )
}

export default Products
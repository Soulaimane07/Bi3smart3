import { Link } from 'react-router-dom'
import { products } from '../../Components/Functions'
import Product from '../../Components/Product/Product'

function Products() {
  return (
    <div className='mt-28'>
        <h1 className='text-center font-medium text-3xl'> Trending Products </h1>
        
        <div className="grid grid-cols-4 gap-1 px-40 mb-16 mt-10">
            {products?.map((item,key)=>(
                <Product item={item} key={key} />
            ))}
        </div>

        {/* <div className='flex justify-center'>
            <Link 
                to="/products" 
                className='bg-blue-500 transition-all hover:scale-110 text-white w-fit px-14 rounded-lg py-2 mx-auto'
            > Explore Now </Link>
        </div> */}
    </div>
  )
}

export default Products
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Products() {
    const [products, setProducts] = useState([])

    // useEffect(()=>{
    //     try {
    //         fetch('https://fakestoreapi.com/products?limit=12')
    //             .then(res=>res.json())
    //             .then(json=>setProducts(json))
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }, [])

    console.log(products);

  return (
    <div className='mt-28'>
        <h1 className='text-center font-medium text-3xl'> Trending Products </h1>
        
        <div className="grid grid-cols-4 gap-6 px-20 mb-16 mt-10">
            {products?.map((item,key)=>(
                <Link key={key} to={`/products/${key}`} className='mb-8'>
                    <div style={{ backgroundImage: `url(${item.image})` }} className='Image w-full h-44  rounded-md overflow-hidden' key={key}>
                    </div>
                    <div className='px-2'>
                        <div className='flex justify-between items-center mt-3'>
                            <h1 className='font-medium text-lg'> {item.title} </h1>
                            <h1 className='mt-0 opacity-80'> Price ${item.price} </h1>
                        </div>
                        <h1 className='opacity-80'> {item.category} </h1>
                    </div>
                </Link>
            ))}
        </div>

        <div className='flex justify-center'>
            <Link to="/products" className='bg-gray-800 text-white w-fit px-14 rounded-lg py-2 mx-auto'> Explore Now </Link>
        </div>
    </div>
  )
}

export default Products
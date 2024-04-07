import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function SearchZone() {
    let searchTerm = useSelector(state => state.Search)
    
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }, [searchTerm])
        

  return (
    <div className='Search z-10 absolute overflow-y-scroll bg-gray-600 px-2 py-2 right-0 top-0 mt-11 w-full h-96 rounded-md'>
        <ul>
            {products?.map((item,key)=>(
                <Link to={`/product/${item.id}`} key={key}>
                    <div className='py-2 flex items-start space-x-2 rounded-md px-4 mb-2 hover:bg-gray-500 transition-all'>
                        <img src={item.image} alt={`product ${key+1}`} className='w-10' />
                        <div>
                            <h1> {item.title} </h1>
                            <h2> ${item.price} </h2>
                        </div>
                    </div>
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default SearchZone
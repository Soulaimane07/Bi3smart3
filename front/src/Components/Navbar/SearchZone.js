import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProdcutSearch } from '../Product/Product';

function SearchZone() {
    let searchTerm = useSelector(state => state.Search)
    
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/products/')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }, [searchTerm])
        

  return (
    <div className='Search z-10 absolute overflow-y-scroll bg-gray-200 px-2 py-2 right-0 top-0 mt-11 w-full h-96 rounded-md'>
        <ul className='flex flex-col space-y-2'>
            {products?.map((item,key)=>(
                <ProdcutSearch item={item} key={key} />
            ))}
        </ul>
    </div>
  )
}

export default SearchZone
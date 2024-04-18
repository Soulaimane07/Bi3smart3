import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Categorie() {
    const [categories, setCategories] = useState([])

    useEffect(()=> {
        axios.get(" http://127.0.0.1:8000/api/categorie/")
            .then(res=> {
                console.log(res.data);
                setCategories(res.data)
            })
    }, [])


  return (
    <nav className='Scroll relative mt-2 flex justify-center space-x-1 min-h-10'>
    {categories?.map((item,key)=>(
        <Link to={`/categorie/${item.id}`} key={key} className='px-8 py-1.5 rounded-sm hover:bg-blue-500 hover:text-white transition-all '>
            {item.titre}
        </Link>
    ))}
</nav>
  )
}

export default Categorie
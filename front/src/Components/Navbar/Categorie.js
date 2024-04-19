import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { GetCategorie, GetCategories } from '../Functions';

function Categorie() {
    const data = GetCategories()



  return (
    <nav className='Scroll relative mt-2 flex justify-center space-x-1 min-h-10'>
    {data?.map((item,key)=>(
        <Link to={`/categorie/${item.id}`} key={key} className='px-8 py-1.5 rounded-sm hover:bg-blue-500 hover:text-white transition-all '>
            {item.titre}
        </Link>
    ))}
</nav>
  )
}

export default Categorie
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios';
import { GetCategorie, GetCategories } from '../Functions';

function Categorie() {
    const data = GetCategories()



  return (
    <nav className='Scroll relative mt-2 flex justify-center space-x-1 min-h-10'>
    {data?.map((item,key)=>(
        <NavLink 
          key={key}
          to={`/categorie/${item.id}`} 
          className={({ isActive }) =>
            isActive ? " hover:bg-blue-400 transition-all text-white bg-blue-500 px-8 py-1.5" : "px-8 py-1.5 rounded-sm hover:bg-blue-400 hover:text-white transition-all"
          }  
        >
            {item.titre}
        </NavLink>
    ))}
</nav>
  )
}

export default Categorie
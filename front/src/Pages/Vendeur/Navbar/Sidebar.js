import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  const liste = [
    {
      "title": "Profile",
      "link":"/vendeur/profile",
      "icon": "../images/menu.png",
    },
    {
      "title":"Products",
      "link":"/vendeur/products",
      "icon": "../images/products.png",
    },
    {
      "title":"Categories",
      "link":"/vendeur/categories",
      "icon": "../images/categories.png",
    }
  ]

  return (
    <nav aria-label='nav-2' className='w-60 px-6 py-2 flex flex-col space-y-2 mt-1'>
      {liste?.map((item,key)=>(
        <NavLink 
          className={({ isActive }) =>
            isActive ? " hover:bg-blue-100 transition-all text-blue-600 border-r-2 border-r-blue-600" : "hover:bg-blue-100  transition-all border-r-2 border-transparent"
          }  
          to={item.link} 
          key={key}
        > 
          <div className='transition-all px-4 py-2  flex items-center space-x-2'>
            <img className='w-6' src={item.icon} />
            <h1> {item.title} </h1> 
          </div>
        </NavLink>
      ))}
    </nav>
  )
}

export default Sidebar
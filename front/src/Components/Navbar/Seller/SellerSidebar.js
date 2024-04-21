import React from 'react'
import { NavLink } from 'react-router-dom'

function SellerSidebar() {
  const liste = [
    {
      "title": "Profile",
      "link":"/seller/profile",
      "icon": "../images/menu.png",
    },
    {
      "title":"Products",
      "link":"/seller/products",
      "icon": "../images/products.png",
    },
    {
      "title":"Categories",
      "link":"/seller/categories",
      "icon": "../images/categories.png",
    }
  ]

  return (
    <nav aria-label='nav-2' className='w-60 flex flex-col space-y-2 mt-1'>
      {liste?.map((item,key)=>(
        <NavLink 
          className={({ isActive }) =>
            isActive ? " hover:bg-blue-100 transition-all text-blue-600 border-r-2 border-r-blue-600" : "hover:bg-blue-100  transition-all border-r-2 border-transparent"
          }  
          to={item.link} 
          key={key}
        > 
          <div className='transition-all px-8 py-2  flex items-center space-x-2'>
            <img className='w-6' src={item.icon} />
            <h1> {item.title} </h1> 
          </div>
        </NavLink>
      ))}
    </nav>
  )
}

export default SellerSidebar
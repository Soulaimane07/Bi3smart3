import React from 'react'
import { Link } from 'react-router-dom'

function Boxs() {
    const list =[
        {
            image: "../images/products.png",
            title: "Products",
            link: "/products"
        },
        {
            image: "../images/categories.png",
            title: "Catrgories",
            link: "/categories"
        },
    ]

  return (
    <div className='flex flex-row mt-6 space-x-4'>
        {list.map((item,key)=>(
            <div key={key} class="w-full  p-6 bg-white border border-gray-200 rounded-lg shadow">
                <Link to={item.link} className='flex items-center space-x-2'>
                    <img src={item.image} alt='logo' className='w-10' />
                    <h5 class=" text-2xl font-medium tracking-tight text-gray-900"> {item.title} </h5>
                </Link>
                <Link to={item.link} class="mt-2 w-full inline-flex font-medium items-center text-blue-600 hover:underline">
                    See All
                    <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default Boxs
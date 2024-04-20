import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Sidebar() {
    const [filter, setFilter] = useState(0)

    const Filters = [
        {
            "title":"Users",
            "body": ""
        },
        {
            "title":"Categories",
            "body": ""
        },
        {
            "title":"Product",
            "body": ""
        }
    ]


    const [navbar, setNavbar] = useState(false)
    const [y, setY] = useState(0)

    const changebg = () => {
        if(window.scrollY !== 0){
            setNavbar(true);
        } else {
            setNavbar(false)
        }

        if(window.scrollY < y){
            setNavbar(false)
        }
        setY(window.scrollY)
    }

    window.addEventListener('scroll',changebg)

  return (
    <div className={`${navbar ? 'top-0' : 'top-20'} transition-all w-1/6 h-full py-4 sticky`}>
        <h1 className='text-center text-2xl'> Dashboard</h1>
        <div className='px-8'>
            {Filters.map((item,key)=>(
                <div className='mt-4' key={key}>
                    <button onClick={()=> setFilter(filter === key+1 ? 0 : key+1)} className='flex justify-between items-center w-full'>
                        <h1 className='mb-2 text-lg font-medium'> {item.title} </h1>
                    </button>
                    
                    {filter === key+1 && item.body}
                </div>
            ))}
        </div>
           
          
        
        
    </div>
  )
}


export default Sidebar
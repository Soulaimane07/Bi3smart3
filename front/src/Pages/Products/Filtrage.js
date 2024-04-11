import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";
import Categories from './Filters/Categories';

function Filtrage() {
    const [filter, setFilter] = useState(0)

    const Filters = [
        {
            "title":"Categorie",
            "body": <Categories />
        },
        {
            "title":"Categorie",
            "body": <Categories />
        }
    ]

  return (
    <div className=' w-1/6 h-full py-6 sticky top-36 '>
        <h1 className='text-center font-medium text-2xl'> Filtrer</h1>

        <div className='px-8'>
            {Filters.map((item,key)=>(
                <div className='mt-4' key={key}>
                    <button onClick={()=> setFilter(filter === key+1 ? 0 : key+1)} className='flex justify-between items-center w-full'>
                        <h1 className='mb-2 text-lg font-medium'> {item.title} </h1>
                        <p> {filter === key+1 ? <FaMinus /> : <FaPlus />}   </p>
                    </button>
                    
                    {filter === key+1 && item.body}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Filtrage
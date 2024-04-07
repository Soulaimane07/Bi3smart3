import React from 'react'
import { FaPlus } from "react-icons/fa6";

function Categories({show}) {
    let list = [1,2,3,4,5,6]

  return (
    <div className={`bg-red-600 hidden ${show && 'inline'}`}>
        <ul className='flex flex-col space-y-1'>
            {list.map((item,key)=>(
                <li key={key}>
                    <input type='radio' />
                    <label> Item {key+1} </label>
                </li>
            ))}
        </ul>
        <button className='flex items-center mt-4 w-full space-x-2 justify-center'> 
            <FaPlus />
            <p> View More </p>
        </button>
    </div>
  )
}

export default Categories
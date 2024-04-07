import React from 'react'
import { Link } from 'react-router-dom'

function Categories() {
    const data = [1,2,3,4,5,6,7,8]
    
    return (
        <div className='mt-28'>
            <h1 className='text-center font-medium text-3xl'> Popular Categories </h1>
            <div className='flex justify-between mt-10 px-20'>
                {data?.map((item,key)=>(
                    <Link key={key} to={`/categories/${key}`}>
                        <div className='w-32 h-32 bg-gray-400 rounded-full' key={key}>
                        </div>
                        <h1 className='text-center mt-3'> Categorie {key+1} </h1>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Categories
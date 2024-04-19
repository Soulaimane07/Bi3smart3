import React from 'react'
import { Link } from 'react-router-dom'
import { GetCategorie, GetCategories } from '../../Components/Functions'

function Categories() {
    const data = GetCategories()
    console.log(data);
    
    return (
        <div className='mt-28'>
            <h1 className='text-center font-medium text-3xl'> Popular Categories </h1>
            <div className='flex justify-between mt-10 px-20'>
                {data?.map((item,key)=>(
                    <Link key={key} to={`/categorie/${key}`}>
                        <div className='w-32 h-32  rounded-full' key={key}>
                            <img src={item.image} className='w-full' alt='' />
                        </div>
                        <h1 className='text-center mt-3'> {item.titre}</h1>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Categories
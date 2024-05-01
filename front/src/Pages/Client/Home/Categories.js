import React from 'react'
import { Link } from 'react-router-dom'
import { GetCategories } from '../../../Components/Functions'
import { CategorieSkeletonList } from '../../../Components/Skeletons'

function Categories() {
    let data = GetCategories()
    
    return (
        <div className='mt-28'>
            <h1 className='text-center font-medium text-3xl'> Popular Categories </h1>
            <div className='flex justify-center mt-10 px-20 space-x-6'>
                {data.length === 0
                    ? 
                        <CategorieSkeletonList />
                    :
                        data?.map((item,key)=>(
                            <Link key={key} to={`/categorie/${item.titre.toLowerCase()}`}>
                                <div className='w-32 h-32  rounded-full overflow-hidden hover:scale-110 transition-all' key={key}>
                                    <img src={item.image} className='w-full' alt='' />
                                </div>
                                <h1 className='text-center mt-3'> {item.titre}</h1>
                            </Link>
                        ))
                } 
            </div>
        </div>
    )
}

export default Categories
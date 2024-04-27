import React from 'react'
import { CiTrash } from 'react-icons/ci';
import { BiEditAlt } from "react-icons/bi";
import { IoAdd } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { GetProducts } from '../../../Components/Functions';

function Product() {
  const Products = GetProducts()
  console.log(Products)
  return (
    
    <>
     <div className=' w-5/6 border-l-2   border-gray-100 min-h-svh'>
     <header className='w-5/6 mb-8 mx-20 justify-between flex text-center'>
                <h1 className='text-2xl font-medium'> Products ({Products?.length}) </h1>
                <Link to={"../admin/AddProduct"} className='flex items-center px-6 border-2 bg-blue-600 text-white border-blue-600 hover:text-blue-700 hover:bg-white transition-all  rounded-sm py-2 space-x-1'> 
                    <IoAdd size={20} />
                    <p> Product </p>
                </Link>
            </header>
            <div className=' px-20 text-center'>
          

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Id
                </th>
                <th scope="col" class="px-6 py-3">
                    titre
                </th>
                <th scope="col" class="px-6 py-3">
                    prix
                </th>
                <th scope="col" class="px-6 py-3">
                    categorie id
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {Products.map((Product,key)=>(<tr  class="bg-white border-b ">
                <th  scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {Product.id}
                </th>
                <td class="px-6 py-4">
                    {Product.titre}
                </td>
                <td class="px-6 py-4">
                {Product.prix}
                </td>
                <td class="px-6 py-4">
                {Product.categorie}
                </td>
                <td class="px-6 py-4 ">
                <Link to={"/Admin/edituser" }>
                <button  className=' opacity-40 hover:opacity-100 hover:text-blue-600 transition-all mr-4 '>
                    <BiEditAlt size={25} />
                </button>
                </Link>
                <button  className=' opacity-40 hover:opacity-100 hover:text-red-600 transition-all '>
                    <CiTrash size={25} />
                </button>
                </td>
                
            </tr>))}
            
        </tbody>
    </table>
</div>

            </div>
        </div>
    </>
  )
}

export default Product
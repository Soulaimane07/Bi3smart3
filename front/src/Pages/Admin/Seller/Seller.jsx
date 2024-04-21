import React from 'react'
import { GetSellers } from '../../../Components/Functions'
import { CiTrash } from 'react-icons/ci';
import { BiEditAlt } from "react-icons/bi";
import { IoAdd } from "react-icons/io5";
import { Link } from 'react-router-dom';
function Seller() {
    const Sellers = GetSellers()
  return (
   
    <>
    <div className='w-5/6 border-l-2   border-gray-100 min-h-svh'>
    <h1 className=' text-3xl  font-medium px-10  py-2 rounded-md'> Sellers </h1>
       <div className=' w-11/12   justify-end  items-center -mt-20 text-xl mb-4 px-10  py-6 rounded-md font-bold flex '>
           <Link to={"/Admin/addseller" }>
           <button  className=' hover:text-green-800 p-1 transition-all mr-4 '>
               <IoAdd size={40} />
           </button>
           </Link>
       </div>
           
           <div className=' px-20 text-center'>
         

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
   <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
       <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
           <tr>
               <th scope="col" class="px-6 py-3">
                   Id
               </th>
               <th scope="col" class="px-6 py-3">
                   status
               </th>
               <th scope="col" class="px-6 py-3">
                   userLD iD
               </th>
              
           </tr>
       </thead>
       <tbody>
           {Sellers.map((Seller)=>(<tr  class="bg-white border-b ">
               <th  scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                   {Seller.id}
               </th>
               <td class="px-6 py-4">
                   {Seller.status}
               </td>
               <td class="px-6 py-4">
               {Seller.userld_id}
               </td>
               <td class="px-6 py-4 ">
               <Link to={"/Admin/editseller" }>
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

export default Seller
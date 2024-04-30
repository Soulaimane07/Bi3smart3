import React from 'react'
import Sidebar from '../../../Components/Navbar/Sidebar'
import { Link } from 'react-router-dom'
import Footer from '../../../Components/Footer/Footer'
import SellerNavbar from '../../../Components/Navbar/Seller/SellerNavbar'
import { GetUsers,GetProducts,GetCategories } from '../../../Components/Functions';
function Dashboard() {
    const users = GetUsers()
    const products = GetProducts()
    const categories = GetCategories()
    const list =[
        {
            image: "../images/user.png",
            title: "Users",
            stats:users?.length,
            link:"../../admin/readuser"
           
        },
        {
            image: "../images/products.png",
            title: "Products",
            stats: products?.length,
            link:"../../admin/readproduct"
        },
        {
            image: "../images/categories.png",
            title: "Catrgories",
            stats: categories?.length,
            link:"../../admin/readcategorie"
           
           
        },
        
    ]
    
  return (
    <>

    <SellerNavbar />
    
    <main className='min-h-screen mt-28 flex items-start'>
    <Sidebar />
    <div className='flex w-4/5  ml-10 mt-6 space-x-4'>
        {list.map((item,key)=>(
            <div key={key} className="w-full h-34  p-6 bg-white border border-gray-200 rounded-lg shadow">
                <Link to={item.link} className='flex items-center w-68 space-x-2'>
                    <img src={item.image} alt='logo' className='w-10' />
                    <h5 className=" text-2xl font-medium tracking-tight text-gray-900"> {item.title} </h5>
                    <h5 className=" text-2xl font-medium tracking-tight text-gray-900"> ( {item.stats} ) </h5>
                </Link>
                
            </div>
        ))}
    </div>
        </main>
    <Footer />
    </>
  )
}

export default Dashboard
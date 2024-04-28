import React from 'react'
import Sidebar from '../../../Components/Navbar/Sidebar'
import { Link } from 'react-router-dom'
import Footer from '../../../Components/Footer/Footer'
import SellerNavbar from '../../../Components/Navbar/Seller/SellerNavbar'

function Dashboard() {
    const list =[
        {
            image: "../images/products.png",
            title: "Products",
            stats: "",
           
        },
        {
            image: "../images/categories.png",
            title: "Catrgories",
           
        },
    ]
    
  return (
    <>

    <SellerNavbar />
    
    <main className='min-h-screen mt-28 flex items-start'>
    <Sidebar />
    <div className='flex flex-row mt-6 space-x-4'>
        {list.map((item,key)=>(
            <div key={key} className="w-full  p-6 bg-white border border-gray-200 rounded-lg shadow">
                <Link to={item.link} className='flex items-center space-x-2'>
                    <img src={item.image} alt='logo' className='w-10' />
                    <h5 className=" text-2xl font-medium tracking-tight text-gray-900"> {item.title} </h5>
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
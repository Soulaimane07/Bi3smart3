import React, { useEffect, useState } from 'react'
import { CiSearch, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { TfiAngleDown } from "react-icons/tfi";
import Profile from './Profile';
import SearchZone from './SearchZone';
import { useDispatch, useSelector } from 'react-redux';
import { searchActions } from '../../app/Slices/SearchSlice';
import { authPageActions } from '../../app/Slices/AuthSlice';

function Navbar() {
    const pages = [
        {
            "title": "Home",
            "link": "/"
        },
        {
            "title": "",
            "link": ""
        },
        {
            "title": "Products",
            "link": "/products"
        },
        {
            "title": "Contact",
            "link": "/contact"
        },
    ]

    const [openProfile, setOpenProfile] = useState(false)


    let openedSearch = useSelector(state => state.Search.opened)
    const dispatch = useDispatch()

    const [searchTerm, setSearchTerm] = useState('')
    useEffect(()=> {
        dispatch(searchActions.search(searchTerm))
    }, [searchTerm])



    const [categories, setCategories] = useState([1,1,1,1])

    // useEffect(()=>{
    //     try {
    //         fetch('https://fakestoreapi.com/products/categories')
    //             .then(res=>res.json())
    //             .then(json=>setCategories(json))
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }, [])


    const [openCat, setOpenCat] = useState(false)


    const isUser = useSelector((state)=> state.User.data)

    const openAuth = () => {
        dispatch(authPageActions.open())
        setOpenProfile(false)
    }


  return (
    <header className='fixed bg-gray-800 overflow-visible top-0 left-0 w-full z-50 text-white px-6 md:px-16'>
        <nav className='relative px-4 pt-4 w-full flex justify-between items-center'>
            <Link to="/"><img className='h-16' src="../images/logo.png" alt="logo" />  </Link>

            <div className='absolute left-0 right-0 mx-auto flex space-x-3 items-center bg-gray-600 rounded-full w-1/3 px-4 py-1'>
                <CiSearch size={24} />
                <input
                    className='bg-transparent w-full outline-none py-1' 
                    placeholder='Search for products' 
                    onChange={(e)=> setSearchTerm(e.target.value)}
                />
                {openedSearch && <SearchZone />}
            </div>

            <div className='flex items-center space-x-4 md:space-x-6'>
                <Link to={"/favorits"} className='relative'> 
                    <CiHeart size={32} /> 
                    <i className='absolute -top-1 -right-2 text-white text-xs bg-blue-400 rounded-full p-1.5 py-0.5'> 0 </i> 
                </Link>

                <Link to="/panier" className='relative'> 
                    <CiShoppingCart size={32} /> 
                    <i className='absolute -top-1 -right-2 text-white text-xs bg-blue-400 rounded-full p-1.5 py-0.5'> 0 </i> 
                </Link>

                {isUser 
                    ?
                        <button 
                            onClick={()=> setOpenProfile(!openProfile)}
                            className={`${openProfile && 'bg-gray-600'} hover:bg-gray-600 p-2 rounded-full transition-all`}
                        > <CiUser size={32} /> </button>
                    :   
                        <button
                            className='border-2 my-1.5 px-6 py-1 rounded-md hover:bg-gray-700 transition-all'
                            onClick={openAuth}
                        > Login </button>
                }
            </div>
        </nav>

        <nav className='Scroll relative mt-2 flex justify-center space-x-1'>
            {pages?.map((item,key)=>(
                key === 1 ?
                    <div className=' relative hover:bg-blue-300 ' key={key}>
                        <button 
                            onMouseEnter={()=> setOpenCat(true)} 
                            onMouseLeave={()=> setOpenCat(false)} 
                            className='px-8 Cat py-1.5 rounded-sm  transition-all  flex items-center space-x-2'
                        >
                            <p> Categorie </p>
                            <TfiAngleDown />
                        </button>
                        <ul 
                            onMouseEnter={()=> setOpenCat(true)} 
                            onMouseLeave={()=> setOpenCat(false)} 
                            className={` ${openCat ? 'CatListA' : 'CatList'} absolute top-10 px-1 py-1 -left-10 w-60 rounded-md   bg-gray-800`}
                        >
                            {categories?.map((item,key)=>(
                                <Link key={key} to={`/categorie/${key+1}`}>
                                    <div className='transition-all rounded-md py-1 px-2 mb-1 hover:bg-blue-300'>
                                        Categorie {key+1}      
                                    </div>
                                </Link>
                            ))}
                        </ul>
                    </div>
                :
                    <Link to={item.link} key={key} className='px-8 py-1.5 rounded-sm hover:bg-blue-300 transition-all '>
                        {item.title}
                    </Link>
            ))}
            
        </nav>

        {openProfile && <Profile close={setOpenProfile} />}
    </header>
  )
}

export default Navbar
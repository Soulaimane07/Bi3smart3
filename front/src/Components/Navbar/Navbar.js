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
    const [openProfile, setOpenProfile] = useState(false)

    let openedSearch = useSelector(state => state.Search.opened)
    const dispatch = useDispatch()

    const [searchTerm, setSearchTerm] = useState('')
    useEffect(()=> {
        dispatch(searchActions.search(searchTerm))
    }, [searchTerm])

    const [categories, setCategories] = useState(["Men","Women","Kids","Shoes"])

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

    let PanierProducts = useSelector((state)=> state.Panier.products.length)




    const [navbar, setNavbar] = useState(false)
    const [y, setY] = useState(0)

    const changebg = () => {
        if(window.scrollY !== 0){
            setNavbar(true);
        } else {
            setNavbar(false)
        }

        if(window.scrollY < y){
            setNavbar(false)
        }
        setY(window.scrollY)
    }

    window.addEventListener('scroll',changebg)

  return (
    <header className={`${navbar ? '-top-32' : 'top-0'} bg-white transition-all fixed border-b-2 overflow-visible top-0 left-0 w-full  z-50 text-black px-6 md:px-16`}>
        <nav className='relative px-4 pt-4 w-full flex justify-between items-center'>
            <Link to="/"><img className='h-16' src="../images/logoblack.png" alt="logo" />  </Link>

            <div className='absolute left-0 right-0 mx-auto flex space-x-3 items-center  bg-gray-200 rounded-full w-1/3 px-4 py-1'>
                <CiSearch size={24} color='black' />
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
                    <i className='absolute -top-1 -right-2 text-white text-xs bg-blue-500 rounded-full p-1.5 py-0.5'> 0 </i> 
                </Link>

                <Link to="/panier" className='relative'> 
                    <CiShoppingCart size={32} /> 
                    <i className='absolute -top-1 -right-2 text-white text-xs bg-blue-500 rounded-full p-1.5 py-0.5'> {PanierProducts} </i> 
                </Link>

                {isUser 
                    ?
                        <button 
                            onClick={()=> setOpenProfile(!openProfile)}
                            className={`${openProfile && 'bg-gray-600'} hover:bg-blue-600 p-2 rounded-full transition-all`}
                        > <CiUser size={32} /> </button>
                    :   
                        <button
                            className='border-2 border-gray-500 my-1.5 px-6 py-1 rounded-md hover:bg-blue-500 hover:border-gray-600 hover:text-white transition-all'
                            onClick={openAuth}
                        > Login </button>
                }
            </div>
        </nav>

        <nav className='Scroll relative mt-2 flex justify-center space-x-1'>
            {categories?.map((item,key)=>(
            
                    <Link to={`/categorie/${key+1}`} key={key} className='px-8 py-1.5 rounded-sm hover:bg-blue-500 hover:text-white transition-all '>
                        {item}
                    </Link>
            ))}
            
        </nav>

        {openProfile && <Profile close={setOpenProfile} />}
    </header>
  )
}

export default Navbar
import React, { useEffect, useState } from 'react'
import { CiSearch, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';

import Profile from './Profile';
import SearchZone from './SearchZone';
import { useDispatch, useSelector } from 'react-redux';
import { searchActions } from '../../redux/Slices/SearchSlice';
import { authPageActions } from '../../redux/Slices/AuthSlice';
import Categorie from './Categorie';


function Navadmin() {
    const [openProfile, setOpenProfile] = useState(false)

    let openedSearch = useSelector(state => state.Search.opened)
    const dispatch = useDispatch()

    const [searchTerm, setSearchTerm] = useState('')
    useEffect(()=> {
        dispatch(searchActions.search(searchTerm))
    }, [searchTerm])

    


    const isUser = useSelector((state)=> state.User.data)

    const openAuth = () => {
        dispatch(authPageActions.open())
        setOpenProfile(false)
    }

    let FavoritesProducts = useSelector((state)=> state.Panier.productsFavorites.length)
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
    <header className={`${navbar ? '-top-32' : 'top-0'} drop-shadow-md bg-white transition-all fixed overflow-visible top-0 left-0 w-full  z-50 text-black pb-5 px-6 md:px-16`}>
        <nav className='relative px-4 pt-4 w-full flex justify-between items-center'>
            <Link to="/"><img className='h-16' src="/../images/logoblack.png" alt="logo" />  </Link>

            <div className='absolute left-0 right-0 mx-auto flex space-x-3 items-center  bg-gray-200 rounded-full w-1/3 px-4 py-1'>
                <div className='text-gray-400'>
                    <CiSearch size={24} />
                </div>
                <input
                    className='bg-transparent w-full outline-none py-1 placeholder:text-gray-400' 
                    placeholder='Search for products' 
                    onChange={(e)=> setSearchTerm(e.target.value)}
                />
                {openedSearch && <SearchZone />}
            </div>

            <div className='flex items-center space-x-4 md:space-x-6'>
                {isUser 
                    ?
                        <button 
                            onClick={()=> setOpenProfile(!openProfile)}
                            className={`${openProfile && 'bg-blue-100'} hover:bg-blue-200 p-2 rounded-full transition-all`}
                        > <CiUser size={32} /> </button>
                    :   
                        <button
                            className='border-2 border-gray-500 my-1.5 px-6 py-1 rounded-md hover:bg-blue-500 hover:border-gray-600 hover:text-white transition-all'
                            onClick={openAuth}
                        > Sign In </button>
                }
            </div>
        </nav>


        {openProfile && <Profile close={setOpenProfile} />}
    </header>
  )
}


export default Navadmin
import React, { useState } from 'react'
import { CiUser } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import Profile from '../../../Components/Navbar/Profile'

function SellerNavbar() {
    const [openProfile, setOpenProfile] = useState(false)

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
    <nav aria-label='nav-1' className={`${navbar ? '-top-32' : 'top-0'} drop-shadow-md bg-white transition-all flex items-center justify-between py-2 fixed overflow-visible w-full  z-50 text-black px-8 pl-20`}>
      <Link to="/"><img className='h-16' src="../images/logoblack.png" alt="logo" />  </Link>

      <button 
        onClick={()=> setOpenProfile(!openProfile)}
        className={` hover:bg-blue-200 p-2 rounded-full transition-all`}
      > <CiUser size={32} /> </button>

      {openProfile && <Profile close={setOpenProfile} /> }
    </nav>
  )
}

export default SellerNavbar
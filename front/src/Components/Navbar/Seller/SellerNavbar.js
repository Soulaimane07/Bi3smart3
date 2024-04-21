import React, { useState } from 'react'
import { CiUser } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import Profile from '../../../Components/Navbar/Profile'

function SellerNavbar() {
    const [openProfile, setOpenProfile] = useState(false)

  return (
    <nav aria-label='nav-1' className=' sticky flex items-center space-x-4 md:space-x-6 justify-between px-20 py-4 '>
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
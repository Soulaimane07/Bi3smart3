import React from 'react'
import Navadmin from '../../../Components/Navbar/Navadmin'
import Sidebar from '../../../Components/Navbar/Sidebar'
import Categorie from './Categorie'
import Footer from '../../../Components/Footer/Footer'

function ReadCategorie() {
  return (
    <>
    <Navadmin />
    
    <main className='min-h-screen mt-28 flex items-start'>
    <Sidebar />
    <Categorie />
        </main>
    <Footer />
    </>
  )
}

export default ReadCategorie
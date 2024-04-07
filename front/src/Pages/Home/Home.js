import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Header from './Header'
import Features from './Features'
import Categories from './Categories'
import Products from './Products'
import Subscribe from './Subscribe'

function Home() {
  return (
    <>
        <header>
            <Navbar />
        </header>

        <main className='min-h-screen mt-36'>
            <Header />
            <Features />
            <Categories />
            <Products />
            <Subscribe />
        </main>

        <Footer />
    </>
  )
}

export default Home
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from '../Pages/Vendeur/Profile/Profile'
import Products from '../Pages/Vendeur/Products/Products'
import Categories from '../Pages/Vendeur/Categories/Categories'

function Vendeur() {
  return (
    <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
    </Routes>
  )
}

export default Vendeur
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Categories from '../Pages/Seller/Categories/Categories'
import Products from '../Pages/Seller/Products/Products'
import Profile from '../Pages/Seller/Profile/Profile'

function Seller() {
  return (
    <Routes>
      <Route path="/seller/categories" element={<Categories />} />
      <Route path="/seller/products" element={<Products />} />
      <Route path="/seller/profile" element={<Profile />} />
    </Routes>
  )
}

export default Seller
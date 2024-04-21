import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Categories from '../Pages/Seller/Categories/Categories'
import Products from '../Pages/Seller/Products/Products'
import Profile from '../Pages/Seller/Profile/Profile'
import AddProduct from '../Pages/Seller/Products/AddProduct'

function Seller() {
  return (
    <Routes>
      <Route path="/seller/profile" element={<Profile />} />
      <Route path="/seller/categories" element={<Categories />} />
      <Route path="/seller/products">
        <Route index element={<Products />}  />
        <Route path='add' element={<AddProduct />}  />
      </Route>
    </Routes>
  )
}

export default Seller
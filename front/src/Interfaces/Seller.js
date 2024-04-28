import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Categories from '../Pages/Seller/Categories/Categories'
import Products from '../Pages/Seller/Products/Products'
import Profile from '../Pages/Seller/Profile/Profile'
import AddProduct from '../Pages/Seller/Products/AddProduct'
import UpdateProduct from '../Pages/Seller/Products/UpdateProduct'
import Layout from '../Components/Layout'
import RequireAuth from '../Components/RequireAuth'

function Seller() {
  return (
    <Routes>
      <Route path='/seller' element={<Layout />}>
        <Route element={<RequireAuth role={'seller'} />}>
          <Route path="dashboard" element={<Profile />} />
          <Route path="categories" element={<Categories />} />
          <Route path="products" element={<Products />} >
            <Route path='add' element={<AddProduct />}  />
            <Route path='update/:id' element={<UpdateProduct />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default Seller
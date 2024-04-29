import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReadUser from '../Pages/Admin/User/ReadUser'
import AddUser from '../Pages/Admin/User/AddUser'
import EditUser from '../Pages/Admin/User/EditUser'
import ReadCategorie from '../Pages/Admin/Categorie/ReadCategorie'
import EditCategorie from '../Pages/Admin/Categorie/EditCategorie'
import AddCategorie from '../Pages/Admin/Categorie/AddCategorie'
import ReadSeller from '../Pages/Admin/Seller/ReadSeller'
import AddSeller from '../Pages/Admin/Seller/AddSeller'
import EditSeller from '../Pages/Admin/Seller/EditSeller'
import EditProduct from '../Pages/Admin/Product/ReadProduct'
import AddProduct from '../Pages/Admin/Product/AddProduct'
import ReadProduct from '../Pages/Admin/Product/ReadProduct'
import Dashboard from '../Pages/Admin/Dashboard/Dashboard'
import Layout from '../Components/Layout'
import RequireAuth from '../Components/RequireAuth'

function Admin() {
  return (
    <Routes>
      <Route path='/admin' element={<Layout />}>
        <Route element={<RequireAuth role={'admin'} />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="readuser" element={<ReadUser />} />
          <Route path="adduser" element={<AddUser />} />
          <Route path="edituser/:id" element={<EditUser />} />
          <Route path="readcategorie" element={<ReadCategorie />} />
          <Route path="addcategorie" element={<AddCategorie />} />
          <Route path="editcategorie/:id" element={<EditCategorie />} />
          <Route path="readProduct" element={<ReadProduct />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="editProduct/:id" element={<EditProduct />} />
          <Route path="readSeller" element={<ReadSeller />} />
          <Route path="addSeller" element={<AddSeller />} />
          <Route path="editSeller/:id" element={<EditSeller />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Admin
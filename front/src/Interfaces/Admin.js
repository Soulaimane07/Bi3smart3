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
function Admin() {
    
  return (
    
    <>
     <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/readuser" element={<ReadUser />} />
        <Route path="/admin/adduser" element={<AddUser />} />
        <Route path="/admin/edituser/:id" element={<EditUser />} />
        <Route path="/admin/readcategorie" element={<ReadCategorie />} />
        <Route path="/admin/addcategorie" element={<AddCategorie />} />
        <Route path="/admin/editcategorie/:id" element={<EditCategorie />} />
        <Route path="/admin/readProduct" element={<ReadProduct />} />
        <Route path="/admin/addProduct" element={<AddProduct />} />
        <Route path="/admin/editProduct/:id" element={<EditProduct />} />
        <Route path="/admin/readSeller" element={<ReadSeller />} />
        <Route path="/admin/addSeller" element={<AddSeller />} />
        <Route path="/admin/editSeller/:id" element={<EditSeller />} />
      </Routes>
</>
  )
}

export default Admin
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReadUser from '../Pages/Admin/User/ReadUser'
import AddUser from '../Pages/Admin/User/AddUser'
import EditUser from '../Pages/Admin/User/EditUser'
import Dashboard from '../Pages/Admin/Dashboard/Dashboard'
import ReadCategorie from '../Pages/Admin/Categorie/ReadCategorie'
import AddCategorie from '../Pages/Admin/Categorie/AddCategorie'
import EditCategorie from '../Pages/Admin/Categorie/EditCategorie'
import ReadProduct from '../Pages/Admin/Product/ReadProduct'
import AddProduct from '../Pages/Admin/Product/AddProduct'
import EditProduct from '../Pages/Admin/Product/EditProduct'
function Admin() {
    
  return (
    
    <>
    <Routes>
    <Route path="/Admin/dashboard" element={<Dashboard />} />
        <Route path="/Admin/readuser" element={<ReadUser />} />
        <Route path="/Admin/adduser" element={<AddUser />} />
        <Route path="/Admin/edituser/:id" element={<EditUser />} />
        <Route path="/Admin/readcategorie" element={<ReadCategorie />} />
        <Route path="/Admin/addcategorie" element={<AddCategorie />} />
        <Route path="/Admin/editcategorie/:id" element={<EditCategorie />} />
        <Route path="/Admin/readProduct" element={<ReadProduct />} />
        <Route path="/Admin/addProduct" element={<AddProduct />} />
        <Route path="/Admin/editProduct/:id" element={<EditProduct />} />
        <Route path="/Admin/readSeller" element={<ReadSeller />} />
        <Route path="/Admin/addSeller" element={<AddSeller />} />
        <Route path="/Admin/editSeller/:id" element={<EditSeller />} />

    </Routes>
</>
  )
}

export default Admin
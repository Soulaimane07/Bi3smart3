import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReadUser from '../Pages/Admin/User/ReadUser'
import AddUser from '../Pages/Admin/User/AddUser'
import EditUser from '../Pages/Admin/User/EditUser'
import Dashboard from '../Pages/Admin/Dashboard/Dashboard'
function Admin() {
    
  return (
    
    <>
    <Routes>
    <Route path="/Admin/dashboard" element={<Dashboard />} />
        <Route path="/Admin/readuser" element={<ReadUser />} />
        <Route path="/Admin/adduser" element={<AddUser />} />
        <Route path="/Admin/edituser/:id" element={<EditUser />} />
    </Routes>
</>
  )
}

export default Admin
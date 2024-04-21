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
      <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/readuser" element={<ReadUser />} />
        <Route path="/admin/adduser" element={<AddUser />} />
        <Route path="/admin/edituser/:id" element={<EditUser />} />
    </Routes>
</>
  )
}

export default Admin
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function RequireAuth({role}) {
    const location = useLocation()
    const user = useSelector(state => state.User.data)

  return (
    user?.role === role
        ? <Outlet />
        : <Navigate to="/" state={{from: location}} replace />

  )
}

export default RequireAuth
import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

function Auth() {
    const [page, setPage] = useState(0)

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 w-full h-full z-50 mx-0 flex justify-center items-center'>        
        {page === 0 ? <Login setPage={setPage} /> : <Signup setPage={setPage} />}
    </div>
  )
}

export default Auth
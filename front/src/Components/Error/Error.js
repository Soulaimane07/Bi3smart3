import React from 'react'
import { IoAlertCircleOutline, IoClose } from "react-icons/io5";

function Error({message, close}) {
  return (
    <div className=' bg-red-500 text-white border border-spacing-2 justify-between w-1/3 transition-all px-4 pr-2 py-2 rounded-sm border-red-500 flex space-x-2 items-center '>
        <div className='flex items-center space-x-2'>
            <IoAlertCircleOutline size={20} />
            <p className=''> {message} </p>
        </div>
        <button onClick={close} className='hover:bg-red-400 transition-all p-2 rounded-md'>
            <IoClose size={20} />
        </button>
    </div>
  )
}

export default Error
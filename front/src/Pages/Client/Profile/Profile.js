import React, { useState } from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import MyInformayion from './MyInformayion'
import { TopPage } from '../../../Components/Functions'

function Profile() {
    TopPage()
    const [component, setComponent] = useState(0)

    const list = [
        {
            "title":"Profile",
            "component": <MyInformayion />
        },
        {
            "title":"Commandes",
            "component": <></>
        }
    ]

  return (
    <>
        <Navbar />

        <main className='min-h-screen mt-32 flex px-20 pt-10'>
            <sidebare className="w-80">
                {list.map((item,key)=>(
                    <button onClick={()=> setComponent(key)} key={key} className={`${component === key && 'text-blue-500 border-r-blue-500 '} hover:text-blue-500 hover:border-r-blue-500  border-2 border-transparent rounded-sm transition-all w-full py-4 text-left px-4`}> {item.title} </button>
                ))}
            </sidebare>

            <section className=' w-full pl-10'>
                {list[component].component}
            </section>
        </main>

        <Footer />
    </>
  )
}

export default Profile
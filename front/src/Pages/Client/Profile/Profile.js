import React, { useEffect, useState } from 'react'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import MyInformayion from './MyInformayion'
import { TopPage } from '../../../Components/Functions'
import Commandes from './Commandes'
import { useSelector } from 'react-redux'
import axios from 'axios'

function Profile() {
    TopPage()

    const user = useSelector(state => state.User?.data)

    const [commandes, setCommandes] = useState([])

    useEffect(()=> {
        axios.get(`http://15.237.160.116:8000/payment/commandes/${user?.id}/`)
            .then((res)=> {
                console.log(res.data);
                setCommandes(res.data)
            })
            .catch((err)=>{
                console.error(err);
            })
    }, [user])



    const [component, setComponent] = useState(0)

    const list = [
        {
            "title":"Profile",
            "component": <MyInformayion />
        },
        {
            "title":"Commandes",
            "component": <Commandes commandes={commandes} />
        }
    ]



    

  return (
    <>
        <Navbar />

        <main className='min-h-screen mt-32 flex px-20 pt-10'>
            <div className="w-80">
                {list.map((item,key)=>(
                    <button onClick={()=> setComponent(key)} key={key} className={`${component === key && 'text-blue-500 border-r-blue-500 '} hover:text-blue-500 flex justify-between items-center hover:border-r-blue-500  border-2 border-transparent rounded-sm transition-all w-full py-4 text-left px-4`}> 
                        <p>{item.title} </p>
                        {key === 1 && <p className='bg-blue-100 px-2 text-sm rounded-full'>{commandes?.length}</p>}
                    </button>
                ))}
            </div>

            <section className=' w-full pl-10'>
                {list[component].component}
            </section>
        </main>

        <Footer />
    </>
  )
}

export default Profile
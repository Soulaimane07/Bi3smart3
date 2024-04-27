import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'
import Filtrage from '../Products/Filtrage'
import {Product} from '../../../Components/Product/Product'
import { GetProducts ,GetProductbyCategorie } from '../../../Components/Functions'
import { useParams } from 'react-router-dom'


export const Categories = () => {
  let parametre=useParams()
  let id = parametre.id
  //console.log(id);
  let list = GetProductbyCategorie(id)


  


  return (
    <>
    <Navbar />
    <main className={` min-h-screen mt-28 flex items-start`}>
        <Filtrage />

        <div className='w-5/6 border-l-2 border-gray-100 min-h-svh'>
            <h1 className=' text-3xl text-center font-medium px-10 mt-4 py-8 rounded-md'> Categorie </h1>
            <div className='grid grid-cols-4 gap-2 px-20 flex-1'>
              {list.map((item,key)=>
                <Product item={item} key={key} />
              )}
            </div>
        </div>
    </main>
    <Footer />
    </>
  )
}

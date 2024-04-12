import React from "react"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import Filtrage from "../Products/Filtrage"
import Product from "../../Components/Product/Product"
import { useSelector, useDispatch } from 'react-redux';
import { authPageActions } from "../../app/Slices/AuthSlice"

function Favorits(){
    let list = useSelector(state => state.Panier.productsFavorites)

    const dispatch = useDispatch()
    const OpenAuth = () => {
        dispatch(authPageActions.open())
    }

    return (<>
        <Navbar/>
        <main className='min-h-screen mt-28 flex items-start'>
            <Filtrage/>

            <div className='w-5/6 border-l-2 border-gray-100 min-h-screen'>
                <h1 className=' text-3xl text-center font-medium px-10 mt-4 py-8 rounded-md'> My WishList</h1>
                
                {list?.length !== 0 ?
                    <div className='grid grid-cols-4 gap-2 px-20 flex-1'>
                        {list.map((item,key)=>
                            <Product item={item} key={key} favorit={true} />
                        )}
                    </div>
                    :
                    <div>
                        <h1 className="text-center mt-1 opacity-80"> You currently have nothing saved to your Wishlist. <br /> Personalize your shopping experience with your Wishlist. </h1>
                    </div>
                }

                <div className="mt-20 flex flex-col justify-center items-center">
                    <h1 className="text-center text-lg font-medium mb-3"> Already have items saved? </h1>
                    <button onClick={OpenAuth} className="border-2 text-blue-500 border-blue-500 uppercase hover:bg-blue-500 transition-all hover:text-white py-2 px-14 w-fit rounded-md"> Sign In  /  Register </button>
                </div>
            </div>
        </main>
        <Footer/>    
    </>)
}
export default Favorits 
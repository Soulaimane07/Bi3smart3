import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { authPageActions } from '../../app/Slices/AuthSlice';
import { UserActions } from '../../app/Slices/UserSlice';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';


function Profile({close}) {
    let request = useSelector(state => state.User.requestSeller)
    let user = useSelector(state => state.User.data)

    const dispatch = useDispatch()
    
    const logout = () => {
        dispatch(UserActions.logout())
        close(false)
    }

    const RequestSeller = () => {
        fetch("http://127.0.0.1:8000/api/sellerrequests/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({userId: user?.id, status: false}),
            })
            .then((response) => response.json())
            .then((data) => {
                dispatch(UserActions.sellerRequest())
            })
            .catch((error) => console.log(error));
    }
    
    return (
        <div className='ProfileBox bg-gray-700 px-6 py-4 absolute right-20 top-20 w-72 rounded-md'>
            {user &&
                <>
                    <button onClick={()=> close(false)} className='absolute top-4 right-4 hover:scale-110 transition-all'><IoCloseOutline size={26} /></button>
                        <div className='flex-1 h-full'>
                            <h1 className='text-center mb-4'> {user.email} </h1>
                            <Link to={"/profile"}>
                                <div className='profileBtn transition-all p-4 bg-gray-500 rounded-full w-fit mx-auto mb-2'>
                                    <div style={{ backgroundImage: `url(../images/user.png)` }} className='w-11 h-11 ImageBG'>
                                    </div>
                                </div>
                            </Link>
                            <h2 className='text-center'> Hi, {user.fname} ! </h2>
                        </div>
                    <button onClick={logout} className='bg-blue-500 w-full py-2 rounded-md mt-6'> Log out </button>
                    {user?.role === "client" &&(
                        request
                            ?   <h1 className='flex items-center text-center justify-center mt-4 space-x-2'> <IoMdCheckmarkCircleOutline size={20} /> <p> Requested to become Seller </p> </h1> 
                            :   <button onClick={RequestSeller} className='bg-white text-gray-900 w-full py-2 rounded-md mt-2'> Request to become Seller </button>
                        )
                    }
                </>
            }
        </div>
    )
}

export default Profile
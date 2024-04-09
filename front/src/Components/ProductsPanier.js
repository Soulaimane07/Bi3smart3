import React, { useState } from 'react';
import { TiPlus } from "react-icons/ti";
import { MdOutlineRemove } from "react-icons/md";
import { PiTrashSimpleThin } from "react-icons/pi";
import { PiHeartStraightFill } from "react-icons/pi";

function Product({price,setprice}){
    const [counter,setcounter]=useState(1)
   
    const [checked, setChecked] = React.useState(true);

    const handleChange = () => {
        setChecked(!checked);
        console.log(checked)
        checked ? setprice(price+10*counter) : setprice(price-10*counter)
    };
 
   return (
        <div className=' bg-white mb-4 px-2 py-2 flex rounded-md '>
            <input  value={checked}  onChange={handleChange} type='checkbox' className=' size-6 mr-4 '></input>
            <img  className='w-40 h-40 rounded-sm' alt='' src='../images/header.jpg' />
            <div className=' mx-3 w-full flex flex-col'>
                <div className='  h-full'>   
                    <h1 className='text-2xl'>titre</h1>
                    <h1 className=' text-xl font-bold'>3.45$</h1>
                </div>
            
                <div className=' flex space-x-2 justify-end  items-center'>
                    <div className='flex'>
                        <button onClick={()=>setcounter(counter+1)} className=' border-2 rounded-l-lg px-2'>
                            <TiPlus />
                        </button>
                        <h1 className=' border-t-2 border-b-2 px-2'>{counter}</h1>
                        <button disabled={counter===1} onClick={()=>setcounter(counter-1)  } className={` border-2 rounded-r-lg px-2 ${counter===1 && 'opacity-40'}`}>
                            <MdOutlineRemove />
                        </button>
                    </div>
                    <button className=' opacity-40 hover:opacity-100 transition-all '><PiTrashSimpleThin size={25} /></button>
                    <button className='opacity-20 hover:text-red-600 hover:opacity-100  transition-all'><PiHeartStraightFill size={25}/></button>
                </div> 

            </div>

        </div>
   )
}

function ProductsPanier({products,price,setprice}) {
  return (
    <div className=' bg-gray-100 px-4  py-4  flex-col min-h-screen rounded-md'>
        {products.map((item,key)=>(
            <Product key={key} price={price} setprice={setprice}/>
        ))}
    </div>
  )
}

export default ProductsPanier
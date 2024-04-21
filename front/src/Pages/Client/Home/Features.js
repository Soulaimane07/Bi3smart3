import React from 'react'

function Features() {
    const data = [
        {
            "title": "Free Shipping",
            "desc":"On order over $100",
            "image": "../images/send.png",
        },
        {
            "title": "30 Day Returns",
            "desc":"Back returns in 7 days",
            "image": "../images/cashback.png",
        },
        {
            "title": "Money Guarantee",
            "desc":"Cach on Delevery",
            "image": "../images/wallet.png",
        },
        {
            "title": "Online Support",
            "desc":"Call Us 24/7",
            "image": "../images/headset.png",
        },
    ]

  return (
    <div className='flex justify-center space-x-20 mt-20'>
        {data.map((item,key)=>(
            <div key={key} className='flex items-center space-x-4'>
                <img src={item.image} alt={`feature ${key}`} className='w-16 opacity-90' />

                <div>
                    <h1 className='text-xl font-medium'> {item.title} </h1>
                    <p className='text-sm opacity-80 mt-1'> {item.desc} </p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Features
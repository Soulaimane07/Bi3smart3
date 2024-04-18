import { useEffect, useState } from "react"
import axios from 'axios';

export const products = [
    {
      "id": 1,
      "image": "../images/t-shirt-jordan.png",
      "title":"Product 1",
      "price": 10
    },
    {
      "id": 2,
      "image": "../images/t-shirt-jordan.png",
      "title":"Product 2",
      "price": 20
    },
    {
      "id": 3,
      "image": "../images/t-shirt-jordan.png",
      "title":"Product 3",
      "price": 30
    },
    {
      "id": 4,
      "image": "../images/t-shirt-jordan.png",
      "title":"Product 4",
      "price": 40
    },

]

export const sizes = ["XS", "S", "M", "L", "XL"]

export const GetProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
  axios.get(" http://127.0.0.1:8000/api/products/")
    .then(res => {
      setProducts(res.data)
      console.log(res.data);
    })
  }, [])

  

  return products
}
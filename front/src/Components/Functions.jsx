import { useEffect, useState } from "react"
import axios from 'axios';


export const sizes = ["XS", "S", "M", "L", "XL"]

export const GetProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
  axios.get(" http://127.0.0.1:8000/api/products/")
    .then(res => {
      setProducts(res.data)
      // console.log(res.data);
    })
  }, [])

  return products
}

export const GetCategorie = (id) => {
  const [product, setProduct] = useState({})

  useEffect(()=> {
    axios.get(`http://127.0.0.1:8000/api/categorie/${id}`)
      .then(res => {
        console.log(res.data);
        setProduct(res.data)
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

    return product
}

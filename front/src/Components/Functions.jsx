import { useEffect, useState } from "react"
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsByCategorie } from "../redux/Slices/ProductSlice";
import { panierActions } from "../redux/Slices/PanierSlices";

export const apiUrl = 'http://15.237.160.116:8000'

export const sizes = ["XS", "S", "M", "L", "XL"]



export const GetProduct = (id) => {
  const [product, setProduct] = useState({})

  useEffect(()=>{
    axios.get(`http://15.237.160.116:8000/api/products/${id}`)
      .then(res => {
        setProduct(res.data)
      })
  }, [])

  return product
}


export const GetCategorie = (id) => {
  const [product, setProduct] = useState({})

  useEffect(()=> {
    axios.get(`http://15.237.160.116:8000/api/categorie/${id}`)
      .then(res => {
        setProduct(res.data)
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return product
}


export const GetCategories = () =>{
   const [categorie ,setcategorie] = useState([])

  useEffect(()=> {
    axios.get(" http://15.237.160.116:8000/api/categorie/")
        .then(res=> {
            setcategorie(res.data)
        })
  }, [])
 return categorie
}


export const GetUsers = () => {
  const [users, setUsers] = useState([])
 
  useEffect(()=>{
    axios.get(" http://15.237.160.116:8000/api/users/")
      .then(res => {
        setUsers(res.data)
      })
  }, [])

  return users
}


export const GetUser = (id) => {
  const [user, setUser] = useState([])
 
  useEffect(()=>{
    axios.get(`http://15.237.160.116:8000/api/users/${id}/`)
      .then(res => {
        setUser(res.data)
      })
  }, [])

  return user
}


export const GetSellers = () => {
  const [sellers, setSellers] = useState([])
 
  useEffect(()=>{
    axios.get(" http://15.237.160.116:8000/api/sellerrequests/")
      .then(res => {
        setSellers(res.data)
      })
  }, [])

  return sellers
}

export const Removeuser = (id) => {
  axios.delete(`http://15.237.160.116:8000/api/users/${id}/`)
  .then(res =>{
    console.log("Deleted !");
  })
}

export const Removeproduct = (id) => {
  axios.delete(`http://15.237.160.116:8000/api/products/${id}`)
  .then(res =>{
    console.log("Deleted !");
  })
}
export const Removecategorie = (id) => {
  axios.delete(`http://15.237.160.116:8000/api/categorie/${id}`)
  .then(res =>{
    console.log("Deleted !");
  })
}


export const GetProductbyIDSeller = () =>{
   let userid = useSelector(state=>state.User.data.id)
   let [data , setdata] = useState()

  useEffect(() => {
    axios.get(`http://15.237.160.116:8000/api/getproductbyidseller/${userid}/`)
         .then(res=> {
            setdata(res.data)
          })
  },[]) 
  return data 
}







export const TopPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [])  
}



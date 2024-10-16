import { useEffect, useState } from "react"
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsByCategorie } from "../redux/Slices/ProductSlice";
import { panierActions } from "../redux/Slices/PanierSlices";

<<<<<<< HEAD
export const apiUrl = 'https://d23i3x5oooaihp.cloudfront.net'
=======
export const apiUrl = 'http://15.237.160.116:8000'
>>>>>>> 487402f88bb91c5e6afa682365d3be4e9d657a43

export const sizes = ["XS", "S", "M", "L", "XL"]



export const GetProduct = (id) => {
  const [product, setProduct] = useState({})

  useEffect(()=>{
<<<<<<< HEAD
    axios.get(`https://d23i3x5oooaihp.cloudfront.net/api/products/${id}`)
=======
    axios.get(`http://15.237.160.116:8000/api/products/${id}`)
>>>>>>> 487402f88bb91c5e6afa682365d3be4e9d657a43
      .then(res => {
        setProduct(res.data)
      })
  }, [])

  return product
}


export const GetCategorie = (id) => {
  const [product, setProduct] = useState({})

  useEffect(()=> {
<<<<<<< HEAD
    axios.get(`https://d23i3x5oooaihp.cloudfront.net/api/categorie/${id}`)
=======
    axios.get(`http://15.237.160.116:8000/api/categorie/${id}`)
>>>>>>> 487402f88bb91c5e6afa682365d3be4e9d657a43
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
<<<<<<< HEAD
    axios.get(" https://d23i3x5oooaihp.cloudfront.net/api/categorie/")
=======
    axios.get(" http://15.237.160.116:8000/api/categorie/")
>>>>>>> 487402f88bb91c5e6afa682365d3be4e9d657a43
        .then(res=> {
            setcategorie(res.data)
        })
  }, [])
 return categorie
}


export const GetUsers = () => {
  const [users, setUsers] = useState([])
 
  useEffect(()=>{
<<<<<<< HEAD
    axios.get(" https://d23i3x5oooaihp.cloudfront.net/api/users/")
=======
    axios.get(" http://15.237.160.116:8000/api/users/")
>>>>>>> 487402f88bb91c5e6afa682365d3be4e9d657a43
      .then(res => {
        setUsers(res.data)
      })
  }, [])

  return users
}


export const GetUser = (id) => {
  const [user, setUser] = useState([])
 
  useEffect(()=>{
<<<<<<< HEAD
    axios.get(`https://d23i3x5oooaihp.cloudfront.net/api/users/${id}/`)
=======
    axios.get(`http://15.237.160.116:8000/api/users/${id}/`)
>>>>>>> 487402f88bb91c5e6afa682365d3be4e9d657a43
      .then(res => {
        setUser(res.data)
      })
  }, [])

  return user
}


export const GetSellers = () => {
  const [sellers, setSellers] = useState([])
 
  useEffect(()=>{
<<<<<<< HEAD
    axios.get(" https://d23i3x5oooaihp.cloudfront.net/api/sellerrequests/")
=======
    axios.get(" http://15.237.160.116:8000/api/sellerrequests/")
>>>>>>> 487402f88bb91c5e6afa682365d3be4e9d657a43
      .then(res => {
        setSellers(res.data)
      })
  }, [])

  return sellers
}

export const Removeuser = (id) => {
<<<<<<< HEAD
  axios.delete(`https://d23i3x5oooaihp.cloudfront.net/api/users/${id}/`)
=======
  axios.delete(`http://15.237.160.116:8000/api/users/${id}/`)
>>>>>>> 487402f88bb91c5e6afa682365d3be4e9d657a43
  .then(res =>{
    console.log("Deleted !");
  })
}

export const Removeproduct = (id) => {
<<<<<<< HEAD
  axios.delete(`https://d23i3x5oooaihp.cloudfront.net/api/products/${id}`)
=======
  axios.delete(`http://15.237.160.116:8000/api/products/${id}`)
>>>>>>> 487402f88bb91c5e6afa682365d3be4e9d657a43
  .then(res =>{
    console.log("Deleted !");
  })
}
export const Removecategorie = (id) => {
<<<<<<< HEAD
  axios.delete(`https://d23i3x5oooaihp.cloudfront.net/api/categorie/${id}`)
=======
  axios.delete(`http://15.237.160.116:8000/api/categorie/${id}`)
>>>>>>> 487402f88bb91c5e6afa682365d3be4e9d657a43
  .then(res =>{
    console.log("Deleted !");
  })
}


export const GetProductbyIDSeller = () =>{
   let userid = useSelector(state=>state.User.data.id)
   let [data , setdata] = useState()

  useEffect(() => {
<<<<<<< HEAD
    axios.get(`https://d23i3x5oooaihp.cloudfront.net/api/getproductbyidseller/${userid}/`)
=======
    axios.get(`http://15.237.160.116:8000/api/getproductbyidseller/${userid}/`)
>>>>>>> 487402f88bb91c5e6afa682365d3be4e9d657a43
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



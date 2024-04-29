import { useEffect, useState } from "react"
import axios from 'axios';
import { useSelector } from "react-redux";


export const sizes = ["XS", "S", "M", "L", "XL"]


export const GetProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    axios.get(" http://127.0.0.1:8000/api/products/")
      .then(res => {
        setProducts(res.data)
      })
  }, [])

  return products
}


export const GetProduct = (id) => {
  const [product, setProduct] = useState({})

  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/products/${id}`)
      .then(res => {
        setProduct(res.data)
      })
  }, [])

  return product
}


export const GetCategorie = (id) => {
  const [product, setProduct] = useState({})

  useEffect(()=> {
    axios.get(`http://127.0.0.1:8000/api/categorie/${id}/`)
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
    axios.get(" http://127.0.0.1:8000/api/categorie/")
        .then(res=> {
            setcategorie(res.data)
        })
  }, [])
 return categorie
}


export const GetUsers = () => {
  const [users, setUsers] = useState([])
 
  useEffect(()=>{
    axios.get(" http://127.0.0.1:8000/api/users/")
      .then(res => {
        setUsers(res.data)
      })
  }, [])

  return users
}


export const GetUser = (id) => {
  const [user, setUser] = useState([])
 
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/users/${id}/`)
      .then(res => {
        setUser(res.data)
      })
  }, [])

  return user
}


export const GetSellers = () => {
  return []
}


export const Removeproduct = (id) => {
  axios.delete(`http://127.0.0.1:8000/api/products/${id}`)
  .then(res =>{
    console.log("Deleted !");
  })
}


export const GetProductbyCategorie = (id) =>{
  const [categories, setCategories] = useState([])

  useEffect(()=> {
    axios.get(`http://127.0.0.1:8000/api/getproductbycategorie/${id}/`)
    .then(res=> {
        setCategories(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [id])

  return categories
}
/*export const ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      axios.get('/api/products/')
          .then(response => {
              setProducts(response.data);
          })
          .catch(error => {
              console.error('Error fetching products:', error);
          });
  }, []);*/

  export const GetProductbyIDSeller = () =>{
   let userid = useSelector(state=>state.User.data.id)
   let [data , setdata] = useState()

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/getproductbyidseller/${userid}/`)
         .then(res=> {
            setdata(res.data)
          })
  },[]) 
  return data 
  }

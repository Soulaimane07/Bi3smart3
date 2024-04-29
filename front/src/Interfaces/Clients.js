import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Client/Home/Home';
import Favorits from '../Pages/Client/Favorits/Favorits';
import Panier from '../Pages/Client/Panier/Panier';
import { Categories } from '../Pages/Client/Categories/Categories';
import Commande from '../Pages/Client/Commande/Commande';
import Profil from '../Pages/Client/Profil/Profil';
import Product from '../Pages/Client/Products/Product';
import { useSelector } from 'react-redux';
import Layout from '../Components/Layout';

function Clients() {
    
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="categorie/:id" element={<Categories />} />
        <Route path="favorits"  element={<Favorits/>}/>
        <Route path="Panier" element={<Panier />} />
        <Route path="commande" element={<Commande />} />
        <Route path="Profil" element={<Profil />} />
      </Route>
    </Routes>
  )
}

export default Clients

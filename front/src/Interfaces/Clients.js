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

function Clients() {
  let productPage = useSelector(state => state.ProductPage.opened)
    
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorie/:id" element={<Categories />} />
            <Route path="/favorits"  element={<Favorits/>}/>
            <Route path="/Panier" element={<Panier />} />
            <Route path="/commande" element={<Commande />} />
            <Route path="/Profil" element={<Profil />} />
        </Routes>

        {productPage && <Product />}
    </>
  )
}

export default Clients
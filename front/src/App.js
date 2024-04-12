import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Auth from './Components/Auth/Auth';
import { useSelector } from 'react-redux';
import Favorits from './Pages/Favorits/Favorits';
import Panier from './Pages/Panier/Panier';
import { Categories } from './Pages/Categories/Categories';
import Commande from './Pages/Commande/Commande';
import Product from './Pages/Products/Product';

function App() { 
  let authPage = useSelector(state => state.authPage.opened)
  let productPage = useSelector(state => state.ProductPage.opened)
  // console.log(useSelector(state => state.User));

  let states = useSelector((state) => state)
  // console.log(states);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorie/:id" element={<Categories />} />
        <Route  path="/favorits"  element={<Favorits/>}/>
        <Route path="/Panier" element={<Panier />} />
        <Route path="/commande" element={<Commande />} />
      </Routes>

      {authPage && <Auth />}
      {productPage && <Product />}
    </BrowserRouter>
  );
}

export default App;

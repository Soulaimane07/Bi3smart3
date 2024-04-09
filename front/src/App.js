import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Auth from './Components/Auth/Auth';
import { useSelector } from 'react-redux';
import Products from './Pages/Products/Products';
import Favorits from './Pages/Favorits/Favorits';
import Panier from './Pages/Panier/Panier';
import { Categories } from './Pages/Categories/Categories';
import Commande from './Pages/Commande/Commande';

function App() { 
  let authPage = useSelector(state => state.authPage.opened)
  // console.log(useSelector(state => state.User));

  let states = useSelector((state) => state.Panier)
  console.log(states);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route  path="/favorits"  element={<Favorits/>}/>
        <Route path="/Panier" element={<Panier />} />
        <Route path="/categorie/:id" element={<Categories />} />
        <Route path="/commande" element={<Commande />} />
      </Routes>

      {authPage && <Auth />}
    </BrowserRouter>
  );
}

export default App;

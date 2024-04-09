import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Auth from './Components/Auth/Auth';
import { useSelector } from 'react-redux';
import Products from './Pages/Products/Products';
import Favorits from './Pages/Favorits/Favorits';
import Panier from './Pages/Panier/Panier';

function App() { 
  let authPage = useSelector(state => state.authPage.opened)
  console.log(useSelector(state => state.User));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route  path="/favorits"  element={<Favorits/>}/>
        <Route path="/Panier" element={<Panier />} />
      </Routes>

      {authPage && <Auth />}
    </BrowserRouter>
  );
}

export default App;

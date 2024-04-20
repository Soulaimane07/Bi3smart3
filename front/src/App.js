import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Auth from './Components/Auth/Auth';
import { useSelector } from 'react-redux';
import Clients from './Interfaces/Clients';
import Vendeur from './Interfaces/Vendeur';

function App() { 
  let authPage = useSelector(state => state.authPage.opened)

  let states = useSelector((state) => state)

  return (
    <BrowserRouter>
      <Clients />
      <Vendeur />

      {authPage && <Auth />}
    </BrowserRouter>
  );
}

export default App;

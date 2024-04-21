import { BrowserRouter} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';

import Auth from './Components/Auth/Auth';
import Clients from './Interfaces/Clients';
import Seller from './Interfaces/Seller';

function App() { 
  let authPage = useSelector(state => state.authPage.opened)
  // console.log(useSelector(state => state.User));

  let states = useSelector((state) => state)

  return (
    <BrowserRouter>
      <Clients />
      <Seller />

      {authPage && <Auth />}
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import Auth from './Components/Auth/Auth';
import Clients from './Interfaces/Clients';
import Seller from './Interfaces/Seller';
import Admin from './Interfaces/Admin';
import Layout from './Components/Layout';
import RequireAuth from './Components/RequireAuth';
import { useEffect } from 'react';
import { UserActions } from './redux/Slices/UserSlice';
 
function App() { 
  let authPage = useSelector(state => state.authPage.opened)
  console.log(useSelector(state => state.User));

  const dispatch = useDispatch()

  useEffect(()=> {
    let userStrorage = localStorage.getItem('bi3smart_user')
    let user = JSON.parse(userStrorage)    

    if(user !== null | user !== undefined) {
      dispatch(UserActions.login(user))
    } else {
      dispatch(UserActions.logout())
    }
  }, [])

  return (
    <BrowserRouter>
      <Clients />
      <Seller />
      <Admin />

      {authPage && <Auth />}
    </BrowserRouter>
  );
}

export default App;

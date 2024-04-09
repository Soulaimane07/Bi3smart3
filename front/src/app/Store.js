import { configureStore } from '@reduxjs/toolkit'
import authPageReducer from './Slices/AuthSlice'
import userReducer from './Slices/UserSlice'
import searchReducer from './Slices/SearchSlice'
import panierReducer from './Slices/PanierSlices'

export const store = configureStore({
  reducer: {
    authPage: authPageReducer,
    User: userReducer,
    Search: searchReducer,
    Panier: panierReducer
  },
})


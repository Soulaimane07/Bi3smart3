import { configureStore } from '@reduxjs/toolkit'
import authPageReducer from './Slices/AuthSlice'
import userReducer from './Slices/UserSlice'
import searchReducer from './Slices/SearchSlice'
import panierReducer from './Slices/PanierSlices'
import productReducer from './Slices/ProductSlice'
import favoritsReducer from './Slices/FavoritsSlice'

export const store = configureStore({
  reducer: {
    authPage: authPageReducer,
    User: userReducer,
    Search: searchReducer,
    Panier: panierReducer,
    ProductPage: productReducer,
    Favorits: favoritsReducer,
  },
})


import { createSlice } from '@reduxjs/toolkit'

export const PanierSlices = createSlice({
  name: 'Panier',
  initialState: {
    products: [],
    productsSelected: [],
    price: 0,
    productsFavorites: [],
  },
  reducers: {
    addProduct: (state, action)=> {
      state.products.push(action.payload)
    },
    removeProduct: (state, action)=> {
      state.products = state.products.filter(function(item) {
        return item.productItem.id !== action.payload
      })
    },
    addSelectProduct: (state, action)=> {
      console.log("Select");
      state.productsSelected.push(action.payload)
      state.productsSelected = Array.from(
        new Set(state.productsSelected.map(item => JSON.stringify(item)))
      ).map(item => JSON.parse(item));
    },
    removeSelectProduct: (state, action)=> {
      state.productsSelected = state.productsSelected.filter(function(item) {
        return item.productItem.id !== action.payload.productItem.id
      })
    },
    calculePrice: (state, action)=> {
      state.price = 0
      state.productsSelected.map((item)=> {
        state.price = state.price + item.productItem.price
      })
    },


    addToFavorites: (state, action)=> {
      state.productsFavorites.push(action.payload)
    },
    removeFromFavorites: (state, action)=> {
      state.productsFavorites = state.productsFavorites.filter(function(item) {
        return item.id !== action.payload
      })
    }
  },
})

export const panierActions = PanierSlices.actions
export default PanierSlices.reducer
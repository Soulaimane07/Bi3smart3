import { createSlice } from '@reduxjs/toolkit'

export const PanierSlices = createSlice({
  name: 'Panier',
  initialState: {
    products: [
      {
        "title":"Product 1",
        "price": 10
      },
      {
        "title":"Product 2",
        "price": 20
      },
      {
        "title":"Product 3",
        "price": 30
      },
    ],
    productsSelected: [],
    price: 0,
  },
  reducers: {
    ajouterProduct: (state, action) => {
    },
    removeProduct: (state, action) => {
      const index = state.products.indexOf(action.payload);
      state.products.splice(index+1, 1);
    },
    selectProduct: (state, action) => {
      state.productsSelected.push(action.payload)
      // state.price = action.payload.price + state.price
    },
    removeSelectedProduct: (state, action) => {
      const index = state.productsSelected.indexOf(action.payload)
      state.productsSelected.splice(index, 1)
      state.price = state.price - action.payload.price
    },
    addQuantite: (state, action) => {
      let indexProduct = state.productsSelected.indexOf(action.payload)
      state.productsSelected[indexProduct+1].quantite = state.productsSelected[indexProduct+1].quantite + 1
    },
    calculePrice: (state, action) => {
      state.price = 0
      state.productsSelected.map((item)=> {
        state.price = state.price + item.price * item.quantite
      })
    }
  },
})

export const panierActions = PanierSlices.actions
export default PanierSlices.reducer
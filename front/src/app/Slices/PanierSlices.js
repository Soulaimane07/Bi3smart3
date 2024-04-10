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
      {
        "title":"Product 4",
        "price": 40
      },
    ],
    productsSelected: [],
    price: 0,
  },
  reducers: {
    addProduct: (state, action)=> {
    },
    addSelectProduct: (state, action)=> {
      console.log("Select");
      state.productsSelected.push(action.payload)
      state.productsSelected = Array.from(
        new Set(state.productsSelected.map(item => JSON.stringify(item)))
      ).map(item => JSON.parse(item));
    },
    removeSelectProduct: (state, action)=> {
      console.log("Remove");
      console.log(state.productsSelected);

      // const updatedProductsSelected = state.productsSelected.filter(item => item.title !== action.payload.title);
      let updatedItems = state.productsSelected.filter(item => item.title == action.payload.title)
      // // state.productsSelected = updatedItems
      console.log(updatedItems);
    },
    calculePrice: (state, action)=> {
      state.price = 0
      state.productsSelected.map((item)=> {
        state.price = state.price + item.price
      })
    }
  },
})

export const panierActions = PanierSlices.actions
export default PanierSlices.reducer
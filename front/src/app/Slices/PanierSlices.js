import { createSlice } from '@reduxjs/toolkit'

export const PanierSlices = createSlice({
  name: 'Panier',
  initialState: {
    products: [],
  },
  reducers: {
    open: (state) => {
      state.opened = true
    },
    close: (state) => {
      state.opened = false
    },
  },
})

export const authPageActions = PanierSlices.actions
export default PanierSlices.reducer
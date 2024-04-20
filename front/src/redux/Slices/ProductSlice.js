import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'ProductPage',
  initialState: {
    opened: false,
    product: {}
  },
  reducers: {
    open: (state, action) => {
      state.opened = true
      state.product = action.payload
    },
    close: (state) => {
      state.opened = false
      state.product = {}
    },
  },
})

export const productActions = productSlice.actions
export default productSlice.reducer
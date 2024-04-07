import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'Search',
  initialState: {
    opened: false,
    data: null,
  },
  reducers: {
    open: (state) => {
      state.opened = true
    },
    close: (state) => {
      state.opened = false
    },
    search: (state, action)=> {
      state.data = action.payload
      state.data !== '' && (state.opened = true)
      state.data == '' && (state.opened = false)
    }
  },
})

export const searchActions = searchSlice.actions
export default searchSlice.reducer
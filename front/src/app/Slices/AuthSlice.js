import { createSlice } from '@reduxjs/toolkit'

export const authPageSlice = createSlice({
  name: 'AuthPage',
  initialState: {
    opened: false,
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

export const authPageActions = authPageSlice.actions
export default authPageSlice.reducer
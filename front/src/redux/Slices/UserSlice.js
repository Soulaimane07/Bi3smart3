import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'AuthPage',
  initialState: {
    data: null,
    requestSeller: false,
    isLoading: false,
    isError: false
  },
  reducers: {
    login: (state, action) => {
      state.data = action.payload
    },
    logout: (state) => {
      state.data = null
      state.requestSeller = false
    },
    loading: (state)=> {
        state.isLoading = true
    },
    sellerRequest: (state) => {
      state.requestSeller = true
    }
  },
})

export const UserActions = UserSlice.actions
export default UserSlice.reducer
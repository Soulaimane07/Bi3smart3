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
      localStorage.setItem("bi3smart_user", JSON.stringify(state.data))
    },
    logout: (state) => {
      state.data = null
      state.requestSeller = false
      localStorage.removeItem("bi3smart_user")
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
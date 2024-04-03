import { createSlice } from '@reduxjs/toolkit'

export const LoggedSlice = createSlice({
  name: 'logged',
  initialState: {
    value: true
  },
  reducers: {
    signIn: (state) => {
      state.value = true
    },
    signOut: (state) => {
      state.value = false
    }
  }
})

export const { signIn, signOut } = LoggedSlice.actions

export default LoggedSlice.reducer
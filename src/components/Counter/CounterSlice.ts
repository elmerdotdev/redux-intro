import { createSlice } from '@reduxjs/toolkit'

type CounterState = {
  count: number
}

const initialState: CounterState = {
  count: 1
}

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = CounterSlice.actions

export default CounterSlice.reducer
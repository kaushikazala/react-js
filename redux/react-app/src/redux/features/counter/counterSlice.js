import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: JSON.parse(localStorage.getItem("counter")) ||0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    inc: (state) => {
      state.value += 1
      localStorage.setItem("counter",JSON.stringify(state.value))
    },
    dec: (state) => {
      state.value -= 1
      localStorage.setItem("counter",JSON.stringify(state.value))
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
      localStorage.setItem("counter",JSON.stringify(state.value))
     
    },
    reset:(state)=>{
        state.value = 0
        localStorage.setItem("counter",JSON.stringify(state.value))
    }
  },
})

export const { inc, dec, incrementByAmount  , reset} = counterSlice.actions

export default counterSlice.reducer
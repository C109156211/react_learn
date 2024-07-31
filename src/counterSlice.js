import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        value:0,
    },
    reducers:{
        increment:(state) => {
            state.value += 1
        },
        decrement:(state) => {
            state.value -= 1 
        },
        increment2:(state) => {
            state.value += 2
        },
        decrement2:(state) => {
            state.value -= 2 
        },
        incrementByAmount:(state, action) => {
            state.value += action.payload
        },

        mul: (state, action) =>{
            state.value = action.payload.multiplier * action.payload.multiplicand * action.payload.multiplicand1 ;
        },
    },
})

export const { increment, decrement, increment2, decrement2, incrementByAmount, mul} = counterSlice.actions

export default counterSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const mulSlice = createSlice({
    name: 'counter',
    initialState:{
        value:0,
    },
    reducers: {
        mul: (state,action) => {
            state.value =action.payload.multiplier * action.payload.multiplicand;
            },
    },
})

export const {mul} = mulSlice.actions
export default mulSlice.reducer
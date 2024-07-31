import { createSlice } from "@reduxjs/toolkit";

export const subSlice = createSlice({
    name: 'counter',
    initialState:{
        value3:0,
    },
    reducers: {
        sub: (state,action) => {
            state.value3 = Number(action.payload.subtract) - Number(action.payload.subtract2);
            },
    },
})

export const {sub} = subSlice.actions
export default subSlice.reducer
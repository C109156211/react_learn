import { createSlice } from "@reduxjs/toolkit";

export const divSlice = createSlice({
    name: 'counter',
    initialState:{
        value4:0,
    },
    reducers: {
        div: (state,action) => {
            state.value4 =action.payload.division / action.payload.division2;
            },
    },
})

export const {div} = divSlice.actions
export default divSlice.reducer
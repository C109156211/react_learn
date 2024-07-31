import { createSlice } from "@reduxjs/toolkit";

export const addSlice = createSlice({
    name: 'counter',
    initialState:{
        value2:0,
    },
    reducers: {
        add: (state,action) => {
            state.value2 = Number(action.payload.addend) + Number(action.payload.summand);
            },
    },
})

export const {add} = addSlice.actions
export default addSlice.reducer
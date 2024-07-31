import { configureStore } from '@reduxjs/toolkit'
import addReducer from './addSlice'
import mulReducer from './mulSlice'
import subSlice from './subSlice'
import divSlice from './divSlice'


export default configureStore({
    reducer: {
        add: addReducer,
        mul: mulReducer,
        sub: subSlice,
        div: divSlice,

    },
})
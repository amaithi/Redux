import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './slicers/customerSlicer'
export const store = configureStore({
    reducer:{
        customer:customerReducer
    }
})
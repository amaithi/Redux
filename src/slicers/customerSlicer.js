import { createSlice } from "@reduxjs/toolkit";

const customerSlicer = createSlice({
    name: "customer",
    initialState: [],
    reducers: {
        addCustomer(state, action) {
            state.push(action.payload)
        },
        removeCustomer(state, action) {
            state.splice(action.payload, 1);
        }
    }
})

export const { addCustomer, removeCustomer } = customerSlicer.actions;
export default customerSlicer.reducer;
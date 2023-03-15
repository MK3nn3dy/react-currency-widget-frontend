import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    base: 'GBP',
    rates: {}
}

const ratesSlice = createSlice({
    name: 'rates',
    initialState,
    reducers: {
        setBase:(state, action) => {
            state.base = action.payload;
        },
        setRates:(state, action) => {
            state.rates = action.payload;
        }
    }
})

export const { setBase, setRates } = ratesSlice.actions;
export default ratesSlice.reducer;

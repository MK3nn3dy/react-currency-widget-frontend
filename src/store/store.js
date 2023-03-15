// main redux store
import { configureStore } from "@reduxjs/toolkit";

// import slices
import ratesSlice from "../slices/ratesSlice";
import interfaceSlice from "../slices/interfaceSlice";

const store = configureStore({
    reducer: {
        rates: ratesSlice,
        interface: interfaceSlice
    }
})

export default store;
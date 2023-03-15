import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    settingsVisible: false,
    theme: "default"
}

const interfaceSlice = createSlice({
    name: "interface",
    initialState,
    reducers: {
        toggleSettings: (state) => {
            state.settingsVisible = !state.settingsVisible;
        }
    }
})

export const { toggleSettings } = interfaceSlice.actions;

export default interfaceSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    settingsVisible: false,
    nightTheme: true
}

const interfaceSlice = createSlice({
    name: "interface",
    initialState,
    reducers: {
        toggleSettings: (state) => {
            state.settingsVisible = !state.settingsVisible;
        },
        toggleTheme: (state) => {
            state.nightTheme = !state.nightTheme;
        }
    }
})

export const { toggleSettings, toggleTheme } = interfaceSlice.actions;

export default interfaceSlice.reducer;
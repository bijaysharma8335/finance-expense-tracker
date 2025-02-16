import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: "light", currency: "INR" };

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        },

        convertCurrency: (state, action) => {
            state.currency = action.payload;
        },
    },
});

export const { setTheme, convertCurrency } = settingsSlice.actions;

export default settingsSlice.reducer;

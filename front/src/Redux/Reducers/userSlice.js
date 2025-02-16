import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null, // Stores the logged-in user information
    isLoggedIn: false,
}; // Tracks whether a user is logged in,
const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        clearUser: (state) => {
            state.user = null;
            state.isLoggedIn = false;
            // console.log(state.user);
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

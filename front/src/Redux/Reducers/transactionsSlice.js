import { createSlice } from "@reduxjs/toolkit";

const initialState = { transactions: [], status: "idle", error: null };

const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {},
});

export const {} = transactionsSlice.actions;

export default transactionsSlice.reducer;

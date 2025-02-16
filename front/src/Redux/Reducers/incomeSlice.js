import { createSlice } from "@reduxjs/toolkit";

const initialState = { incomeList: [], totalIncome: 0 };

const incomeSlice = createSlice({
    name: "income",
    initialState,
    reducers: {
        addIncome: (state, action) => {
            state.incomeList.push(action.payload);
            state.totalIncome += action.payload.amount;
        },
        editIncome: (state, action) => {},
        deleteIncome: (state, action) => {},
    },
});

export const { addIncome, editIncome, deleteIncome } = incomeSlice.actions;

export default incomeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = { expenseList: [], totalExpense: 0 };

const expenseSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.expenseList.push(action.payload);
            state.totalExpense += action.payload.amount;
        },
        editExpense: (state, action) => {
            const { index, updateExpense } = action.payload;
            state[index] = updateExpense;
        },
        deleteExpense: (state, action) => {
            return state.filter((expense, index) => index !== action.payload);
        },
    },
});

export const { addExpense, editExpense, deleteExpense } = expenseSlice.actions;

export default expenseSlice.reducer;

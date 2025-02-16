import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Redux/Reducers/userSlice";
import transactionReducer from "../Redux/Reducers/transactionsSlice";
import incomeReducer from "../Redux/Reducers/incomeSlice";
import expenseReducer from "../Redux/Reducers/expenseSlice";

import settingReducer from "../Redux/Reducers/settingsSlice";
const store = configureStore({
    reducer: {
        user: userReducer,
        income: incomeReducer,
        expenses: expenseReducer,
        transactions: transactionReducer,
        settings: settingReducer,
    },
});
export default store;

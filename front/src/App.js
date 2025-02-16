import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./components/Dashboard";
import DashboardLayout from "./Pages/DashboardLayout";
import Settings from "./Pages/Settings";
import Profile from "./Pages/Profile";
import Income from "./components/Income/Income";

import { setUser } from "./Redux/Reducers/userSlice";
import Expense from "./components/Expense/Expense";

function App() {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    useEffect(() => {
        // Retrieve user from localStorage if it exists
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) {
            dispatch(setUser(savedUser));
        }
    }, [dispatch]);
    return (
        <BrowserRouter>
            <Routes>
                {user ? (
                    <Route path="/" element={<DashboardLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="expense" element={<Expense />} />{" "}
                        <Route path="income" element={<Income />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>
                ) : (
                    <>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </>
                )}
                {/* Redirect any unmatched routes */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

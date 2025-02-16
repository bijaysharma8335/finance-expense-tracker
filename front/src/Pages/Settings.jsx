import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { convertCurrency, setTheme } from "../Redux/Reducers/settingsSlice";

const Settings = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useSelector((state) => state.settings.theme);

    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const handleThemeChange = (e) => {
        const selectedTheme = e.target.value;
        dispatch(setTheme(selectedTheme));
        // Apply theme change logic (e.g., update global state)
    };

    const handleNotificationsToggle = () => {
        setNotificationsEnabled(!notificationsEnabled);
        // Update notification settings logic
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        navigate("/profile");
    };
    const handleCurrencyChange = (e) => {
        e.preventDefault();
        const selectedCurrency = e.target.value;
        dispatch(convertCurrency(selectedCurrency));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Settings</h1>

            {/* User Profile Settings */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Profile Settings</h2>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={handleUpdateProfile}
                >
                    Update Profile
                </button>
            </section>

            {/* Theme Settings */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Theme Settings</h2>
                <div className="flex">
                    <label className="block mb-2 mr-2 py-2">Choose Theme :</label>
                    <select
                        onChange={handleThemeChange}
                        value={theme}
                        className="border px-3 py-2 rounded-md"
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>
            </section>

            {/* Notification Settings */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Notifications</h2>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={notificationsEnabled}
                        onChange={handleNotificationsToggle}
                        className="mr-2"
                    />
                    Enable Notifications
                </label>
            </section>

            {/* Currency and Locale Settings */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Currency Settings</h2>
                <div className="flex">
                    <label className="block mb-2 py-2 mr-2">Default Currency :</label>
                    <select
                        className="border px-3 py-2 rounded-md "
                        onChange={handleCurrencyChange}
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="INR">INR</option>
                        <option value="JPY">JPY</option>
                    </select>
                </div>
            </section>

            {/* Data Management */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Data Management</h2>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                    Export Data
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 ml-3">
                    Clear All Data
                </button>
            </section>

            {/* Account Management */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Account Management</h2>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
                    Delete Account
                </button>
            </section>

            {/* About Section */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-3">About</h2>
                <p>App Version: 1.0.0</p>
                <a href="/privacy-policy" className="text-blue-500 hover:underline">
                    Privacy Policy
                </a>
                <br />
                <a href="/terms-of-service" className="text-blue-500 hover:underline">
                    Terms of Service
                </a>
            </section>
        </div>
    );
};

export default Settings;

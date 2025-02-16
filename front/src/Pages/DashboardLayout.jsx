import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
const DashboardLayout = () => {
    const theme = useSelector((state) => state.settings.theme);
    return (
        <div
            className={`flex min-h-screen ${
                theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
            } `}
        >
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Overview Section */}
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;

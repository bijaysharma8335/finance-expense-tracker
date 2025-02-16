import React, { useState } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip, 
    Legend
);

const Dashboard = () => {
    const income = useSelector((state) => state.income.totalIncome);
    const expenses = useSelector((state) => state.expenses.totalExpense);
    const savings = income - expenses;
    const budgetUtilization = (expenses / income) * 100;

    const [selectedMonth, setSelectedMonth] = useState("All");

    const monthlyData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                label: "Income",
                data: [4000, 4500, 5000, 5500, 6000],
                borderColor: "#4caf50",
                backgroundColor: "rgba(76, 175, 80, 0.2)",
                fill: true,
            },
            {
                label: "Expenses",
                data: [2000, 2500, 3000, 3500, 4000],
                borderColor: "#f44336",
                backgroundColor: "rgba(244, 67, 54, 0.2)",
                fill: true,
            },
        ],
    };

    const categoryData = {
        labels: ["Food", "Rent", "Travel", "Utilities", "Entertainment"],
        datasets: [
            {
                label: "Expenses",
                data: [500, 1200, 300, 600, 400],
                backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4caf50", "#ff9800"],
            },
        ],
    };

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
        // Update charts and stats dynamically based on the selected month
    };

    return (
        <div>
            {/* Filters */}
            <section className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Dashboard</h2>
                <select
                    className="border border-gray-300 rounded-lg px-4 py-2"
                    value={selectedMonth}
                    onChange={handleMonthChange}
                >
                    <option value="All">All Months</option>
                    <option value="Jan">January</option>
                    <option value="Feb">February</option>
                    <option value="Mar">March</option>
                    <option value="Apr">April</option>
                    <option value="May">May</option> <option value="May">May</option>{" "}
                    <option value="May">May</option> <option value="May">May</option>{" "}
                    <option value="May">May</option>
                </select>
            </section>

            {/* Main Content */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-sm text-gray-500">Total Income</h3>
                    <p className="text-2xl font-semibold text-green-600">${income}</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-sm text-gray-500">Total Expenses</h3>
                    <p className="text-2xl font-semibold text-red-600">${expenses}</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-sm text-gray-500">Net Savings</h3>
                    <p className="text-2xl font-semibold text-blue-600">${savings}</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-sm text-gray-500">Budget Utilization</h3>
                    <div className="relative w-full bg-gray-200 rounded-md h-4 mt-2">
                        <div
                            className="bg-purple-600 h-4 rounded-md"
                            style={{ width: `${budgetUtilization}%` }}
                        ></div>
                    </div>
                    <p className="text-sm mt-2 text-gray-600">{budgetUtilization.toFixed(2)}%</p>
                </div>
            </section>

            {/* Charts Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-sm text-gray-500 mb-4">Monthly Trends</h3>
                    <Line data={monthlyData} />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-sm text-gray-500 mb-4">Expense Breakdown</h3>
                    <Bar data={categoryData} />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-sm text-gray-500 mb-4">Expense Categories</h3>
                    <Pie data={categoryData} />
                </div>
            </section>

            {/* Savings Goal */}
            <section className="bg-white shadow-md rounded-lg p-4 mb-6">
                <h3 className="text-sm text-gray-500 mb-4">Savings Goal Progress</h3>
                <div className="relative w-full bg-gray-200 rounded-md h-4">
                    <div
                        className="bg-blue-600 h-4 rounded-md"
                        style={{ width: `${(savings / 10000) * 100}%` }} // Assuming $10,000 goal
                    ></div>
                </div>
                <p className="text-sm mt-2 text-gray-600">
                    {((savings / 10000) * 100).toFixed(2)}% of $10,000 goal achieved
                </p>
            </section>

            {/* Recent Transactions */}
            <section className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-sm text-gray-500 mb-4">Recent Transactions</h3>
                <ul className="space-y-4">
                    <li className="flex justify-between">
                        <span>Jan 10, 2025</span>
                        <span>Food</span>
                        <span className="text-red-600">- $50</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Jan 12, 2025</span>
                        <span>Salary</span>
                        <span className="text-green-600">+ $2000</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Jan 15, 2025</span>
                        <span>Rent</span>
                        <span className="text-red-600">- $1200</span>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Dashboard;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpense } from "../../Redux/Reducers/expenseSlice"; // Example action
import { Line, Pie, Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend
);

const ViewExpense = () => {
    const dispatch = useDispatch();
    const expenses = useSelector((state) => state?.expenses?.expenseList);
    const currency = useSelector((state) => state.settings.currency);

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    const filteredExpenses = expenses
        ?.filter((expense) => expense.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const totalPages = Math.ceil(expenses?.length / itemsPerPage);

    const categorySummary = expenses?.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
    }, {});

    const handleDelete = (index) => {
        if (window.confirm("Are you sure you want to delete this expense?")) {
            dispatch(deleteExpense(index));
        }
    };

    const exportCSV = () => {
        const headers = ["Title", "Amount", "Category", "Date"];
        const csvContent = [
            headers,
            ...expenses.map((expense) => [
                expense.title,
                expense.amount,
                expense.category,
                expense.date,
            ]),
        ]
            .map((e) => e.join(","))
            .join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "expenses.csv";
        link.click();
    };

    const lineChartData = {
        labels: expenses?.map((expense) => expense.date),
        datasets: [
            {
                label: "Expense Amount",
                data: expenses?.map((expense) => expense.amount),
                borderColor: "#ff6384",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
            },
        ],
    };

    const pieChartData = {
        labels: Object.keys(categorySummary || {}),
        datasets: [
            {
                data: Object.values(categorySummary || {}),
                backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4caf50", "#ff9800"],
            },
        ],
    };

    return (
        <div className="p-6 bg-gray-100 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Expenses</h2>

            {/* Search and Export */}
            <div className="flex justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search by title..."
                    className="p-2 border border-gray-300 rounded-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                    onClick={exportCSV}
                >
                    Export CSV
                </button>
            </div>

            {/* Expense Table */}
            {filteredExpenses?.length === 0 ? (
                <p>No expenses found!</p>
            ) : (
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">#</th>
                            <th className="border border-gray-300 px-4 py-2">Title</th>
                            <th className="border border-gray-300 px-4 py-2">
                                Amount ({currency})
                            </th>
                            <th className="border border-gray-300 px-4 py-2">Category</th>
                            <th className="border border-gray-300 px-4 py-2">Date</th>
                            <th className="border border-gray-300 px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredExpenses.map((expense, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    {(currentPage - 1) * itemsPerPage + index + 1}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    {expense.title}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    {expense.amount}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    {expense.category}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    {expense.date}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <button className="px-3 py-1 mr-2 bg-blue-500 text-white rounded-md">
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(index)}
                                        className="px-3 py-1 bg-red-500 text-white rounded-md"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Pagination */}
            {expenses?.length > itemsPerPage && (
                <div className="flex justify-center mt-4">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            className={`px-4 py-2 mx-1 rounded-md ${
                                currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
                            }`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white p-4 rounded-md shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Expense Trends</h3>
                    <Line data={lineChartData} />
                </div>

                <div className="bg-white p-4 rounded-md shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Category Breakdown</h3>
                    <Pie data={pieChartData} />
                </div>
            </div>
        </div>
    );
};

export default ViewExpense;

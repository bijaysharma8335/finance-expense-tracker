import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { saveAs } from "file-saver";
import "chart.js/auto";
import { useDispatch } from "react-redux";

const initialIncomeData = [
    {
        id: 1,
        amount: 5000,
        source: "Salary",
        date: "2025-01-01",
        category: "Salary",
    },
    {
        id: 2,
        amount: 200,
        source: "Freelance Project",
        date: "2025-01-15",
        category: "Freelance",
    },
    // Add more static records as needed
];

const Income = () => {
    const dispatch = useDispatch();
    const [incomeList, setIncomeList] = useState(initialIncomeData); // Store income records
    const [totalIncome, setTotalIncome] = useState(0); // Calculate total income
    const [amount, setAmount] = useState(""); // Input for income amount
    const [source, setSource] = useState(""); // Input for income source
    const [date, setDate] = useState(""); // Input for income date

    const [category, setCategory] = useState("");
    const [filterCategory, setFilterCategory] = useState("");
    const [editingId, setEditingId] = useState(null);

    // Add or Edit Income
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount || !source || !date || !category) {
            alert("Please fill in all fields");
            return;
        }

        if (editingId) {
            const updatedList = incomeList.map((income) =>
                income.id === editingId
                    ? { ...income, amount: parseFloat(amount), source, date, category }
                    : income
            );
            setIncomeList(updatedList);
            setEditingId(null);
        } else {
            const newIncome = {
                id: Date.now(),
                amount: parseFloat(amount),
                source,
                date,
                category,
            };
            setIncomeList([...incomeList, newIncome]);
            setTotalIncome(totalIncome + parseFloat(amount));
        }
        // dispatch(addIncome()
        // Clear inputs
        setAmount("");
        setSource("");
        setDate("");
        setCategory("");
    };

    // Delete Income
    const handleDeleteIncome = (id) => {
        const updatedList = incomeList.filter((income) => income.id !== id);
        const deletedIncome = incomeList.find((income) => income.id === id);
        setTotalIncome(totalIncome - deletedIncome.amount);
        setIncomeList(updatedList);
    };

    // Edit Income
    const handleEditIncome = (id) => {
        const incomeToEdit = incomeList.find((income) => income.id === id);
        setAmount(incomeToEdit.amount);
        setSource(incomeToEdit.source);
        setDate(incomeToEdit.date);
        setCategory(incomeToEdit.category);
        setEditingId(id);
    };

    // Export to CSV
    const exportToCSV = () => {
        const csvContent = incomeList
            .map((income) => [income.date, income.source, income.category, income.amount].join(","))
            .join("\n");
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        saveAs(blob, "income_records.csv");
    };

    // Filtered List
    const filteredIncomeList = filterCategory
        ? incomeList.filter((income) => income.category === filterCategory)
        : incomeList;

    // Chart Data
    const chartData = {
        labels: incomeList.map((income) => income.date),
        datasets: [
            {
                label: "Income Amount",
                data: incomeList.map((income) => income.amount),
                backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
        ],
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4"> Income Management</h1>
            <div className="">
                {/* Add/Edit Income Form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 p-6 bg-gray-100 rounded-md shadow-md"
                >
                    <h2 className="text-lg font-semibold mb-2">
                        {editingId ? "Edit Income" : "Add Income"}
                    </h2>
                    <div>
                        <label className="block mb-2">Amount:</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter amount"
                            className="w-full border px-3 py-2 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Source:</label>
                        <input
                            type="text"
                            value={source}
                            onChange={(e) => setSource(e.target.value)}
                            placeholder="Enter income source"
                            className="w-full border px-3 py-2 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Date:</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full border px-3 py-2 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Category:</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full border px-3 py-2 rounded-md"
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Salary">Salary</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Investments">Investments</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    >
                        {editingId ? "Update Income" : "Add Income"}
                    </button>
                </form>

                {/* Filter by Category */}

                <div className="space-y-4 p-6  rounded-md shadow-md my-4">
                    <div>
                        <label className="block  font-medium">Filter by Category:</label>
                        <select
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="w-full border px-3 py-2 rounded-md"
                        >
                            <option value="">All Categories</option>
                            <option value="Salary">Salary</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Investments">Investments</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    {/* Total Income */}
                    <h3 className="text-xl font-semibold mb-4">
                        Total Income: ${totalIncome.toFixed(2)}
                    </h3>

                    {/* Income List */}
                    <h4 className="text-lg font-semibold mb-2">Income Records:</h4>
                    {filteredIncomeList.length > 0 ? (
                        <ul className="space-y-3">
                            {filteredIncomeList.map((income) => (
                                <li
                                    key={income.id}
                                    className="flex justify-between items-center bg-gray-100 p-3 rounded-md"
                                >
                                    <div>
                                        <p className="font-medium">Source: {income.source}</p>
                                        <p className="text-sm text-gray-600">
                                            Amount: ${income.amount.toFixed(2)} | Date:{" "}
                                            {income.date} | Category: {income.category}
                                        </p>
                                    </div>
                                    <div className="space-x-2">
                                        <button
                                            onClick={() => handleEditIncome(income.id)}
                                            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteIncome(income.id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No income records found.</p>
                    )}

                    {/* Export to CSV */}
                    <button
                        onClick={exportToCSV}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
                    >
                        Export to CSV
                    </button>

                    {/* Chart Visualization */}
                    <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-2">Income Visualization:</h4>
                        <Bar data={chartData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Income;

import React from "react";

const RecentTransactions = ({ transactions }) => {
    return (
        <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
                <tr>
                    <th className="px-4 py-2 border">Date</th>
                    <th className="px-4 py-2 border">Category</th>
                    <th className="px-4 py-2 border">Amount</th>
                    <th className="px-4 py-2 border">Types</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction, index) => (
                    <tr key={index} className="text-center">
                        <td className="px-4 py-2 border">{transaction.date}</td> 
                        <td className="px-4 py-2 border">{transaction.category}</td>
                        <td className="px-4 py-2 border">{transaction.amount}</td>
                        <td className="px-4 py-2 border">{transaction.type}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RecentTransactions;

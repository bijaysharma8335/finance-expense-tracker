import React from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions, deleteTransaction } from "../redux/transactionsSlice";

const TransactionsList = () => {
    const dispatch = useDispatch();
    const { transactions, status, error } = useSelector((state) => state.transactions);

    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteTransaction(id));
    };

    if (status === "loading") return <p>Loading transactions...</p>;
    if (status === "failed") return <p>Error: {error}</p>;

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-bold mb-4">Transaction History</h2>
            <ul>
                {transactions.map((txn) => (
                    <li key={txn.id} className="flex justify-between items-center border-b py-2">
                        <div>
                            <p className="text-sm font-semibold">{txn.category}</p>
                            <p className="text-xs text-gray-500">{txn.date}</p>
                        </div>
                        <p
                            className={`text-sm font-bold ${
                                txn.amount > 0 ? "text-green-500" : "text-red-500"
                            }`}
                        >
                            {txn.amount > 0 ? `+₹${txn.amount}` : `-₹${Math.abs(txn.amount)}`}
                        </p>
                        <button
                            onClick={() => handleDelete(txn.id)}
                            className="text-red-500 hover:text-red-700 text-sm"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionsList;

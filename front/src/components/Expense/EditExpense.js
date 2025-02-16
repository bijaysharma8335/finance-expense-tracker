import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../Redux/Reducers/expenseSlice";

const EditExpense = ({ index, expense }) => {
    const dispatch = useDispatch();

    // Form State
    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        category: "",
        date: "",
        paymentMethod: "",
        recurring: false,
        notes: "",
    });

    // Destructuring for ease
    const { title, amount, category, date, paymentMethod, recurring, notes } = formData;

    // Handle Input Changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate required fields
        if (!title || !amount || !category || !date || !paymentMethod) {
            alert("Please fill in all required fields!");
            return;
        }

        // Dispatch action to Redux
        // dispatch(editExpense(formData));

        // Reset Form
        setFormData({
            title: "",
            amount: "",
            category: "",
            date: "",
            paymentMethod: "",
            recurring: false,
            notes: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-gray-100 rounded-md shadow-md">
            {/* Title */}
            <div>
                <label className="block mb-2">Expense Title:</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    placeholder="Enter expense title"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                />
            </div>

            {/* Amount */}
            <div>
                <label className="block mb-2">Amount:</label>
                <input
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={handleChange}
                    placeholder="Enter amount"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                />
            </div>

            {/* Category */}
            <div>
                <label className="block mb-2">Category:</label>
                <select
                    name="category"
                    value={category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                >
                    <option value="">Select a category</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Health">Health</option>
                    <option value="Education">Education</option>
                    <option value="Others">Others</option>
                </select>
            </div>

            {/* Date */}
            <div>
                <label className="block mb-2">Date:</label>
                <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                />
            </div>

            {/* Payment Method */}
            <div>
                <label className="block mb-2">Payment Method:</label>
                <select
                    name="paymentMethod"
                    value={paymentMethod}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                >
                    <option value="">Select payment method</option>
                    <option value="Cash">Cash</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="Digital Wallet">Digital Wallet</option>
                </select>
            </div>

            {/* Recurring Expense */}
            <div className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    name="recurring"
                    id="recurring"
                    checked={recurring}
                    onChange={handleChange}
                />
                <label htmlFor="recurring" className="mb-0">
                    Is this a recurring expense?
                </label>
            </div>

            {/* Notes */}
            <div>
                <label className="block mb-2">Notes:</label>
                <textarea
                    name="notes"
                    value={notes}
                    onChange={handleChange}
                    placeholder="Add additional details (optional)"
                    className="w-full px-3 py-2 border rounded-md"
                ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Save Expense
            </button>
        </form>
    );
};

export default EditExpense;

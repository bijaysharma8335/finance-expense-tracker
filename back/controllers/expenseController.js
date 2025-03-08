import Expense from "../models/Expense.js";

// Add Expense
export const addExpense = async (req, res) => {
    try {
        // const { category, amount, description, date } = req.body;

        const { title, category, amount, date, recurring, paymentMethod, description } = req.body;
        const expense = new Expense({
            userId: req.user.id,
            userId,
            title,
            category,
            amount,
            recurring,
            paymentMethod,
            description,
            date: date || new Date(), // Default to current date if not provided
        });
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Get All Expenses for User
export const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ userId: req.user.id }).sort({ date: -1 });
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Get Single Expense by ID
export const getExpenseById = async (req, res) => {
    try {
        const expense = await Expense.findOne({ _id: req.params.id, userId: req.user.id });
        if (!expense) {
            return res.status(404).json({ message: "Expense not found" });
        }
        res.json(expense);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Update Expense
export const updateExpense = async (req, res) => {
    try {
        const { title, category, amount, description, date, paymentMethod, recurring } = req.body;
        const updatedExpense = await Expense.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.id },
            { title, category, amount, description, date, paymentMethod, recurring },
            { new: true }
        );
        if (!updatedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }
        res.json(updatedExpense);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Delete Expense
export const deleteExpense = async (req, res) => {
    try {
        const deletedExpense = await Expense.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.id,
        });
        if (!deletedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }
        res.json({ message: "Expense deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

import Income from "../models/Income.js";

// Add Income
export const addIncome = async (req, res) => {
    try {
        // const { amount, source, category, date } = req.body;
        const { amount, source, category, date } = req.body;

        const income = new Income({
            userId: req.user.id,
            // userId,
            amount,
            source,
            category,
            date: date || new Date(),
        });
        await income.save();
        res.status(201).json(income);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Get All Incomes for User
export const getIncomes = async (req, res) => {
    try {
        const incomes = await Income.find({ userId: req.user.id }).sort({ date: -1 });
        res.json(incomes);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Get Single Income by ID
export const getIncomeById = async (req, res) => {
    try {
        const income = await Income.findOne({ _id: req.params.id, userId: req.user.id });
        if (!income) {
            return res.status(404).json({ message: "Income record not found" });
        }
        res.json(income);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Update Income
export const updateIncome = async (req, res) => {
    try {
        const { amount, source, category, date } = req.body;
        const updatedIncome = await Income.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.id },
            { amount, source, category, date },
            { new: true }
        );
        if (!updatedIncome) {
            return res.status(404).json({ message: "Income record not found" });
        }
        res.json(updatedIncome);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Delete Income
export const deleteIncome = async (req, res) => {
    try {
        const deletedIncome = await Income.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.id,
        });
        if (!deletedIncome) {
            return res.status(404).json({ message: "Income record not found" });
        }
        res.json({ message: "Income record deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

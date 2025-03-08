import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        title: { type: String, required: true },
        category: { type: String, required: true },
        amount: { type: Number, required: true },
        date: { type: Date, required: true },
        paymentMethod: { type: String, required: true },
        recurring: { type: Boolean, default: false },
        description: { type: String, default: "" },
    },
    { timestamps: true }
);

export default mongoose.model("Expense", expenseSchema);

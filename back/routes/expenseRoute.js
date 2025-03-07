import express from "express";
import {
    getExpenseById,
    getExpenses,
    updateExpense,
    deleteExpense,
    addExpense,
} from "../controllers/expenseController.js";

const router = express.Router();

// router.post("/login", loginUser);
router.post("/add-expense", addExpense);
router.get("/get-all-expense", getExpenses);
router.get("/get-expense/:id", getExpenseById);

router.put("/update-expense/:id ", updateExpense);
router.delete("/delete-expense/:id", deleteExpense);

export default router;

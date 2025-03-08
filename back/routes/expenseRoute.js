import express from "express";
import {
    getExpenseById,
    getExpenses,
    updateExpense,
    deleteExpense,
    addExpense,
} from "../controllers/expenseController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// router.post("/login", loginUser);
router.post("/", authMiddleware, addExpense);
router.get("/", authMiddleware, getExpenses);
router.get("/:id", authMiddleware, getExpenseById);

router.put("/:id ", authMiddleware, updateExpense);
router.delete("/:id", authMiddleware, deleteExpense);

export default router;

import express from "express";
import {
    getIncomeById,
    getIncomes,
    addIncome,
    updateIncome,
    deleteIncome,
} from "../controllers/incomeController.js";

import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();

// router.post("/add-income", authMiddleware,addIncome);
router.post("/",authMiddleware, addIncome);
router.get("/",authMiddleware,  getIncomes);
router.get("/:id",authMiddleware,getIncomeById);
router.put("/:id ",authMiddleware, updateIncome);
router.delete("/:id",authMiddleware,  deleteIncome);

export default router;

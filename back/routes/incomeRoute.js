import express from "express";
import {
    getIncomeById,
    getIncomes,
    addIncome,
    updateIncome,
    deleteIncome,
} from "../controllers/incomeController.js";

// import { authMiddleware } from "../middleware/authMiddleware";
const router = express.Router();

// router.post("/add-income", authMiddleware,addIncome);
router.post("/add-income", addIncome);
router.get("/get-all-income", getIncomes);
router.get("/get-income/:id", getIncomeById);
router.put("/update-income/:id ", updateIncome);
router.delete("/delete-income/:id", deleteIncome);

export default router;

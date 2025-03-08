import express from "express";
import { registerUser, loginUser ,updateUser} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.put("/:id",updateUser)
router.post("/login", loginUser);

export default router;

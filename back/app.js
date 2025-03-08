import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

//import routes
import authRoutes from "./routes/authRoute.js";
import expenseRoutes from "./routes/expenseRoute.js";
import incomeRoutes from "./routes/incomeRoute.js";
var app = express();

dotenv.config({ path: "./config/.env" });

//middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/income", incomeRoutes);

//mongodb connection
mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.log(err));

export default app;

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { UserModel } from "./models/user.model.js";
import ProductRouter from "./routes/user.route.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
mongoose.connect("mongodb://localhost:27017/crud");
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/user", ProductRouter);

app.listen(PORT, () => {
  console.log(`App is listing on port ${PORT}`);
});

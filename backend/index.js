import express from "express";
import cors from "cors";
import ProductRouter from "./routes/user.route.js";
import dotenv from "dotenv";
import { connectDb } from "./db/db.js";

const app = express(); //create app instance
app.use(cors());
app.use(express.json()); // It will tell express to parse body to json format
dotenv.config(); // Load then env file
const PORT = process.env.PORT || 3001; // User port from env file or default 3001

// Users api routes
app.use("/api/user", ProductRouter);

// Start the server with DB
const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`App is listing on port ${PORT}`);
    });
  } catch {
    console.log("Server failed to start due to db error");
    process.exit(1);
  }
};
startServer();

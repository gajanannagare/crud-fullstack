import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // Load the env file

const connectionString = process.env.connectionString;

export const connectDb = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("DB is connected");
  } catch (error) {
    console.log("DB connection failed");
    throw error;
  }
};

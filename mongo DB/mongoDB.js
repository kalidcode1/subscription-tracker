import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js"; // ← Only backend imports

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`✅ MongoDB connected successfully in ${NODE_ENV} mode`);
  } catch (error) {
    console.error('❌ Error connecting to database:', error);
    process.exit(1);
  }
};

export default connectToDatabase;
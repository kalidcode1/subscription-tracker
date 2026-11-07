import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js"; // ← Only backend imports
import dns from 'dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);
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
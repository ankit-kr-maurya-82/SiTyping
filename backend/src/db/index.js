import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {

    if (!process.env.MONGODB_URI) {
      console.log("❌ MONGODB_URI missing in .env");
      process.exit(1);
    }

    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log("MONGODB URI 👉", process.env.MONGODB_URI);

    console.log(
      `✅ MONGODB connected !! DB HOST: ${connectionInstance.connection.host}`
    );

  } catch (error) {
    console.log("❌ MONGODB connection FAILED", error);
    process.exit(1);
  }
};

export default connectDB;

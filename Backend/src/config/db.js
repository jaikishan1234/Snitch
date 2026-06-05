import mongoose from "mongoose";
import { config } from "./config.js";

const connectDB = async () => {
    await mongoose.connect(config.MONGO_URI, {
        dbName: "snitch",
    });

    console.log("MongoDB connected");
};

export default connectDB;
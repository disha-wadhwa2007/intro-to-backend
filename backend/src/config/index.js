import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: "./backend/.env"
});

const app = express();

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.error("Server error:", error);
        });
app.listen(process.env.PORT || 4000, () => {
    console.log("Server running on port 4000");
});

    } catch (error) {
        console.log("MongoDB connection failed!!", error);
    }
};

startServer();
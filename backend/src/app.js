import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Backend API is running successfully!");
});

// User CRUD routes
app.use("/api/users", userRoutes);

export default app;
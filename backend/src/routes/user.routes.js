import express from "express";

import {
    createUser,
    getUsers,
    updateUser,
    deleteUser
} from "../controllers/user.controller.js";

const router = express.Router();

// CREATE user
router.post("/", createUser);

// READ all users
router.get("/", getUsers);

// UPDATE user
router.put("/:id", updateUser);

// DELETE user
router.delete("/:id", deleteUser);

export default router;
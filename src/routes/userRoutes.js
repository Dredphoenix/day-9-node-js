import express from "express";
import { createUser,getUserById,getUsers,updateUser,deleteUser,loginUser } from "../controllers/userControllers.js";
import User from "../models/User.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.delete("/:id",deleteUser)
router.post("/register", createUser);

router.get("/", protect,getUsers);
router.get("/:id",protect,getUserById);
router.put("/:id",protect,updateUser);
router.post("/login",protect,loginUser)


export default router;

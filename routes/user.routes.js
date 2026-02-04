import { createUser, getUsers, updateUser } from "../controllers/user.controller.js";
import express from "express"

const router = express.Router();

router.post("/",createUser);
router.get("/",getUsers);
router.patch("/:id",updateUser);
export default router;
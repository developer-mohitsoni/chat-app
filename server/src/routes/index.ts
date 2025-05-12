import { Router } from "express";
import AuthController from "../controllers/UserController.js";

const router = Router();

// Auth Routes
router.post("/auth/login", AuthController.login);

export default router;

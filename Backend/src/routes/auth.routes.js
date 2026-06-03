import { Router } from "express";
import { validateRegisterUser, validateLoginUser } from "../validator/auth.validator.js";
import { login, register } from "../controllers/auth.controller.js";

const router = Router();


/**
 * @route POST /api/auth/register   
 * @desc Register a new user
 * @access Public
 */
router.post('/register', validateRegisterUser, register)

/**
 * @route POST /api/auth/login
 * @desc Login a user
 * @access Public
 */
router.post("/login", validateLoginUser, login)

export default router;
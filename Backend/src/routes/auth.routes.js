import { Router } from "express";
import {
  validateRegisterUser,
  validateLoginUser,
} from "../validator/auth.validator.js";
import { googleCallback, login, register } from "../controllers/auth.controller.js";
import passport from "passport";
import { config } from "../config/config.js";

const router = Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
router.post("/register", validateRegisterUser, register);

/**
 * @route POST /api/auth/login
 * @desc Login a user
 * @access Public
 */
router.post("/login", validateLoginUser, login);

/**
 * @route GET /api/auth/google
 * @desc Initiate Google OAuth login
 * @access Public
 */
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

/**
 * @route GET /api/auth/google/callback
 * @desc Google OAuth callback
 * @access Public
 */
router.get("/google/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect: config.NODE_ENV == "development" ? "http://localhost:5173/login" : "/login"
    }),
    googleCallback,
)

export default router;

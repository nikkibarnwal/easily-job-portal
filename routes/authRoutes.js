import express from "express";
import {
  handleLogin,
  handleLogout,
  handleRegister,
  postLogin,
} from "../src/controllers/user.controller.js";

const router = express.Router();
router.post("/register", handleRegister);
router.get("/login", handleLogin);

router.post("/login", postLogin);
router.get("/logout", handleLogout);
router.post("/logout", handleLogout);

export default router;

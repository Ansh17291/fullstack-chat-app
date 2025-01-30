import express from "express";
import { login, logout, signup,updateProfile, checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import multer from "multer"
const router = express.Router();

const upload = multer({
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB file size limit
});

router.post("/signup",signup );
router.post("/login", login);
router.post("/logout", logout);
router.put("/update-profile",protectRoute, updateProfile)
router.get("/check", protectRoute, upload.single('file') ,checkAuth);

export default router;
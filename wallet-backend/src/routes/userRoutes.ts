import express from "express";
import { getAllUsers, activateUser, deactivateUser } from "../controllers/userController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", authMiddleware, getAllUsers);
router.put("/:userId/activate", authMiddleware, activateUser);
router.put("/:userId/deactivate", authMiddleware, deactivateUser);

export default router;

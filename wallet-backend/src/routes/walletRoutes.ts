// src/routes/walletRoutes.ts
import { Router } from 'express';
import { verifyToken } from '../middleware/authMiddleware';
import { getWalletBalance } from '../controllers/walletController';

const router = Router();

router.get('/', verifyToken, getWalletBalance);

export default router;

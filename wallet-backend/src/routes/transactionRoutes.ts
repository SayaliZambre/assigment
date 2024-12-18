import { Router } from 'express';
import { verifyToken } from '../middleware/authMiddleware';
import { createTransaction } from '../controllers/transactionController';

const router = Router();

router.post('/', verifyToken, createTransaction);

export default router;

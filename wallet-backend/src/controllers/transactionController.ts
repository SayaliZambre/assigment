import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createTransaction = async (req: Request, res: Response) => {
  const { type, amount, category }: { type: string; amount: number; category: string } = req.body;
  const walletId = req.user.walletId;

  try {
    const transaction = await prisma.transaction.create({
      data: {
        walletId,
        type,
        amount,
        category,
      },
    });

    res.json({ transaction });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

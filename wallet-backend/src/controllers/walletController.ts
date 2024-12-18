import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getWalletBalance = async (req: Request, res: Response) => {
  const userId = req.user.id;

  try {
    const wallet = await prisma.wallet.findUnique({
      where: { userId },
    });

    if (!wallet) return res.status(404).json({ msg: 'Wallet not found' });

    res.json({ balance: wallet.balance });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

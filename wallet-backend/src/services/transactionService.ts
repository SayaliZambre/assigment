import prisma from '../config/db';

const createTransaction = async (walletId: number, type: string, amount: number, category: string) => {
  return await prisma.transaction.create({
    data: { walletId, type, amount, category },
  });
};

const getTransactions = async (walletId: number) => {
  return await prisma.transaction.findMany({
    where: { walletId },
  });
};

export default { createTransaction, getTransactions };

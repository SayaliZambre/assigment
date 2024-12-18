import prisma from '../config/db';

const createWallet = async (userId: number) => {
  return await prisma.wallet.create({
    data: { userId },
  });
};

const getWallet = async (id: number) => {
  return await prisma.wallet.findUnique({
    where: { id },
    include: { transactions: true },
  });
};

export default { createWallet, getWallet };

import prisma from '../config/db';

const createUser = async (username: string, email: string) => {
  return await prisma.user.create({
    data: { username, email },
  });
};

const getAllUsers = async () => {
  return await prisma.user.findMany({ include: { wallets: true } });
};

const deleteUser = async (id: number) => {
  await prisma.user.delete({ where: { id } });
};

export default { createUser, getAllUsers, deleteUser };

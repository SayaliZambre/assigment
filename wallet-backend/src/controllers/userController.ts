import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await prisma.user.findMany();
  res.json(users);
};

export const activateUser = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;
  const user = await prisma.user.update({
    where: { id: parseInt(userId) },
    data: { isActive: true },
  });
  res.json(user);
};

export const deactivateUser = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;
  const user = await prisma.user.update({
    where: { id: parseInt(userId) },
    data: { isActive: false },
  });
  res.json(user);
};

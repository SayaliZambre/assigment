// src/index.ts
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import walletRoutes from './routes/walletRoutes';
import transactionRoutes from './routes/transactionRoutes';
import { verifyToken } from './middleware/authMiddleware';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/wallet', verifyToken, walletRoutes);
app.use('/api/transactions', verifyToken, transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


// backend/index.js
// const express = require('express');
// const cors = require('cors');
// const { PrismaClient } = require('@prisma/client');
// const app = express();
// const prisma = new PrismaClient();

// app.use(cors());
// app.use(express.json());

// // CRUD for Users
// app.post('/users', async (req, res) => {
//   const { username, email } = req.body;
//   const user = await prisma.user.create({
//     data: { username, email },
//   });
//   res.json(user);
// });

// // CRUD for Wallets
// app.post('/wallets', async (req, res) => {
//   const { userId } = req.body;
//   const wallet = await prisma.wallet.create({
//     data: { userId },
//   });
//   res.json(wallet);
// });

// // CRUD for Transactions
// app.post('/transactions', async (req, res) => {
//   const { walletId, type, amount, category } = req.body;
//   const transaction = await prisma.transaction.create({
//     data: { walletId, type, amount, category },
//   });
//   res.json(transaction);
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
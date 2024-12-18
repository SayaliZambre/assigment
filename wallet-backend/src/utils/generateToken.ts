
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export const generateToken = (userId: number) => {
  return jwt.sign({ user: userId }, JWT_SECRET, { expiresIn: '1h' });
};

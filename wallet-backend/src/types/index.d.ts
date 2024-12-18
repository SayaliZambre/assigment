// src/types/index.d.ts
declare global {
    namespace Express {
      interface Request {
        user: any; // You can replace `any` with a custom type for user object
      }
    }
  }
  
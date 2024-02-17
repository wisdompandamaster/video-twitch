import { PrismaClient } from "@prisma/client";

// 如果没有这一段，开发环境中，每次 hot reload 都会创建一个新的 prisma client

// 声明类型
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

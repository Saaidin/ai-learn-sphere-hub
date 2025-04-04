import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export type { BlogPost, Ebook, Video, Donation } from '@prisma/client';
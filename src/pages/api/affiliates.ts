import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const affiliates = await prisma.affiliate.findMany();
      res.status(200).json(affiliates);
    } catch (error) {
      console.error('Error fetching affiliates:', error);
      res.status(500).json({ error: 'Failed to fetch affiliates' });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, company, website, affiliateLink } = req.body;
      const newAffiliate = await prisma.affiliate.create({
        data: {
          name,
          company,
          website,
          affiliateLink,
        },
      });
      res.status(201).json(newAffiliate);
    } catch (error) {
      console.error('Error creating affiliate:', error);
      res.status(500).json({ error: 'Failed to create affiliate' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
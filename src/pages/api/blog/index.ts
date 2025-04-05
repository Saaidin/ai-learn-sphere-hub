import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/models';
import type { BlogPost } from '@prisma/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case 'GET': {
        if (req.query.slug) {
          const post = await prisma.blogPost.findUnique({
            where: { slug: req.query.slug as string }
          });
          if (!post) {
            return res.status(404).json({ error: 'Post not found' });
          }
          return res.status(200).json(post);
        } else {
          const posts = await prisma.blogPost.findMany({
            orderBy: { publishedAt: 'desc' }
          });
          return res.status(200).json(posts);
        }
      }

      case 'POST': {
        const postData = req.body;
        const newPost = await prisma.blogPost.create({
          data: postData
        });
        return res.status(201).json(newPost);
      }

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Blog API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
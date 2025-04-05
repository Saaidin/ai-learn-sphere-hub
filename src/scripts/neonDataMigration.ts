import { PrismaClient } from '@prisma/client';
import { blogPosts, videos, ebooks } from '../data/staticMockData';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: string;
  category: string;
  slug: string;
  content: string;
}

interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  youtubeId: string;
  duration: string;
  description: string;
  category: string;
}

interface Ebook {
  id: string;
  title: string;
  coverImage: string;
  author: string;
  description: string;
  category: string;
  pages: number;
  freePreview: boolean;
}

const prisma = new PrismaClient();

// Mock data extracted from mockData.ts
async function migrateData() {
  try {
    // Clear existing data (optional)
    console.log('Clearing existing data...');
    await prisma.blogPost.deleteMany();
    await prisma.video.deleteMany();
    await prisma.ebook.deleteMany();
    console.log('Existing data cleared');

    // Transform and insert blog posts
    const blogPostsToInsert = blogPosts.map(post => ({
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      coverImage: post.coverImage,
      author: post.author,
      publishedAt: new Date(post.date),
      tags: [post.category]
    }));

    const blogInsertResult = await prisma.blogPost.createMany({
      data: blogPostsToInsert
    });
    console.log(`Inserted ${blogInsertResult.count} blog posts`);

    // Transform and insert ebooks
    const ebooksToInsert = ebooks.map(ebook => ({
      title: ebook.title,
      slug: ebook.title.toLowerCase().replace(/ /g, '-'),
      description: ebook.description,
      coverImage: ebook.coverImage,
      fileUrl: '',
      author: ebook.author,
      publishedAt: new Date(),
      category: ebook.category,
      pages: ebook.pages
    }));

    const ebooksInsertResult = await prisma.ebook.createMany({
      data: ebooksToInsert
    });
    console.log(`Inserted ${ebooksInsertResult.count} ebooks`);

    // Transform and insert videos
    const videosToInsert = videos.map(video => {
      const [minutes, seconds] = video.duration.split(':').map(Number);
      return {
        title: video.title,
        youtubeId: video.youtubeId,
        description: video.description,
        thumbnail: video.thumbnailUrl,
        duration: minutes * 60 + seconds,
        publishedAt: new Date(),
        tags: [video.category]
      };
    });

    const videosInsertResult = await prisma.video.createMany({
      data: videosToInsert
    });
    console.log(`Inserted ${videosInsertResult.count} videos`);

    console.log('Data migration completed successfully');
  } catch (error) {
    console.error('Error during data migration:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

migrateData();
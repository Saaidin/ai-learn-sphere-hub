import { PrismaClient } from '@prisma/client';

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
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Machine Learning: A Beginner\'s Guide',
    excerpt: 'Learn the fundamentals of machine learning and how to implement your first ML models with Python and TensorFlow.',
    coverImage: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024',
    date: 'Nov 5, 2023',
    author: 'Dr. Sarah Johnson',
    category: 'Machine Learning',
    slug: 'getting-started-with-machine-learning',
    content: 'This is a detailed guide on getting started with machine learning, covering the basics and providing practical examples using Python and TensorFlow.'
  },
  {
    id: '2',
    title: 'Understanding Large Language Models: From GPT-3 to GPT-4',
    excerpt: 'Explore the evolution of language models and how they\'re revolutionizing natural language processing in applications today.',
    coverImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024',
    date: 'Oct 22, 2023',
    author: 'Michael Chen',
    category: 'NLP',
    slug: 'understanding-large-language-models',
    content: 'This article explores the development of large language models, their architecture, and their impact on natural language processing.'
  },
  {
    id: '3',
    title: 'Computer Vision Techniques for Object Detection',
    excerpt: 'A comprehensive look at how computer vision algorithms detect and classify objects in images and video streams.',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024',
    date: 'Oct 10, 2023',
    author: 'Emily Rodriguez',
    category: 'Computer Vision',
    slug: 'computer-vision-techniques',
    content: 'An in-depth look at computer vision techniques for object detection, including algorithms and real-world applications.'
  }
];

const videos: Video[] = [
  {
    id: '1',
    title: 'Introduction to Neural Networks',
    thumbnailUrl: 'https://i.ytimg.com/vi/aircAruvnKk/maxresdefault.jpg',
    youtubeId: 'aircAruvnKk',
    duration: '18:42',
    description: 'Learn the basic structure and functionality of neural networks in this beginner-friendly tutorial.',
    category: 'Deep Learning'
  },
  {
    id: '2',
    title: 'Building a Chatbot with Transformers',
    thumbnailUrl: 'https://i.ytimg.com/vi/TQQlZhbC5ps/maxresdefault.jpg',
    youtubeId: 'TQQlZhbC5ps',
    duration: '24:15',
    description: 'Step-by-step guide to creating your own AI chatbot using transformer models and Python.',
    category: 'NLP'
  },
  {
    id: '3',
    title: 'Reinforcement Learning Explained',
    thumbnailUrl: 'https://i.ytimg.com/vi/2pWv7GOvuf0/maxresdefault.jpg',
    youtubeId: '2pWv7GOvuf0',
    duration: '32:18',
    description: 'Understanding the principles behind reinforcement learning algorithms and their applications.',
    category: 'Reinforcement Learning'
  }
];

const ebooks: Ebook[] = [
  {
    id: '1',
    title: 'The Ultimate Guide to Deep Learning',
    coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500',
    author: 'Dr. Alan Smith',
    description: 'A comprehensive guide to understanding and implementing deep learning models from scratch.',
    category: 'Deep Learning',
    pages: 248,
    freePreview: true
  },
  {
    id: '2',
    title: 'Natural Language Processing with Python',
    coverImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500',
    author: 'Jennifer Wu',
    description: 'Learn how to process and analyze text data using state-of-the-art NLP techniques.',
    category: 'NLP',
    pages: 186,
    freePreview: false
  },
  {
    id: '3',
    title: 'AI Ethics and Governance',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500',
    author: 'Dr. Robert Miller',
    description: 'Exploring the ethical implications of artificial intelligence and approaches to responsible AI development.',
    category: 'AI Ethics',
    pages: 214,
    freePreview: true
  }
];

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
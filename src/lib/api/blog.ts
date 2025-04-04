import { getBlogPostsCollection, BlogPost } from '../models';

interface BlogPostResponse {
  status: number;
  data?: unknown;
  error?: string;
}

export async function getBlogPosts(): Promise<BlogPostResponse> {
  try {
    const collection = await getBlogPostsCollection();
    const posts = await collection.find().sort({ publishedAt: -1 }).toArray();
    return { status: 200, data: posts };
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return { status: 500, error: 'Failed to fetch blog posts' };
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostResponse> {
  try {
    const collection = await getBlogPostsCollection();
    const post = await collection.findOne({ slug });
    
    if (!post) {
      return { status: 404, error: 'Post not found' };
    }
    
    return { status: 200, data: post };
  } catch (error) {
    console.error('Failed to fetch blog post:', error);
    return { status: 500, error: 'Failed to fetch blog post' };
  }
}

export async function createBlogPost(postData: BlogPost): Promise<BlogPostResponse> {
  try {
    const collection = await getBlogPostsCollection();
    const result = await collection.insertOne(postData);
    return { status: 201, data: result };
  } catch (error) {
    console.error('Failed to create blog post:', error);
    return { status: 500, error: 'Failed to create blog post' };
  }
}
interface BlogPostData {
  title: string;
  slug: string;
  content: string;
  publishedAt: Date | string;
  excerpt?: string;
  imageUrl?: string;
}

interface BlogPostResponse {
  status: number;
  data?: unknown;
  error?: string;
}

const API_BASE_URL = 'http://localhost:3000/api';

export async function getBlogPosts(): Promise<BlogPostResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/blog`);
    if (!response.ok) {
      return { 
        status: response.status, 
        error: await response.text() 
      };
    }
    const data = await response.json();
    return { status: 200, data };
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return { status: 500, error: 'Failed to fetch blog posts' };
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/blog?slug=${encodeURIComponent(slug)}`);
    if (!response.ok) {
      return { 
        status: response.status, 
        error: await response.text() 
      };
    }
    const data = await response.json();
    return { status: 200, data };
  } catch (error) {
    console.error('Failed to fetch blog post:', error);
    return { status: 500, error: 'Failed to fetch blog post' };
  }
}

export async function createBlogPost(postData: BlogPostData): Promise<BlogPostResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/blog`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    });
    if (!response.ok) {
      return { 
        status: response.status, 
        error: await response.text() 
      };
    }
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error('Failed to create blog post:', error);
    return { status: 500, error: 'Failed to create blog post' };
  }
}

export async function updateBlogPost(slug: string, postData: BlogPostData): Promise<BlogPostResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/blog?slug=${encodeURIComponent(slug)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      return {
        status: response.status,
        error: await response.text(),
      };
    }
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error('Failed to update blog post:', error);
    return { status: 500, error: 'Failed to update blog post' };
}
  }
export async function deleteBlogPost(slug: string): Promise<BlogPostResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/blog?slug=${encodeURIComponent(slug)}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      return {
        status: response.status,
        error: await response.text(),
      };
    }
    return { status: response.status };
  } catch (error) {
    console.error('Failed to delete blog post:', error);
    return { status: 500, error: 'Failed to delete blog post' };
  }
}
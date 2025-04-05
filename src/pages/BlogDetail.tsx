import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { deleteBlogPost } from '../lib/api/blog';

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
const handleDelete = async () => {
  if (confirm('Are you sure you want to delete this post?')) {
    const result = await deleteBlogPost(slug as string);
    if (result.status === 200) {
      window.location.href = '/blog';
    } else {
      alert('Failed to delete the post: ' + (result.error || 'Unknown error'));
    }
  }
};


  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/api/blog?slug=${slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog post');
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Blog post not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose lg:prose-xl">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full rounded-lg mb-8"
          />
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-600">{post.publishedAt}</span>
            <span className="text-gray-600">by {post.author}</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {post.category || 'Uncategorized'}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>
          <div className="prose max-w-none whitespace-pre-wrap">
            {post.content}
          </div>
        </article>
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => window.location.href = `/blog/edit/${slug}`}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
          >
            Delete
          </button>
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;
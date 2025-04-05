import React from 'react';
import { useBlogPosts } from '@/data/mockData';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();
  const { blogPosts } = useBlogPosts();
  
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl">Post not found</h1>
    </div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <article>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-gray-600">{post.date}</span>
            <span className="text-gray-600">by {post.author}</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {post.category}
            </span>
          </div>
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          <div className="prose max-w-none">
            <p>{post.content}</p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
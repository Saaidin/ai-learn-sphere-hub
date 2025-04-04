import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useBlogPosts } from '@/data/mockData';

const BlogPost = () => {
  const { blogPosts } = useBlogPosts();
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">Blog post not found.</h3>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container px-4 mx-auto py-12">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-8">{post.content}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
import React from 'react';
import { useAdminData } from '@/data/mockData';

const AdminBlogPosts = () => {
  const { blogPosts } = useAdminData();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="space-y-4">
        {blogPosts.map(post => (
          <div key={post.id} className="border rounded-lg p-4">
            <h3 className="font-medium">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBlogPosts;
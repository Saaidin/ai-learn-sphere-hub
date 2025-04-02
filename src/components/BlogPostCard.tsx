
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: string;
  category: string;
  slug: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article className="content-card">
      <Link to={`/blog/${post.slug}`}>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-5">
          <Badge variant="secondary" className="mb-2">{post.category}</Badge>
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="flex items-center">
              <User size={16} className="mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogPostCard;

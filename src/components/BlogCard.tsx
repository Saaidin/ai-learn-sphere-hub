import React from 'react';
import { Link } from 'react-router-dom'; // or 'next/link' if using Next.js
import { BlogCardProps } from './types';

const BlogCard = ({ 
  title, 
  excerpt, 
  coverImage, 
  date, 
  author, 
  category, 
  slug 
}: BlogCardProps) => {
  return (
    <div className="blog-card">
      <Link to={`/blog/${slug}`}>
        <img src={coverImage} alt={title} />
      </Link>
      <div className="blog-content">
        <Link to={`/blog/${slug}`}>
          <h3>{title}</h3>
        </Link>
        <p>{excerpt}</p>
        <div className="blog-meta">
          <span>{date}</span>
          <span>{author}</span>
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
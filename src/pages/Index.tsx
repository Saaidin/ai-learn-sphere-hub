
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturedSection from '@/components/FeaturedSection';
import BlogPostCard, { BlogPost } from '@/components/BlogPostCard';
import VideoCard, { Video } from '@/components/VideoCard';
import EbookCard, { Ebook } from '@/components/EbookCard';
import SubscriptionForm from '@/components/SubscriptionForm';
import { useBlogPosts, useVideos, useEbooks } from '@/data/mockData';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { BookOpen, Youtube, Book } from "lucide-react";
import VibeCodeCard from '@/components/VibeCodeCard';
 

const Index = () => {
  const { blogPosts } = useBlogPosts();
  const { videos } = useVideos();
  const { ebooks } = useEbooks();
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Blog Posts */}
        <FeaturedSection 
          title="Latest Blog Posts" 
          subtitle="Stay updated with our most recent AI learning articles"
          linkTo="/blog"
          linkText="View All Posts"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post: BlogPost) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </FeaturedSection>
        
        {/* Featured Videos */}
        <div className="bg-gray-50 py-16">
          <FeaturedSection 
            title="Educational Videos" 
            subtitle="Visual tutorials to enhance your AI knowledge"
            linkTo="/videos"
            linkText="Explore All Videos"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video: Video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </FeaturedSection>
        </div>
        
        {/* Featured eBooks */}
        <FeaturedSection 
          title="eBooks Collection" 
          subtitle="Comprehensive guides for in-depth learning"
          linkTo="/ebooks"
          linkText="Browse All eBooks"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ebooks.map((ebook: Ebook) => (
              <EbookCard key={ebook.id} ebook={ebook} />
            ))}
          </div>
        <FeaturedSection
          title="Featured Vibe-Coding"
          subtitle="Explore our latest coding tutorials and challenges"
          linkTo="/vibe-coding"
          linkText="View All Vibe Coding"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: '1',
                coverImage: '/images/vibe-code/vc-1.png',
                title: 'Intro to JavaScript',
                author: 'Jane Doe',
                description: '',
                category: '',
                pages: 0,
                freePreview: false,
              },
              {
                id: '2',
                coverImage: '/images/vibe-code/vc-2.png',
                title: 'Mastering Python',
                author: 'John Smith',
                description: '',
                category: '',
                pages: 0,
                freePreview: false,
              },
              {
                id: '3',
                coverImage: '/images/vibe-code/vc-3.png',
                title: 'React for Beginners',
                author: 'Alice Johnson',
                description: '',
                category: '',
                pages: 0,
                freePreview: false,
              }
            ].map(item => (
              <VibeCodeCard key={item.id} vibeCode={item} />
            ))}
          </div>
        </FeaturedSection>
        </FeaturedSection>
        
        {/* Newsletter Section */}
      </main>

    </div>
  );
};

export default Index;

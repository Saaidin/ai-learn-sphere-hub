
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

const Index = () => {
  const { blogPosts } = useBlogPosts();
  const { videos } = useVideos();
  const { ebooks } = useEbooks();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

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
          title="AI eBooks Collection" 
          subtitle="Comprehensive guides for in-depth learning"
          linkTo="/ebooks"
          linkText="Browse All eBooks"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ebooks.map((ebook: Ebook) => (
              <EbookCard key={ebook.id} ebook={ebook} />
            ))}
          </div>
        </FeaturedSection>
        
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-ai-primary to-ai-secondary text-white py-20">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Subscribe for Free AI Resources</h2>
                <p className="text-lg mb-6 text-white/80">
                  Join our community and get access to exclusive eBooks, tutorials, and AI learning materials. Stay updated with the latest advancements in artificial intelligence.
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-3">
                    <BookOpen className="h-6 w-6" />
                    <span>Weekly Updates</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-3">
                    <Book className="h-6 w-6" />
                    <span>Free eBooks</span>
                  </div>
                </div>
              </div>
              <div>
                <SubscriptionForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

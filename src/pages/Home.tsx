import React from 'react';
import Hero from '@/components/Hero';
import FeaturedSection from '@/components/FeaturedSection';
import BlogPostCard, { BlogPost } from '@/components/BlogPostCard';
import VideoCard, { Video } from '@/components/VideoCard';
import EbookCard, { Ebook } from '@/components/EbookCard';
import DonationForm from '@/components/DonationForm';
import SubscriptionForm from '@/components/SubscriptionForm';
import Grid from '@/components/ui/grid';

const Home = () => {
  // Sample data for blog posts
  const featuredBlogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Getting Started with Machine Learning',
      excerpt: 'Learn the basics of machine learning and how to implement your first model.',
      coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Oct 15, 2023',
      author: 'Jane Smith',
      category: 'Machine Learning',
      slug: 'getting-started-with-machine-learning'
    },
    {
      id: '2',
      title: 'Understanding Neural Networks',
      excerpt: 'A comprehensive guide to neural networks and deep learning fundamentals.',
      coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Sep 28, 2023',
      author: 'John Doe',
      category: 'Deep Learning',
      slug: 'understanding-neural-networks'
    },
    {
      id: '3',
      title: 'The Future of AI in Healthcare',
      excerpt: 'Exploring how artificial intelligence is transforming the healthcare industry.',
      coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Aug 10, 2023',
      author: 'Sarah Johnson',
      category: 'AI Applications',
      slug: 'future-of-ai-in-healthcare'
    }
  ];

  // Sample data for videos
  const featuredVideos: Video[] = [
    {
      id: '1',
      title: 'Introduction to Natural Language Processing',
      thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '15:30',
      description: 'Learn the basics of NLP and how to process text data.',
      category: 'NLP'
    },
    {
      id: '2',
      title: 'Building Your First Neural Network with TensorFlow',
      thumbnailUrl: 'https://img.youtube.com/vi/tPYj3fFJGjk/maxresdefault.jpg',
      youtubeId: 'tPYj3fFJGjk',
      duration: '22:45',
      description: 'A step-by-step guide to creating neural networks using TensorFlow.',
      category: 'Deep Learning'
    }
  ];

  // Sample data for ebooks
  const featuredEbooks: Ebook[] = [
    {
      id: '1',
      title: 'Complete Guide to Machine Learning Algorithms',
      coverImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Dr. Alan Turing',
      description: 'A comprehensive guide covering all major machine learning algorithms with practical examples.',
      category: 'Machine Learning',
      pages: 245,
      freePreview: true
    },
    {
      id: '2',
      title: 'AI Ethics and Responsible Development',
      coverImage: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Maria Rodriguez',
      description: 'Exploring the ethical considerations and responsible practices in AI development.',
      category: 'AI Ethics',
      pages: 180,
      freePreview: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Blog Posts */}
      <FeaturedSection
        title="Latest Blog Posts"
        subtitle="Explore our most recent articles on AI and machine learning"
        linkTo="/blog"
        linkText="View All Posts"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBlogPosts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </FeaturedSection>

      {/* Featured Videos */}
      <FeaturedSection
        title="Educational Videos"
        subtitle="Watch our instructional videos on AI topics"
        linkTo="/videos"
        linkText="View All Videos"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </FeaturedSection>

      {/* Featured eBooks */}
      <FeaturedSection
        title="eBooks"
        subtitle="Download comprehensive guides and resources"
        linkTo="/ebooks"
        linkText="View All eBooks"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredEbooks.map(ebook => (
            <EbookCard key={ebook.id} ebook={ebook} />
          ))}
        </div>
      </FeaturedSection>

     
    </div>
  );
};

export default Home;

// Example usage in your Home component:
<Grid cols={3} gap={6}>
  {/* Your grid items here */}
</Grid>
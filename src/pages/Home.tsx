import React from 'react';
import { useEbooks } from '@/data/mockData';
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

const { ebooks } = useEbooks();
const displayedEbooks = React.useMemo(() => {
  // Sort all ebooks by published date first
  const sortedEbooks = [...ebooks].sort((a, b) => {
    const dateA = new Date(a.publishedDate || '').getTime();
    const dateB = new Date(b.publishedDate || '').getTime();
    return dateB - dateA; // Sort in descending order (newest first)
    });
  
  // Take the first 3 ebooks
  return sortedEbooks.slice(0, 3);
  }, [ebooks]);
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
        title="Free Preview eBooks"
        subtitle="Explore sample chapters from our collection"
        linkTo="/ebooks"
        linkText="Browse Full Library"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{displayedEbooks.map(ebook => (
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
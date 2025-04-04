
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPostCard, { BlogPost } from '@/components/BlogPostCard';
import { useBlogPosts } from '@/data/mockData';
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { blogPosts } = useBlogPosts();
  const [filteredPosts, setFilteredPosts] = React.useState(blogPosts);
  
  // Duplicate the blog posts a few times to show more content
  const allBlogPosts = [...blogPosts, ...blogPosts.map(post => ({...post, id: post.id + '-dup1'}))];
  
  React.useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredPosts(allBlogPosts);
    } else {
      const filtered = allBlogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchQuery]);
  
  // Extract unique categories for the filter
  const categories = Array.from(new Set(allBlogPosts.map(post => post.category)));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-ai-light py-12">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">AI Learning Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our collection of articles on machine learning, deep learning,
              computer vision, and more AI topics.
            </p>
          </div>
        </div>
        
        {/* Search & Filters */}
        <div className="container px-4 mx-auto py-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
            <div className="relative w-full md:w-96">
              <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant="outline" 
                className="cursor-pointer hover:bg-ai-primary hover:text-white"
                onClick={() => setSearchQuery("")}
              >
                All
              </Badge>
              {categories.map(category => (
                <Badge 
                  key={category} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-ai-primary hover:text-white"
                  onClick={() => setSearchQuery(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post: BlogPost) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No articles found matching your search.</h3>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;

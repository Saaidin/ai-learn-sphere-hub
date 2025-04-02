
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EbookCard, { Ebook } from '@/components/EbookCard';
import { ebooks } from '@/data/mockData';
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ebooks = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredEbooks, setFilteredEbooks] = React.useState(ebooks);
  
  // Duplicate the ebooks a few times to show more content
  const allEbooks = [...ebooks, ...ebooks.map(ebook => ({...ebook, id: ebook.id + '-dup1'}))];
  
  React.useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredEbooks(allEbooks);
    } else {
      const filtered = allEbooks.filter(ebook => 
        ebook.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        ebook.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ebook.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ebook.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredEbooks(filtered);
    }
  }, [searchQuery]);
  
  // Extract unique categories for the filter
  const categories = Array.from(new Set(allEbooks.map(ebook => ebook.category)));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-ai-light py-12">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">AI Learning eBooks</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Download comprehensive guides and resources to master artificial intelligence concepts.
            </p>
            <Link to="/subscribe">
              <Button size="lg" className="bg-gradient-to-r from-ai-primary to-ai-secondary hover:opacity-90">
                <BookOpen className="mr-2 h-5 w-5" />
                Get Free eBooks
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Search & Filters */}
        <div className="container px-4 mx-auto py-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
            <div className="relative w-full md:w-96">
              <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
              <Input
                placeholder="Search eBooks..."
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
          
          {/* eBooks Grid */}
          {filteredEbooks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEbooks.map((ebook: Ebook) => (
                <EbookCard key={ebook.id} ebook={ebook} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No eBooks found matching your search.</h3>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Ebooks;

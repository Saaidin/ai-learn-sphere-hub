
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { BookOpen, Youtube, Book, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-ai-primary to-ai-secondary rounded-md p-1.5">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-ai-dark">AI Learning Platform</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="p-2 md:hidden" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/blog" className="text-gray-600 hover:text-ai-primary font-medium">Blog</Link>
          <Link to="/videos" className="text-gray-600 hover:text-ai-primary font-medium">Videos</Link>
          <Link to="/ebooks" className="text-gray-600 hover:text-ai-primary font-medium">eBooks</Link>
          <Link to="/donate">
            <Button className="bg-ai-secondary hover:bg-ai-accent">
              Support Us
            </Button>
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container py-3 px-4 flex flex-col">
            <Link to="/blog" className="py-3 text-lg font-medium border-b border-gray-100">Blog</Link>
            <Link to="/videos" className="py-3 text-lg font-medium border-b border-gray-100">Videos</Link>
            <Link to="/ebooks" className="py-3 text-lg font-medium border-b border-gray-100">eBooks</Link>
            <Link to="/donate" className="py-3 text-lg font-medium border-b border-gray-100">Support Us</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

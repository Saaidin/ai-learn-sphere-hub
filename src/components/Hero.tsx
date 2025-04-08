
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { BookOpen, Youtube, Book } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-ai-light py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-ai-dark mb-4">
              Master AI with Expert Resources
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Explore our collection of curated blog posts, instructional videos, 
              and comprehensive eBooks to enhance your knowledge of artificial intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-ai-primary to-ai-secondary hover:opacity-90">
                <Link to="/blog">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Start Learning
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-ai-primary text-ai-primary hover:bg-ai-light">
                <a href="http://localhost:8080/donate">
                  <Book className="mr-2 h-5 w-5" />
                  Get Free eBooks
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024" 
                alt="AI Learning Platform" 
                className="w-full h-auto rounded-2xl" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ai-primary/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-3 text-ai-dark">
                <span className="font-semibold">Trusted by</span>
                <span className="text-xl font-bold">10K+</span>
                <span>Learners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

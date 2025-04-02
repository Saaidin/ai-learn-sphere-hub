
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-ai-primary to-ai-secondary rounded-md p-1.5">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-ai-dark">AI Learning Platform</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Your gateway to AI learning resources, tutorials, and insights. Access blog posts, 
              videos, and eBooks to enhance your understanding of artificial intelligence.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://twitter.com" className="text-gray-400 hover:text-ai-primary">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-ai-primary">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-ai-primary">
                <Github size={20} />
              </a>
              <a href="mailto:dinme73@gmail.com" className="text-gray-400 hover:text-ai-primary">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-600 hover:text-ai-primary">Blog</Link></li>
              <li><Link to="/videos" className="text-gray-600 hover:text-ai-primary">Videos</Link></li>
              <li><Link to="/ebooks" className="text-gray-600 hover:text-ai-primary">eBooks</Link></li>
              <li><Link to="/donate" className="text-gray-600 hover:text-ai-primary">Support Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: dinme73@gmail.com</li>
              <li><Link to="/subscribe" className="text-gray-600 hover:text-ai-primary">Subscribe</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AI Learning Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

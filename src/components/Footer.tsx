
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Twitter, Facebook, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/images/logo.png" alt="AI Learning Platform Logo" className="h-10" />
              <span className="text-xl font-bold text-ai-dark">AI Learning Platform</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Your gateway to AI learning resources, tutorials, and insights. Access blog posts, 
              videos, and eBooks to enhance your understanding of artificial intelligence.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://x.com/din_webdev" className="text-gray-400 hover:text-ai-primary" title="Twitter profile">
                <Twitter size={20} />
              </a>
              <a href="https://www.facebook.com" className="text-gray-400 hover:text-ai-primary" title="Facebook profile">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/in/dinwebai" className="text-gray-400 hover:text-ai-primary" title="LinkedIn profile">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Saaidin" className="text-gray-400 hover:text-ai-primary" title="GitHub profile">
                <Github size={20} />
              </a>
              <a href="mailto:saaidin@dinwebai.com" className="text-gray-400 hover:text-ai-primary" title="Email contact">
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
              <li className="text-gray-600">Email: saaidin@dinwebai.com</li>
              <li><Link to="/donate" className="text-gray-600 hover:text-ai-primary">Subscribe</Link></li>
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

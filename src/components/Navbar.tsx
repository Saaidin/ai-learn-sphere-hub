import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BookOpen, Youtube, Book, Menu, X, LogIn, LogOut, UserPlus } from "lucide-react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);

  const [isAdmin, setIsAdmin] = React.useState(false);

  React.useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleRegisterSuccess = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('isAdmin');
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="rounded-md p-1.5">
            <img src="/images/logo.png" alt="AI Learning Platform Logo" className="h-6 w-auto" />
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
          <Link to="/blog" className="text-gray-600 hover:text-ai-primary font-medium hidden lg:inline-block">Blog</Link>
          <Link to="/videos" className="text-gray-600 hover:text-ai-primary font-medium hidden lg:inline-block">Videos</Link>
          <Link to="/ebooks" className="text-gray-600 hover:text-ai-primary font-medium hidden lg:inline-block">eBooks</Link>
          <Link to="/vibe-coding" className="text-gray-600 hover:text-ai-primary font-medium hidden lg:inline-block">Vibe-Coding</Link>
          <Link to="/affiliate" className="text-gray-600 hover:text-ai-primary font-medium">Affiliate</Link>
          {/* Apps Dropdown */}
          <div className="relative group">
            <button className="text-gray-600 hover:text-ai-primary font-medium">
              Apps
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md py-2 w-48">
              <a 
                href="https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%2210L0a8z0Ott4tLzg1PFOFOGl2VBFaZs0Y%22%5D,%22action%22:%22open%22,%22userId%22:%22104331283696219512331%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing"
                target="_blank"
                rel="noopener noreferrer" 
                className="block px-4 py-2 text-gray-600 hover:text-ai-primary font-medium hover:bg-gray-100"
              >
                Resepi Ideas
              </a>
              <a 
                href="https://online-course-platform-umber.vercel.app"
                target="_blank"
                rel="noopener noreferrer" 
                className="block px-4 py-2 text-gray-600 hover:text-ai-primary font-medium hover:bg-gray-100"
              >
                Online Course Platform
              </a>
              <a 
                href="https://elliot-wave-ai-analyzer.vercel.app"
                target="_blank"
                rel="noopener noreferrer" 
                className="block px-4 py-2 text-gray-600 hover:text-ai-primary font-medium hover:bg-gray-100"
              >
                Elliott Wave AI Analyzer
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-600 hover:text-ai-primary font-medium">
              Games
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md py-2 w-48">
              <a href="https://claude.ai/public/artifacts/39226c1b-f1cc-44db-8778-b8e412e6f607" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-600 hover:text-ai-primary font-medium hover:bg-gray-100">
                Chess
              </a>
            </div>
          </div>
          <Link to="/donate">
            <Button className="bg-ai-secondary hover:bg-ai-accent">
              Support Us
            </Button>
          </Link>
        </nav>
      </div>

      {/* Login Dialog */}
      <Dialog open={showLogin} onOpenChange={setShowLogin}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login to your account</DialogTitle>
          </DialogHeader>
          <LoginForm onSuccess={handleLoginSuccess} />
        </DialogContent>
      </Dialog>

      {/* Registration Dialog */}
      <Dialog open={showRegister} onOpenChange={setShowRegister}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new account</DialogTitle>
          </DialogHeader>
          <RegistrationForm onSuccess={handleRegisterSuccess} />
        </DialogContent>
      </Dialog>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container py-3 px-4 flex flex-col">
            <Link to="/blog" className="py-3 text-lg font-medium border-b border-gray-100">Blog</Link>
            <Link to="/videos" className="py-3 text-lg font-medium border-b border-gray-100">Videos</Link>
            <Link to="/ebooks" className="py-3 text-lg font-medium border-b border-gray-100">eBooks</Link>
            <Link to="/affiliate" className="py-3 text-lg font-medium border-b border-gray-100">Affiliate</Link>
            <div className="relative group">
              <button className="py-3 text-lg font-medium border-b border-gray-100">
                Apps
              </button>
              <div className="pl-4 hidden group-hover:block">
                <a
                  href="https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%2210L0a8z0Ott4tLzg1PFOFOGl2VBFaZs0Y%22%5D,%22action%22:%22open%22,%22userId%22:%22104331283696219512331%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 text-lg font-medium border-b border-gray-100 block"
                >
                  Resepi Ideas
                </a>
                <a
                  href="https://online-course-platform-umber.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 text-lg font-medium border-b border-gray-100 block"
                >
                  Online Course Platform
                </a>
                <a
                  href="https://elliot-wave-ai-analyzer.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 text-lg font-medium border-b border-gray-100 block"
                >
                  Elliott Wave AI Analyzer
                </a>
              </div>
            </div>
            <div  className="relative group">
              <button className="py-3 text-lg font-medium border-b border-gray-100">
                Games
              </button>
              <div className="pl-4 hidden group-hover:block">
                <a
                  href="https://claude.ai/public/artifacts/39226c1b-f1cc-44db-8778-b8e412e6f607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 text-lg font-medium border-b border-gray-100 block"
                >
                  Chess
                </a>
              </div>
            </div>
            <Link to="/donate" className="py-3 text-lg font-medium border-b border-gray-100">Support Us</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

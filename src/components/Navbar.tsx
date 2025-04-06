
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
          <Link to="/blog" className="text-gray-600 hover:text-ai-primary font-medium">Blog</Link>
          <Link to="/videos" className="text-gray-600 hover:text-ai-primary font-medium">Videos</Link>
          <Link to="/ebooks" className="text-gray-600 hover:text-ai-primary font-medium">eBooks</Link>
          <Link to="/vibe-coding" className="text-gray-600 hover:text-ai-primary font-medium">Vibe Coding</Link>
          <Link to="/donate">
            <Button className="bg-ai-secondary hover:bg-ai-accent">
              Support Us
            </Button>
          </Link>
          {!isLoggedIn ? (
            <>
              <Button
                onClick={() => setShowRegister(true)}
                variant="outline"
                className="text-ai-primary border-ai-primary hover:bg-ai-primary/10"
              >
                <UserPlus className="mr-2 h-4 w-4" /> Sign Up
              </Button>
              <Button
                onClick={() => setShowLogin(true)}
                className="bg-ai-primary hover:bg-ai-accent"
              >
                <LogIn className="mr-2 h-4 w-4" /> Login
              </Button>
            </>
          ) : (
            <>
              {isAdmin && (
                <Link to="/admin" className="hidden md:block">
                  <Button variant="outline" className="text-ai-secondary border-ai-secondary hover:bg-ai-secondary/10">
                    Admin Panel
                  </Button>
                </Link>
              )}
              <Button
                onClick={handleLogout}
                variant="outline"
                className="text-ai-primary border-ai-primary hover:bg-ai-primary/10"
              >
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </>
          )}
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
            <Link to="/donate" className="py-3 text-lg font-medium border-b border-gray-100">Support Us</Link>
            {!isLoggedIn ? (
              <button
                onClick={() => setShowLogin(true)}
                className="py-3 text-lg font-medium border-b border-gray-100 text-left"
              >
                Login
              </button>
            ) : (
              <>
                {isAdmin && (
                  <Link to="/admin" className="py-3 text-lg font-medium border-b border-gray-100 text-left">
                    Admin Panel
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="py-3 text-lg font-medium border-b border-gray-100 text-left text-ai-primary"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

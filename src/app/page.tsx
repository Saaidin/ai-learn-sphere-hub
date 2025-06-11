import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

const Page = () => {
  // First, check if user has already signed up
  const [isNewUser, setIsNewUser] = useState(() => {
    // If hasSignedUp is true, then user is not new
    return localStorage.getItem('hasSignedUp') !== 'true';
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setIsNewUser(localStorage.getItem('hasSignedUp') !== 'true');
      setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleOpenModal = () => {
    console.log('Opening modal...');
  };

  const handleSignUp = async () => {
    try {
      // Set hasSignedUp to true in localStorage first
      localStorage.setItem('hasSignedUp', 'true');
      localStorage.setItem('isAuthenticated', 'true');
      // Then update states
      setIsNewUser(false);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const handleLogin = async () => {
    try {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    setIsAuthenticated(false);
    // Don't change isNewUser or hasSignedUp status
  };

  return (
    <main className="container mx-auto px-4 py-6">
      <div style={{ backgroundColor: 'white' }}> {/* Added background color */}
        <Header
          openAddModal={handleOpenModal}
          isAuthenticated={isAuthenticated}
          isNewUser={isNewUser}
          onSignUp={handleSignUp}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
      </div> {/* Closing div */}
    </main>
  );
};

export default Page;
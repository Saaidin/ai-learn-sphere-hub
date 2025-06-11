import React from 'react';
import { Plus, LogIn, LogOut, UserPlus } from 'lucide-react';
import { Button } from '../components/ui/button';

interface HeaderProps {
  openAddModal: () => void;
  isAuthenticated: boolean;
  isNewUser: boolean;
  onSignUp: () => void;
  onLogin: () => void;
  onLogout: () => void;
}

const Header = ({ 
  openAddModal, 
  isAuthenticated, 
  isNewUser,
  onSignUp,
  onLogin,
  onLogout 
}: HeaderProps) => {
  const renderAuthButton = () => {
    console.log("isAuthenticated:", isAuthenticated);
    console.log("isNewUser:", isNewUser);
    if (isAuthenticated) {
      return (
        <Button onClick={onLogout} variant="outline" className="flex items-center gap-2">
          <LogOut size={16} />
          <span>Log Out</span>
        </Button>
      );
    }
    
    if (isNewUser) {
      return (
        <Button onClick={onSignUp} variant="outline" className="flex items-center gap-2">
          <UserPlus size={16} />
          <span>Sign Up</span>
        </Button>
      );
    }

    return (
      <Button onClick={onLogin} variant="outline" className="flex items-center gap-2">
        <LogIn size={16} />
        <span>Login</span>
      </Button>
    );
  };

  return (
    <header className="border-b pb-4 mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Affiliate Link Manager</h1>
          <p className="text-muted-foreground">
            Track and manage all your affiliate partnerships in one place
          </p>
        </div>
        <div className="flex items-center gap-2">
          {renderAuthButton()}
          {isAuthenticated && (
            <Button onClick={openAddModal} className="flex items-center gap-2">
              <Plus size={16} />
              <span>Add Affiliate</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
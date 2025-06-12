import React from 'react';
import { Plus, LogIn, LogOut, UserPlus } from 'lucide-react';
import { Button } from '../components/ui/button';

interface HeaderProps {
  openAddModal: () => void;
}

const Header = ({
  openAddModal,
}: HeaderProps) => {
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
        <Button onClick={openAddModal}>
          <Plus className="mr-2 h-4 w-4" />
          Add Affiliate
        </Button>
      </div>
    </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../components/ui/button';

interface HeaderProps {
  openAddModal: () => void;
}

const Header = ({ openAddModal }: HeaderProps) => {
  return (
    <header className="border-b pb-4 mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Affiliate Link Manager</h1>
          <p className="text-muted-foreground">
            Track and manage all your affiliate partnerships in one place
          </p>
        </div>
        <Button onClick={openAddModal} className="flex items-center gap-2">
          <Plus size={16} />
          <span>Add Affiliate</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
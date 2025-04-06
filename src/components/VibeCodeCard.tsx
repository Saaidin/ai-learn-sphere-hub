import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { FileCode2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface VibeCode {
  id: string;
  title: string;
  coverImage: string;
  author: string;
  description: string;
  category: string;
  pages: number;
  freePreview: boolean;
}

interface VibeCodeCardProps {
  vibeCode: VibeCode;
}

const VibeCodeCard: React.FC<VibeCodeCardProps> = ({ vibeCode }) => {
  return (
    <div className="content-card h-full flex flex-col">
      <Link to={`/vibe-coding/${vibeCode.id}`} className="flex-grow">
        <div className="relative h-56 overflow-hidden">
          <img
            src={vibeCode.coverImage}
            alt={vibeCode.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2">{vibeCode.title}</h3>
          <p className="text-sm text-gray-600 mb-2">By {vibeCode.author}</p>
        </div>
      </Link>
    </div>
  );
};

export default VibeCodeCard;

import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Download, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

export interface Ebook {
  id: string;
  title: string;
  coverImage: string;
  author: string;
  description: string;
  category: string;
  pages: number;
  freePreview: boolean;
}

interface EbookCardProps {
  ebook: Ebook;
}

const EbookCard: React.FC<EbookCardProps> = ({ ebook }) => {
  console.log('Rendering ebook:', ebook); // Add this for debugging
  return (
    <div className="content-card h-full flex flex-col">
      <Link to={`/ebooks/${ebook.id}`} className="flex-grow">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={ebook.coverImage} 
            alt={ebook.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2">{ebook.title}</h3>
          <p className="text-sm text-gray-600">By {ebook.author}</p>
        </div>
      </Link>
    </div>
  );
};

export default EbookCard;

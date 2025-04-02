
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
  return (
    <div className="content-card h-full flex flex-col">
      <Link to={`/ebooks/${ebook.id}`} className="flex-grow">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={ebook.coverImage} 
            alt={ebook.title}
            className="w-full h-full object-cover"
          />
          {ebook.freePreview && (
            <div className="absolute top-3 left-0 bg-green-500 text-white px-3 py-1 text-xs font-medium">
              Free Preview
            </div>
          )}
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <Badge variant="outline" className="self-start mb-2">{ebook.category}</Badge>
          <h3 className="text-lg font-semibold mb-2">{ebook.title}</h3>
          <p className="text-sm text-gray-500 mb-1">By {ebook.author}</p>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{ebook.description}</p>
          <div className="flex items-center text-xs text-gray-500 mt-auto mb-4">
            <FileText size={14} className="mr-1" />
            <span>{ebook.pages} pages</span>
          </div>
        </div>
      </Link>
      <div className="px-5 pb-5">
        <Button 
          variant={ebook.freePreview ? "default" : "outline"} 
          className={ebook.freePreview ? "w-full bg-ai-primary" : "w-full"}
        >
          <Download size={16} className="mr-2" />
          {ebook.freePreview ? "Download Preview" : "Subscribe to Access"}
        </Button>
      </div>
    </div>
  );
};

export default EbookCard;

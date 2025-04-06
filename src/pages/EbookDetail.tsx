import React from 'react';
import { useParams } from 'react-router-dom';
import { useEbooks } from '@/data/mockData';
import { Button } from "@/components/ui/button";

const EbookDetail = () => {
  const { id } = useParams();
  const { ebooks } = useEbooks();
  
  const ebook = ebooks.find(e => e.id === id);
  console.log('Ebook detail data:', ebook); // Debugging

  if (!ebook) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Ebook not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img 
              src={ebook.coverImage} 
              alt={ebook.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">{ebook.title}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gray-600">by {ebook.author}</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">
                {ebook.category}
              </span>
              <span className="text-gray-600">{ebook.pages} pages</span>
            </div>
            <p className="text-lg mb-6">{ebook.description}</p>
            <a href="https://drive.google.com/file/d/1L6G7ltWZ1bGbHZlu9Y3BMUfLxC9Kj_83/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <Button className="w-full md:w-auto">
                {ebook.freePreview ? 'Download Free eBook' : 'Purchase Ebook'}
              </Button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EbookDetail;
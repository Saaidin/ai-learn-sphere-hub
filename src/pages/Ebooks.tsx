
import React from 'react';
import { useEbooks } from '@/data/mockData';
import EbookCard from '@/components/EbookCard';

const Ebooks = () => {
  const { ebooks } = useEbooks();
  console.log('Ebooks data:', ebooks); // Add this for debugging

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Ebooks Collection</h1>
        {ebooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ebooks.map(ebook => (
              <EbookCard key={ebook.id} ebook={ebook} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl">No ebooks available yet</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Ebooks;

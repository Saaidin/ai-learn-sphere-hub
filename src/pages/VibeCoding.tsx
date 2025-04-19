import React from 'react';
import { useEbooks } from '@/data/mockData';
import EbookCard from '@/components/EbookCard';
import VibeCodeCard from '@/components/VibeCodeCard';
import { vibeCodingItems } from '../data/vibeCodingData';

const VibeCoding = () => {
  const { ebooks } = useEbooks();
  console.log('Vibe Coding data:', ebooks); // Add this for debugging

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">All Vibe Coding Projects</h1>
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vibeCodingItems.map(item => (
              <VibeCodeCard key={item.id} vibeCode={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default VibeCoding;
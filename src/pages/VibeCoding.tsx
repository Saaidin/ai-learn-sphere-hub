import React from 'react';
import { useEbooks } from '@/data/mockData';
import EbookCard from '@/components/EbookCard';
import VibeCodeCard from '@/components/VibeCodeCard';
 

const VibeCoding = () => {
  const { ebooks } = useEbooks();
  console.log('Vibe Coding data:', ebooks); // Add this for debugging

  const dummyVibeCoding = [
    {
      id: '1',
      coverImage: '/images/vibe-code/vc-1.png',
      title: 'Intro to JavaScript',
      author: 'Jane Doe',
      description: 'Learn the basics of JavaScript programming language.',
      category: 'Programming',
      pages: 50,
      freePreview: true,
    },
    {
      id: '2',
      coverImage: '/images/vibe-code/vc-2.png',
      title: 'Mastering Python',
      author: 'John Smith',
      description: 'Deep dive into Python for data science and automation.',
      category: 'Programming',
      pages: 120,
      freePreview: false,
    },
    {
      id: '3',
      coverImage: '/images/vibe-code/vc-3.png',
      title: 'React for Beginners',
      author: 'Alice Johnson',
      description: 'A beginner-friendly guide to building web apps with React.',
      category: 'Web Development',
      pages: 80,
      freePreview: true,
    },
    {
      id: '4',
      coverImage: '/images/vibe-code/vc-4.png',
      title: 'Advanced CSS Tricks',
      author: 'Bob Brown',
      description: 'Enhance your web designs with advanced CSS techniques.',
      category: 'Web Design',
      pages: 60,
      freePreview: false,
    },
    {
      id: '5',
      coverImage: '/images/vibe-code/vc-5.png',
      title: 'Node.js Crash Course',
      author: 'Carol White',
      description: 'Get started with backend development using Node.js.',
      category: 'Backend',
      pages: 90,
      freePreview: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Vibe Coding Collection</h1>
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyVibeCoding.map(item => (
              <VibeCodeCard key={item.id} vibeCode={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default VibeCoding;
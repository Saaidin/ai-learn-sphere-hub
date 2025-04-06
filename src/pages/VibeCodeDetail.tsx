import React from 'react';
import { useParams, Link } from 'react-router-dom';

const dummyVibeCoding = [
  {
    id: '1',
    coverImage: '/images/vibe-code/vc-1.png',
    title: 'Intro to JavaScript',
    author: 'Jane Doe',
    description: 'Learn the basics of JavaScript programming language. This tutorial covers variables, functions, loops, and more to get you started with JavaScript development.',
  },
  {
    id: '2',
    coverImage: '/images/vibe-code/vc-2.png',
    title: 'Mastering Python',
    author: 'John Smith',
    description: 'Deep dive into Python for data science and automation. This guide explores advanced Python features, libraries, and best practices.',
  },
  {
    id: '3',
    coverImage: '/images/vibe-code/vc-3.png',
    title: 'React for Beginners',
    author: 'Alice Johnson',
    description: 'A beginner-friendly guide to building web apps with React. Learn about components, state, props, and hooks.',
  },
  {
    id: '4',
    coverImage: '/images/vibe-code/vc-4.png',
    title: 'Advanced CSS Tricks',
    author: 'Bob Brown',
    description: 'Enhance your web designs with advanced CSS techniques including animations, flexbox, grid, and responsive layouts.',
  },
  {
    id: '5',
    coverImage: '/images/vibe-code/vc-5.png',
    title: 'Node.js Crash Course',
    author: 'Carol White',
    description: 'Get started with backend development using Node.js. Learn about Express, REST APIs, and connecting to databases.',
  },
];

const VibeCodeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const vibeCode = dummyVibeCoding.find(item => item.id === id);

  if (!vibeCode) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Vibe Coding Content Not Found</h1>
        <Link to="/vibe-coding" className="text-blue-600 hover:underline">Back to Vibe Coding</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/vibe-coding" className="text-blue-600 hover:underline">&larr; Back to Vibe Coding</Link>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={vibeCode.coverImage} alt={vibeCode.title} className="w-full h-auto rounded shadow" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{vibeCode.title}</h1>
          <p className="text-lg text-gray-700 mb-2">By {vibeCode.author}</p>
          <p className="text-gray-800 mb-6">{vibeCode.description}</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default VibeCodeDetail;
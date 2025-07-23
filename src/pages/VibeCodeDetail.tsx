import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { vibeCodingItems } from '../data/vibeCodingData';

const VibeCodeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const vibeCode = vibeCodingItems.find(item => item.id === id);

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
          {vibeCode.id === '1' && (
            <a href="https://designrr.s3.amazonaws.com/dinme73_at_gmail.com_150555/how-to-build-website_68049aaa.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition inline-block mr-4">
              Download eBook
            </a>
          )}
          {vibeCode.id === '2' && (
            <a href="https://designrr.s3.amazonaws.com/dinme73_at_gmail.com_150555/how-to-build-shopcart-website_680a39df.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition inline-block mr-4">
              Download eBook
            </a>
          )}
          {/* Show "Have A Look My App" button instead of "Have A Look My Website" for ID 3 and 5 */}
          {vibeCode.id !== '3' && vibeCode.id !== '5' && vibeCode.id !== '6' && vibeCode.id !== '7'? (
            <a href={vibeCode.websiteUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition inline-block">
              Have A Look My Website
            </a>
          ) : (
            <a href={vibeCode.websiteUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition inline-block">
              Have A Look My App
            </a>
          )}
          {/* Remove the download link for ID 3 */}
          {vibeCode.id === '3' && vibeCode.downloadLink && false && (
            <a href={vibeCode.downloadLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition inline-block mr-4">
              Download Ebook
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default VibeCodeDetail;
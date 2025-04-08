import React from 'react';
import { useParams } from 'react-router-dom';
import { useVideos } from '@/data/mockData';

const VideoDetail = () => {
  const { id } = useParams();
  const { videos } = useVideos();
  
  const video = videos.find(v => v.id === id);

  if (!video) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Video not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <iframe 
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            className="w-full h-96 rounded-lg"
            title={video.title}
            allowFullScreen
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-gray-600">{video.duration}</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
            {video.category}
          </span>
        </div>
        <p className="text-lg text-gray-700">{video.description}</p>
        {video.timestamps && (
          <pre className="whitespace-pre-wrap mt-4 text-gray-800">{video.timestamps}</pre>
        )}
      </main>
    </div>
  );
};

export default VideoDetail;
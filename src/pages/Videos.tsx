
import React from 'react';
import { useVideos } from '@/data/mockData';
import VideoCard from '@/components/VideoCard';  // Add this import

const Videos = () => {
  const { videos } = useVideos();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">AI Video Tutorials</h1>
        {videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl">No videos available yet</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Videos;

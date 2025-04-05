import React from 'react';
import { useAdminData } from '@/data/mockData';

const AdminVideos = () => {
  const { videos, addVideo, updateVideo, deleteVideo } = useAdminData();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Video Management</h2>
      <div className="space-y-4">
        {videos.map(video => (
          <div key={video.id} className="border rounded-lg p-4">
            <h3 className="font-medium">{video.title}</h3>
            <p className="text-sm text-gray-600">{video.category}</p>
            <div className="mt-2 flex space-x-2">
              <button 
                className="text-blue-600 hover:text-blue-800"
                onClick={() => updateVideo(video.id, video)}
              >
                Edit
              </button>
              <button 
                className="text-red-600 hover:text-red-800"
                onClick={() => deleteVideo(video.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminVideos;
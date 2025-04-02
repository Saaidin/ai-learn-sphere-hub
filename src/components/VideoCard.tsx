
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Youtube, Clock } from 'lucide-react';

export interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  youtubeId: string;
  duration: string;
  description: string;
  category: string;
}

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="content-card">
      <Link to={`/videos/${video.id}`}>
        <div className="relative">
          <div className="aspect-video overflow-hidden">
            <img 
              src={video.thumbnailUrl} 
              alt={video.title} 
              className="w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-red-600 rounded-full p-3">
              <Youtube size={24} className="text-white" />
            </div>
          </div>
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-xs flex items-center">
            <Clock size={12} className="mr-1" />
            <span>{video.duration}</span>
          </div>
        </div>
        <div className="p-4">
          <Badge variant="outline" className="mb-2">{video.category}</Badge>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{video.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{video.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;

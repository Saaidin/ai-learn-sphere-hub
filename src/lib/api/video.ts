import { getVideosCollection, Video } from '../models';

interface ApiResponse {
  status: number;
  data?: unknown;
  error?: string;
}

export async function getVideos(): Promise<ApiResponse> {
  try {
    const collection = await getVideosCollection();
    const videos = await collection.find().sort({ publishedAt: -1 }).toArray();
    return { status: 200, data: videos };
  } catch (error) {
    console.error('Failed to fetch videos:', error);
    return { status: 500, error: 'Failed to fetch videos' };
  }
}

export async function getVideoById(id: string): Promise<ApiResponse> {
  try {
    const collection = await getVideosCollection();
    const video = await collection.findOne({ youtubeId: id });
    
    if (!video) {
      return { status: 404, error: 'Video not found' };
    }
    
    return { status: 200, data: video };
  } catch (error) {
    console.error('Failed to fetch video:', error);
    return { status: 500, error: 'Failed to fetch video' };
  }
}

export async function createVideo(videoData: Video): Promise<ApiResponse> {
  try {
    const collection = await getVideosCollection();
    const result = await collection.insertOne(videoData);
    return { status: 201, data: result };
  } catch (error) {
    console.error('Failed to create video:', error);
    return { status: 500, error: 'Failed to create video' };
  }
}
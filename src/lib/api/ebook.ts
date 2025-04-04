import { getEbooksCollection, Ebook } from '../models';

interface ApiResponse {
  status: number;
  data?: unknown;
  error?: string;
}

export async function getEbooks(): Promise<ApiResponse> {
  try {
    const collection = await getEbooksCollection();
    const ebooks = await collection.find().sort({ publishedAt: -1 }).toArray();
    return { status: 200, data: ebooks };
  } catch (error) {
    console.error('Failed to fetch ebooks:', error);
    return { status: 500, error: 'Failed to fetch ebooks' };
  }
}

export async function getEbookBySlug(slug: string): Promise<ApiResponse> {
  try {
    const collection = await getEbooksCollection();
    const ebook = await collection.findOne({ slug });
    
    if (!ebook) {
      return { status: 404, error: 'Ebook not found' };
    }
    
    return { status: 200, data: ebook };
  } catch (error) {
    console.error('Failed to fetch ebook:', error);
    return { status: 500, error: 'Failed to fetch ebook' };
  }
}

export async function createEbook(ebookData: Ebook): Promise<ApiResponse> {
  try {
    const collection = await getEbooksCollection();
    const result = await collection.insertOne(ebookData);
    return { status: 201, data: result };
  } catch (error) {
    console.error('Failed to create ebook:', error);
    return { status: 500, error: 'Failed to create ebook' };
  }
}
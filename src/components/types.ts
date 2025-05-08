export interface Ebook {
  id: string;
  title: string;
  coverImage: string;
  author: string;
  description: string;
  category: string;
  pages: number;
  freePreview: boolean;
  publishedDate: string;
  isbn: string;
  downloadLink: string;
  tableOfContents: string[];
}

export interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  youtubeId: string;
  duration: string;
  description: string;
  timestamps?: string;
  category: string;
  publishedDate: string;
}
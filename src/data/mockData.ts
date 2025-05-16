import { useState } from 'react';
import { Affiliate } from '../types/affiliate';
import type { Ebook, Video } from '../components/types';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  publishedDate: string;
  author: string;
  category: string;
  slug: string;
  content: string;
}
export const useBlogPosts = (): {
  blogPosts: BlogPost[];
  addBlogPost: (post: Omit<BlogPost, 'id'>) => void;
  updateBlogPost: (id: string, updates: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
} => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: '0',
      title: 'Vibe Coding is the Future: Why Developers Should Embrace the Flow?',
      excerpt: 'Vibe Coding is more than just writing lines of code—it\’s about entering a flow state where creativity, productivity, and enjoyment merge.',
      coverImage: '/images/blog_section/blog-article-1.jpg',
      publishedDate: '2025-04-08',
      author: 'Saaidin Mat Esa',
      category: 'Vibe-Coding',
      slug: 'vibe-coding-future',
      content: 'The rest of articles read <a href="https://qr.ae/pAv8XU" target="_blank" style="color: blue;">here</a>.'
    },
    {
      id: '1',
      title: 'Getting Started with Vibe Coding: A Beginner\'s Guide',
      excerpt: 'Have you ever heard of "Vibe Coding"? It\’s not just about writing code—it\’s about enjoying the process...',
      coverImage: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      publishedDate: '2025-04-08',
      author: 'Saaidin Mat Esa',
      category: 'Vibe-Coding',
      slug: 'getting-started-with-vibe-coding',
      content: 'The rest of articles read <a href="https://qr.ae/pAvnWJ" target="_blank" style="color: blue;">here</a>'
    },
    {
      id: '2',
      title: 'Why Visual Studio Code is the Perfect Code Editor for Beginners',
      excerpt: 'Choosing the right code editor is one of the first—and most important—decisions a beginner programmer makes. With so many options available, it can be overwhelming to pick the best one. However, Visual Studio Code (VS Code) stands out as the perfect choice for beginners.',
      coverImage: '/images/blog_section/blog-article-2.png',
      publishedDate: '2025-04-09',
      author: 'Saaidin Mat Esa',
      category: 'Vibe-Coding',
      slug: 'why-vsc-is-perfect',
      content: 'The rest of articles read <a href="https://qr.ae/pAvKtg" target="_blank" style="color: blue;">here</a>'
    },
     {
      id: '3',
      title: 'The 39 Translation Secret: How These Earbuds Outperformed My 200 Gadgets.',
      excerpt: 'A linguist’s 3-week field test reveals when these budget earbuds work — and when they’ll leave you stranded',
      coverImage: '/images/blog_section/blog-article-3.png',
      publishedDate: '2025-05-17',
      author: 'Saaidin Mat Esa',
      category: 'Affiliate-Medium',
      slug: 'the-39-translation',
      content: 'The rest of articles read <a href="https://medium.com/@dinme73/the-39-translation-secret-how-these-earbuds-outperformed-my-200-gadgets-4c47a1a8c624" target="_blank" style="color: blue;">here</a>'
    }
  ].sort((a: BlogPost, b: BlogPost) =>
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  ));

  const addBlogPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost = { ...post, id: Date.now().toString() };
    setBlogPosts(prev => [...prev, newPost]);
  };

  const updateBlogPost = (id: string, updates: Partial<BlogPost>) => {
    setBlogPosts(prev => prev.map(post =>
      post.id === id ? { ...post, ...updates } : post
    ));
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(post => post.id !== id));
  };

  return { blogPosts, addBlogPost, updateBlogPost, deleteBlogPost };
};

export const useVideos = (): {
  videos: Video[];
  addVideo: (video: Omit<Video, 'id'>) => void;
  updateVideo: (id: string, updates: Partial<Video>) => void;
  deleteVideo: (id: string) => void;
} => {
  const [videos, setVideos] = useState<Video[]>(
    [
      {
        id: 'vid3',
        publishedDate: '2025-04-05',
        title: 'Belajar Deepseek AI Untuk Meningkatkan Produktiviti',
        thumbnailUrl: '/images/video_section/ebook-cover-deepseek.png',
        youtubeId: 'kq9LPGRnWWE',
        duration: '1:49',
        description: 'Strategi utama memanfaatkan DeepSeek AI untuk produktiviti dan penjanaan kekayaan',
        timestamps: '0:00-0:08 Pengenalan\n0:08-0:25 Automate Tasks\n0:25-0:40 Data-Driven Decisions',
        category: 'Produktiviti'
      },
      {
        id: 'vc-2025-002',
        publishedDate: '2025-04-06T00:00:00',
        title: 'Vibe Coding – Masa Depan Pengaturcaraan Yang Lebih Produktif dan Menyeronokkan',
        thumbnailUrl: '/images/video_section/v-2.png',
        youtubeId: 'fYH2DyNFWHc',
        duration: '4:49',
        description: 'Vibe Coding adalah lebih daripada sekadar menulis baris kod—ia mengenai memasuki keadaan aliran di mana kreativiti, produktiviti dan keseronokan bergabung. Ia adalah pengekodan dalam persekitaran yang menjana inspirasi, sama ada itu bermakna bekerja dengan muzik yang hebat, dalam persediaan yang selesa atau dikelilingi oleh pembangun yang berfikiran sama.',
        timestamps: '00:00:00 - Vibe Coding: Future of Dev\n02:09:20 - Vibe Coding & Remote Work\n04:18:30 - Ideal Work Environment',
        category: 'Produktiviti'
      },
      {
        id: 'vc-2025-003',
        publishedDate: '2025-04-07T00:00:00',
        title: 'Pengalaman Sebagai Vibe Coder dan Membina Website Sendiri',
        thumbnailUrl: '/images/video_section/v-3.png',
        youtubeId: 'Zf3xiUW6yxk',
        duration: '3:03',
        description: 'Kita bertuah dapat merasakan perkembangan AI sejak akhir-akhir ini, terutamanya mengenai vibe coding. Sesiapa pun dapat melakukan kerja contohnya membina website. Tetapi perlu ada pra-syaratnya iaitu kita perlu tahu sedikit-sebanyak asas mengkoding terutamanya, contohnya seperti NextJS, Tailwind CSS, Prisma, MongoDB database, dan sebagainya.',
        category: 'Vibe-Coding'
      }
    ].sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
  );

  const addVideo = (video: Omit<Video, 'id'>) => {
    setVideos(prev => [...prev, {...video, id: `vc-${new Date().getFullYear()}-${String(prev.length + 1).padStart(3, '0')}`}]);
  };

  const updateVideo = (id: string, updates: Partial<Video>) => {
    setVideos(prev => prev.map(v => v.id === id ? {...v, ...updates} : v));
  };

  const deleteVideo = (id: string) => {
    setVideos(prev => prev.filter(v => v.id !== id));
  };
  return { videos, addVideo, updateVideo, deleteVideo };
};
 
export const useEbooks = (): {
  ebooks: Ebook[];
  addEbook: (ebook: Omit<Ebook, 'id'>) => void;
  updateEbook: (id: string, updates: Partial<Ebook>) => void;
  deleteEbook: (id: string) => void;
} => {
  const [ebooks, setEbooks] = useState<Ebook[]>([
    {
      id: '5',
      title: 'Perancangan untuk Menghasilkan Wang Secara Dalam Talian di Malaysia dengan Modal Terhad',
      coverImage: '/images/ebooks/ebook-5.png',
      author: 'Saaidin Mat Esa',
      description: 'Saya akan kongsi dengan anda cara membuat website ShopCart ini untuk tujuan pembelajaran. Saya akui website originality daripada web developer yang lain.',
      category: 'Works-Online',
      pages: 30,
      freePreview: true,
      publishedDate: 'May 8, 2025',
      isbn: '978-1-23-456789-3',
      downloadLink: 'https://designrr.s3.amazonaws.com/dinme73_at_gmail.com_150555/jana-pendapatan-online-modal-rendah_681c7d15.pdf',
      tableOfContents: ['AI Strategy Development', 'Implementation Guidelines', 'Case Studies', 'Future Trends']
    },
    {
      id: '4',
      title: 'Bagaimana Saya Membina Semula Website ShopCart? Sebuah Kajian Kes',
      coverImage: '/images/ebooks/ebook-4.png',
      author: 'Saaidin Mat Esa',
      description: 'Saya akan kongsi dengan anda cara membuat website ShopCart ini untuk tujuan pembelajaran. Saya akui website originality daripada web developer yang lain.',
      category: 'Vibe-Coding',
      pages: 7,
      freePreview: true,
      publishedDate: 'May 7, 2025',
      isbn: '978-1-23-456789-3',
      downloadLink: 'https://designrr.s3.amazonaws.com/dinme73_at_gmail.com_150555/how-to-build-shopcart-website_680a39df.pdf',
      tableOfContents: ['AI Strategy Development', 'Implementation Guidelines', 'Case Studies', 'Future Trends']
    },
    {
      id: '3',
      title: 'Pengalaman Saya Membuat Website Sendiri',
      coverImage: '/images/ebooks/ebook-3.png',
      author: 'Saaidin Mat Esa',
      description: 'Saya telah membuat website sendiri menggunakan Next.js. Dalam ebook ini, saya akan berkongsi pengalaman dan langkah-langkah yang saya ambil untuk membina website tersebut.',
      category: 'Vibe-Coding',
      pages: 6,
      freePreview: true,
      publishedDate: 'May 15, 2025',
      isbn: '978-1-23-456789-2',
      downloadLink: 'https://designrr.s3.amazonaws.com/dinme73_at_gmail.com_150555/how-to-build-website_68049aaa.pdf',
      tableOfContents: ['Fundamentals of AI Ethics', 'Bias in AI Systems', 'Privacy Considerations', 'Responsible AI Development']
    },
    {
      id: '2',
      title: 'Masa Depan Pengaturcaraan Yang Lebih Produktif & Menyeronokkan',
      coverImage: '/images/ebooks/ebook-2.png',
      author: 'Saaidin Mat Esa',
      description: 'Dalam dunia pembangunan perisian yang pantas, tekanan dan burnout adalah musuh utama kreativiti. Vibe Coding muncul sebagai pendekatan revolusioner yang menggabungkan produktiviti, keselesaan, dan keseronokan dalam menulis kod.',
      category: 'Vibe-Coding',
      pages: 19,
      freePreview: true,
      publishedDate: 'April 1, 2025',
      isbn: '978-1-23-456789-1',
      downloadLink: 'https://designrr.s3.amazonaws.com/dinme73_at_gmail.com_150555/vibe-coding-masa-depan-pengaturcaraan-yang-lebih-produktif-menyeronokkan_6804a145.pdf',
      tableOfContents: ['Ensemble Methods', 'Model Optimization', 'Feature Engineering', 'Advanced Neural Architectures']
    },
    {
      id: '1',
      title: 'Belajar AI Deepseek Untuk Produktiviti Tinggi',
      coverImage: '/images/ebooks/eb-d-1.png',
      author: 'Saaidin Mat Esa',
      description: 'Berikut ialah strategi utama untuk memanfaatkan DeepSeek AI untuk meningkatkan produktiviti dan penjanaan kekayaan.',
      category: 'Vibe-Coding',
      pages: 6,
      freePreview: true,
      publishedDate: 'April 6, 2025',
      isbn: '978-1-234567-89-0',
      downloadLink: 'https://designrr.s3.amazonaws.com/dinme73_at_gmail.com_150555/tingkatkan-produktiviti-dengan-strategi-deepseek_68049c6f.pdf',
      tableOfContents: ['Introduction', 'Getting Started', 'Advanced Techniques']
    }
  ]);
  const addEbook = (ebook: Omit<Ebook, 'id'>) => {
    const newEbook = {
      ...ebook,
      id: `eb-${new Date().getFullYear()}-${String(ebooks.length + 1).padStart(3, '0')}`
    };
    setEbooks(prev => [...prev, newEbook]);
  };
  const updateEbook = (id: string, updates: Partial<Ebook>) => {
    setEbooks(prev => prev.map(ebook =>
      ebook.id === id ? {...ebook, ...updates} : ebook
    ));
  };

  const deleteEbook = (id: string) => {
    setEbooks(prev => prev.filter(ebook => ebook.id !== id));
  };

  return {
    ebooks,
    addEbook,
    updateEbook,
    deleteEbook
  };
};

export const mockAffiliates: Affiliate[] = [
  {
    id: 'aff-001',
    name: 'John Doe',
    company: 'Tech Corp',
    website: 'https://techcorp.com',
    affiliateLink: 'https://techcorp.com/ref=123',
    dueDate: '2025-06-15'
  },
  {
    id: 'aff-002',
    name: 'Jane Smith',
    company: 'Digital Solutions',
    website: 'https://digitalsolutions.net',
    affiliateLink: 'https://digitalsolutions.net/aff=456',
    dueDate: '2025-03-01'
  },
];

export const useAdminData = (): {
  blogPosts: BlogPost[];
  addBlogPost: (post: Omit<BlogPost, 'id'>) => void;
  updateBlogPost: (id: string, updates: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
  videos: Video[];
  addVideo: (video: Omit<Video, 'id'>) => void;
  updateVideo: (id: string, updates: Partial<Video>) => void;
  deleteVideo: (id: string) => void;
  ebooks: Ebook[];
  addEbook: (ebook: Omit<Ebook, 'id'>) => void;
  updateEbook: (id: string, updates: Partial<Ebook>) => void;
  deleteEbook: (id: string) => void;
} => {
  const { blogPosts, addBlogPost, updateBlogPost, deleteBlogPost } = useBlogPosts();
  const { videos, addVideo, updateVideo, deleteVideo } = useVideos();
  const { ebooks, addEbook, updateEbook, deleteEbook } = useEbooks();

  return {
    blogPosts,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,
    videos,
    addVideo,
    updateVideo,
    deleteVideo,
    ebooks,
    addEbook,
    updateEbook,
    deleteEbook
  };
};

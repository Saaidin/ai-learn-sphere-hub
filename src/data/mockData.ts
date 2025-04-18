import { useState } from 'react';

export const useBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: '0',
      title: 'Vibe Coding is the Future: Why Developers Should Embrace the Flow?',
      excerpt: 'Vibe Coding is more than just writing lines of code—it’s about entering a flow state where creativity, productivity, and enjoyment merge. It’s coding in an environment that fuels inspiration, whether that means working with great music, in a cozy setup, or surrounded by like-minded developers."',
      coverImage: '/images/blog_section/blog-article-1.jpg',
      date: 'Apr 8, 2025',
      author: 'Saaidin Mat Esa',
      category: 'Vibe-Coding',
      slug: 'vibe-coding-future',
      content: 'The rest of articles read <a href="https://qr.ae/pAv8XU" style="text-decoration: underline; color: blue;" target="_blank">here</a>.'
    },
  {
    id: '1',
    title: 'Getting Started with Vibe Coding: A Beginner\'s Guide',
    excerpt: 'Have you ever heard of "Vibe Coding"? It’s not just about writing code—it’s about enjoying the process, staying in a flow state, and creating in a way that feels natural and fun. Whether you\'re a complete beginner or an experienced developer looking to refine your approach, this guide will help you embrace Vibe Coding and make programming a more enjoyable—and even profitable—experience.',
    coverImage: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024',
    date: 'April 8, 2025',
    author: 'Saaidin Mat Esa',
    category: 'Vibe-Coding',
    slug: 'getting-started-with-vibe-coding',
    content: 'The rest of articles read <a href="https://qr.ae/pAvnWJ" style="text-decoration: underline; color: blue;" target="_blank">here</a>'
  },
  {
    id: '2',
    title: 'Why Visual Studio Code is the Perfect Code Editor for Beginners',
    excerpt: 'Choosing the right code editor is one of the first—and most important—decisions a beginner programmer makes. With so many options available, it can be overwhelming to pick the best one. However, Visual Studio Code (VS Code) stands out as the perfect choice for beginners.',
    coverImage: '/images/blog_section/blog-article-2.png',
    date: 'April 8, 2025',
    author: 'Saaidin Mat Esa',
    category: 'Vibe-Coding',
    slug: 'understanding-large-language-models',
    content: 'The rest of articles read <a href="https://qr.ae/pAvKtg" style="text-decoration: underline; color: blue;" target="_blank">here</a>'
  },
  {
    id: '3',
    title: 'Computer Vision Techniques for Object Detection',
    excerpt: 'A comprehensive look at how computer vision algorithms detect and classify objects in images and video streams.',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024',
    date: 'Oct 10, 2023',
    author: 'Emily Rodriguez',
    category: 'Computer Vision',
    slug: 'computer-vision-techniques',
    content: 'An in-depth look at computer vision techniques for object detection, including algorithms and real-world applications.'
  },
  {
    id: '4',
    title: 'Understanding Neural Networks',
    excerpt: 'A deep dive into how neural networks work and their applications',
    coverImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e',
    date: 'Dec 15, 2023',
    author: 'Dr. Robert Taylor',
    category: 'Deep Learning',
    slug: 'understanding-neural-networks',
    content: 'Detailed content about neural networks...'
  },
  {
    id: '5',
    title: 'The Future of AI in Healthcare',
    excerpt: 'Exploring how artificial intelligence is transforming medical diagnosis and treatment',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
    date: 'Jan 10, 2024',
    author: 'Dr. Lisa Wong',
    category: 'Healthcare AI',
    slug: 'future-of-ai-in-healthcare',
    content: 'Detailed content about AI applications in healthcare...'
  }
  ]);
  
    const addBlogPost = (post) => {
      setBlogPosts([...blogPosts, post]);
    };
  
    const updateBlogPost = (id, updatedPost) => {
      setBlogPosts(blogPosts.map(post => post.id === id ? updatedPost : post));
    };
  
    const deleteBlogPost = (id) => {
      setBlogPosts(blogPosts.filter(post => post.id !== id));
    };
  
    return { blogPosts, addBlogPost, updateBlogPost, deleteBlogPost };
  };
  
  export const useVideos = () => {
    const [videos, setVideos] = useState([
    {
      id: '1',
      title: 'Belajar Deepseek AI Untuk Meningkatkan Produktiviti',
      thumbnailUrl: '/images/video_section/ebook-cover-deepseek.png',
      youtubeId: 'kq9LPGRnWWE',
      duration: '1:49',
      description: 'Berikut ialah strategi utama untuk memanfaatkan DeepSeek AI untuk meningkatkan produktiviti dan penjanaan kekayaan. Sila menonton keseluruhan perbincangannya di dalam YouTube.',
      timestamps: 
      `      Pengenalan 0:00 - 0:08
      Automate Repetitive Tasks 0:08 - 0:25
      Data-Driven Decisions 0:25 - 0:40
      AI-Powered Marketing & Sales 0:40 - 0:55
      Cost Savings 0:55 - 1:07
      AI Staff Training 1:07 - 1:25
      Kesimpulan 1:25 - 1:49`,
      category: 'Produktiviti'
    },
    {
      id: '2',
      title: 'Vibe Coding – Masa Depan Pengaturcaraan Yang Lebih Produktif dan Menyeronokkan',
      thumbnailUrl: '/images/video_section/v-2.png',
      youtubeId: 'fYH2DyNFWHc',
      duration: '4:49',
      description: 'Vibe Coding adalah lebih daripada sekadar menulis baris kod—ia mengenai memasuki keadaan aliran di mana kreativiti, produktiviti dan keseronokan bergabung. Ia adalah pengekodan dalam persekitaran yang menjana inspirasi, sama ada itu bermakna bekerja dengan muzik yang hebat, dalam persediaan yang selesa atau dikelilingi oleh pembangun yang berfikiran sama.',
      timestamps: 
        `      00:00:00 - Vibe Coding: Future of Dev

      02:09:20 - Vibe Coding & Remote Work

      04:18:30 - Ideal Work Environment`,
      category: 'Produktiviti'
    },
    {
      id: '3',
      title: 'Reinforcement Learning Explained',
      thumbnailUrl: 'https://i.ytimg.com/vi/2pWv7GOvuf0/maxresdefault.jpg',
      youtubeId: '2pWv7GOvuf0',
      duration: '32:18',
      description: 'Understanding the principles behind reinforcement learning algorithms and their applications.',
      category: 'Reinforcement Learning'
    }
    ]);
  
    const addVideo = (video) => {
      setVideos([...videos, video]);
    };
  
    const updateVideo = (id, updatedVideo) => {
      setVideos(videos.map(video => video.id === id ? updatedVideo : video));
    };
  
    const deleteVideo = (id) => {
      setVideos(videos.filter(video => video.id !== id));
    };
  
    return { videos, addVideo, updateVideo, deleteVideo };
  };
  
  export const useEbooks = () => {
    const [ebooks, setEbooks] = useState([
    {
      id: '1',
      title: 'Belajar AI Deepseek Untuk Produktiviti Tinggi',
      coverImage: '/images/ebooks/eb-d-1.png',
      author: 'Saaidin Mat Esa',
      description: 'Berikut ialah strategi utama untuk memanfaatkan DeepSeek AI untuk meningkatkan produktiviti dan penjanaan kekayaan. Antaranya adalah Automatikkan Tugasan Berulang untuk Manfaatkan Masa terluang, Manfaatkan AI untuk Pembuatan Keputusan Berdasarkan Data, Skalakan Hasil dengan Pemasaran & Jualan Dikuasakan AI dan lain-lain.',
      category: 'Vibe-Coding',
      pages: 6,
      freePreview: true,
      publishedDate: 'April 6, 2025',
      isbn: '978-3-16-148410-0',
      downloadLink: '/downloads/deep-learning-guide.pdf',
      tableOfContents: [
        'Introduction to Neural Networks',
        'Backpropagation Explained',
        'Convolutional Neural Networks',
        'Recurrent Neural Networks',
        'Transformers and Attention',
        'Practical Applications'
      ]
    },
    {
      id: '2',
      title: 'Masa Depan Pengaturcaraan Yang Lebih Produktif & Menyeronokkan',
      coverImage: '/images/ebooks/ebook-2.png',
      author: 'Saaidin Mat Esa',
      description: `Dalam dunia pembangunan perisian yang pantas, tekanan dan burnout adalah musuh utama
      kreativiti. Vibe Coding muncul sebagai pendekatan revolusioner yang menggabungkan
      produktiviti, keselesaan, dan keseronokan dalam menulis kod.`,
      category: 'Vibe-Coding',
      pages: 19,
      freePreview: false,
      publishedDate: 'April 9, 2025',
      isbn: '978-1-23-456789-0',
      downloadLink: '/downloads/nlp-mastery.pdf',
      tableOfContents: [
        'Text Preprocessing',
        'Word Embeddings',
        'Sequence Models',
        'Transformer Architectures',
        'Deployment Strategies'
      ]
    },
    {
      id: '3',
      title: 'Computer Vision Fundamentals',
      coverImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e',
      author: 'Prof. James Wilson',
      description: 'Learn computer vision from the ground up with this hands-on guide covering OpenCV, TensorFlow, and PyTorch implementations.',
      category: 'Computer Vision',
      pages: 275,
      freePreview: true,
      publishedDate: 'January 5, 2024',
      isbn: '978-0-12-345678-9',
      downloadLink: '/downloads/cv-fundamentals.pdf',
      tableOfContents: [
        'Image Processing Basics',
        'Feature Detection',
        'Object Recognition',
        'Neural Networks for CV',
        'Real-time Applications'
      ]
    }
  ]);
  
    const addEbook = (ebook) => {
      setEbooks([...ebooks, ebook]);
    };
  
    const updateEbook = (id, updatedEbook) => {
      setEbooks(ebooks.map(ebook => ebook.id === id ? updatedEbook : ebook));
    };
  
    const deleteEbook = (id) => {
      setEbooks(ebooks.filter(ebook => ebook.id !== id));
    };
  
    return { ebooks, addEbook, updateEbook, deleteEbook };
  };
  
  export const useAdminData = () => {
    const { blogPosts, addBlogPost, updateBlogPost, deleteBlogPost } = useBlogPosts();
    const { videos, addVideo, updateVideo, deleteVideo } = useVideos();
    const { ebooks, addEbook, updateEbook, deleteEbook } = useEbooks();
  
    return {
      blogPosts, addBlogPost, updateBlogPost, deleteBlogPost,
      videos, addVideo, updateVideo, deleteVideo,
      ebooks, addEbook, updateEbook, deleteEbook
    };
  };


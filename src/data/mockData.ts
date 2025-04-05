import { useState } from 'react';

export const useBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: '0',
      title: 'AI Coding for beginners',
      excerpt: 'This is an auto-generated excerpt for "AI Coding for beginners"',
      coverImage: 'https://th.bing.com/th/id/OIP.l8R_QazvDGzDP7imMbNHmwHaEK?w=333&h=187&c=7&r=0&o=5&pid=1.7',
      date: 'Apr 5, 2025',
      author: 'AI Assistant',
      category: 'AI',
      slug: 'ai-coding-for-beginners',
      content: '# AI Coding for beginners\n\nStart writing your content here...'
    },
  {
    id: '1',
    title: 'Getting Started with Machine Learning: A Beginner\'s Guide',
    excerpt: 'Learn the fundamentals of machine learning and how to implement your first ML models with Python and TensorFlow.',
    coverImage: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024',
    date: 'Nov 5, 2023',
    author: 'Dr. Sarah Johnson',
    category: 'Machine Learning',
    slug: 'getting-started-with-machine-learning',
    content: 'This is a detailed guide on getting started with machine learning, covering the basics and providing practical examples using Python and TensorFlow.'
  },
  {
    id: '2',
    title: 'Understanding Large Language Models: From GPT-3 to GPT-4',
    excerpt: 'Explore the evolution of language models and how they\'re revolutionizing natural language processing in applications today.',
    coverImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1024',
    date: 'Oct 22, 2023',
    author: 'Michael Chen',
    category: 'NLP',
    slug: 'understanding-large-language-models',
    content: 'This article explores the development of large language models, their architecture, and their impact on natural language processing.'
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
      title: 'Introduction to Neural Networks',
      thumbnailUrl: 'https://i.ytimg.com/vi/aircAruvnKk/maxresdefault.jpg',
      youtubeId: 'aircAruvnKk',
      duration: '18:42',
      description: 'Learn the basic structure and functionality of neural networks in this beginner-friendly tutorial.',
      category: 'Deep Learning'
    },
    {
      id: '2',
      title: 'Building a Chatbot with Transformers',
      thumbnailUrl: 'https://i.ytimg.com/vi/TQQlZhbC5ps/maxresdefault.jpg',
      youtubeId: 'TQQlZhbC5ps',
      duration: '24:15',
      description: 'Step-by-step guide to creating your own AI chatbot using transformer models and Python.',
      category: 'NLP'
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
      title: 'The Ultimate Guide to Deep Learning',
      coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      author: 'Dr. Alan Smith',
      description: 'This comprehensive guide covers everything from basic neural networks to advanced deep learning architectures. Perfect for both beginners and experienced practitioners looking to expand their knowledge.',
      category: 'Deep Learning',
      pages: 248,
      freePreview: true,
      publishedDate: 'March 15, 2023',
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
      title: 'Mastering Natural Language Processing',
      coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      author: 'Dr. Maria Garcia',
      description: 'A complete reference for NLP techniques from traditional methods to cutting-edge transformer models. Includes practical examples and code snippets.',
      category: 'NLP',
      pages: 320,
      freePreview: false,
      publishedDate: 'June 10, 2023',
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


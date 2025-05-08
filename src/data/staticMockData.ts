export const blogPosts = [
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
];

export const videos = [
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
];

export const ebooks = [
  {
    id: '1',
    title: 'Belajar AI Deepseek Untuk Produktiviti',
    coverImage: '/images/ebooks/eb-e-1.png',
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
    title: 'Advanced Machine Learning Techniques',
    coverImage: '/images/ebooks/eb-e-2.png',
    author: 'Dr. Sarah Chen',
    description: 'Dive deep into advanced machine learning concepts and techniques. Learn about ensemble methods, hyperparameter tuning, and model optimization.',
    category: 'Machine Learning',
    pages: 320,
    freePreview: true,
    publishedDate: 'April 1, 2023',
    isbn: '978-1-23-456789-1',
    downloadLink: '/downloads/advanced-ml.pdf',
    tableOfContents: [
      'Ensemble Methods',
      'Model Optimization',
      'Feature Engineering',
      'Advanced Neural Architectures'
    ]
  },
  {
    id: '3',
    title: 'Practical AI Ethics',
    coverImage: '/images/ebooks/eb-e-3.png',
    author: 'Prof. Emily Thompson',
    description: 'Essential guide to understanding and implementing ethical AI practices in real-world applications.',
    category: 'AI Ethics',
    pages: 280,
    freePreview: true,
    publishedDate: 'May 15, 2023',
    isbn: '978-1-23-456789-2',
    downloadLink: '/downloads/ai-ethics.pdf',
    tableOfContents: [
      'Fundamentals of AI Ethics',
      'Bias in AI Systems',
      'Privacy Considerations',
      'Responsible AI Development'
    ]
  },
  {
    id: '4',
    title: 'AI for Business Innovation',
    coverImage: '/images/ebooks/eb-e-4.png',
    author: 'Michael Roberts',
    description: 'Learn how to leverage AI technologies to drive business innovation and digital transformation.',
    category: 'Business AI',
    pages: 295,
    freePreview: false,
    publishedDate: 'June 1, 2023',
    isbn: '978-1-23-456789-3',
    downloadLink: '/downloads/ai-business.pdf',
    tableOfContents: [
      'AI Strategy Development',
      'Implementation Guidelines',
      'Case Studies',
      'Future Trends'
    ]
  }
];
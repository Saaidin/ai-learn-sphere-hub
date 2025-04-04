var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var connectToDatabase = require('../lib/db').connectToDatabase;
var _a = require('../lib/models'), getBlogPostsCollection = _a.getBlogPostsCollection, getEbooksCollection = _a.getEbooksCollection, getVideosCollection = _a.getVideosCollection;
function migrateData() {
    return __awaiter(this, void 0, void 0, function () {
        var client, blogPostsCollection, ebooksCollection, videosCollection, blogDeleteResult, ebooksDeleteResult, videosDeleteResult, blogPosts, ebooks, videos, blogPostsToInsert, blogInsertResult, ebooksToInsert, ebooksInsertResult, videosToInsert, videosInsertResult, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 12, , 13]);
                    // Connect to database
                    console.log('Attempting to connect to MongoDB...');
                    console.log("Connection string: ".concat(process.env.MONGODB_URI));
                    return [4 /*yield*/, connectToDatabase()];
                case 1:
                    client = (_a.sent()).client;
                    console.log('Connected to MongoDB successfully');
                    console.log("Database name: ".concat(process.env.MONGODB_DB));
                    console.log("Using database: ".concat(process.env.MONGODB_DB));
                    return [4 /*yield*/, getBlogPostsCollection()];
                case 2:
                    blogPostsCollection = _a.sent();
                    return [4 /*yield*/, getEbooksCollection()];
                case 3:
                    ebooksCollection = _a.sent();
                    return [4 /*yield*/, getVideosCollection()];
                case 4:
                    videosCollection = _a.sent();
                    // Clear existing data (optional)
                    console.log('Clearing existing data...');
                    return [4 /*yield*/, blogPostsCollection.deleteMany({})];
                case 5:
                    blogDeleteResult = _a.sent();
                    return [4 /*yield*/, ebooksCollection.deleteMany({})];
                case 6:
                    ebooksDeleteResult = _a.sent();
                    return [4 /*yield*/, videosCollection.deleteMany({})];
                case 7:
                    videosDeleteResult = _a.sent();
                    console.log('Cleared existing data:', {
                        blogPosts: blogDeleteResult.deletedCount,
                        ebooks: ebooksDeleteResult.deletedCount,
                        videos: videosDeleteResult.deletedCount
                    });
                    blogPosts = [
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
                        }
                    ];
                    ebooks = [
                        {
                            id: '1',
                            title: 'The Ultimate Guide to Deep Learning',
                            coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500',
                            author: 'Dr. Alan Smith',
                            description: 'A comprehensive guide to understanding and implementing deep learning models from scratch.',
                            category: 'Deep Learning',
                            pages: 248,
                            freePreview: true
                        },
                        {
                            id: '2',
                            title: 'Natural Language Processing with Python',
                            coverImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500',
                            author: 'Jennifer Wu',
                            description: 'Learn how to process and analyze text data using state-of-the-art NLP techniques.',
                            category: 'NLP',
                            pages: 186,
                            freePreview: false
                        },
                        {
                            id: '3',
                            title: 'AI Ethics and Governance',
                            coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500',
                            author: 'Dr. Robert Miller',
                            description: 'Exploring the ethical implications of artificial intelligence and approaches to responsible AI development.',
                            category: 'AI Ethics',
                            pages: 214,
                            freePreview: true
                        }
                    ];
                    videos = [
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
                    blogPostsToInsert = blogPosts.map(function (post) { return ({
                        title: post.title,
                        slug: post.slug,
                        content: post.content,
                        excerpt: post.excerpt,
                        coverImage: post.coverImage,
                        author: post.author,
                        publishedAt: new Date(post.date),
                        tags: [post.category]
                    }); });
                    return [4 /*yield*/, blogPostsCollection.insertMany(blogPostsToInsert)];
                case 8:
                    blogInsertResult = _a.sent();
                    console.log("Inserted ".concat(blogInsertResult.insertedCount, " blog posts"));
                    ebooksToInsert = ebooks.map(function (ebook) { return ({
                        title: ebook.title,
                        slug: ebook.title.toLowerCase().replace(/ /g, '-'),
                        description: ebook.description,
                        coverImage: ebook.coverImage,
                        fileUrl: '',
                        author: ebook.author,
                        publishedAt: new Date(),
                        category: ebook.category,
                        pages: ebook.pages
                    }); });
                    return [4 /*yield*/, ebooksCollection.insertMany(ebooksToInsert)];
                case 9:
                    ebooksInsertResult = _a.sent();
                    console.log("Inserted ".concat(ebooksInsertResult.insertedCount, " ebooks"));
                    videosToInsert = videos.map(function (video) { return ({
                        title: video.title,
                        youtubeId: video.youtubeId,
                        description: video.description,
                        thumbnail: video.thumbnailUrl,
                        duration: parseInt(video.duration.split(':')[0]) * 60 + parseInt(video.duration.split(':')[1]),
                        publishedAt: new Date(),
                        tags: [video.category]
                    }); });
                    return [4 /*yield*/, videosCollection.insertMany(videosToInsert)];
                case 10:
                    videosInsertResult = _a.sent();
                    console.log("Inserted ".concat(videosInsertResult.insertedCount, " videos"));
                    console.log('Data migration completed successfully');
                    return [4 /*yield*/, client.close()];
                case 11:
                    _a.sent();
                    return [3 /*break*/, 13];
                case 12:
                    error_1 = _a.sent();
                    console.error('Error during data migration:', error_1);
                    process.exit(1);
                    return [3 /*break*/, 13];
                case 13: return [2 /*return*/];
            }
        });
    });
}
migrateData();

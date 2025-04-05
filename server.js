import blogData from './src/data/blogData.js';
import express from 'express';
import cors from 'cors';

const app = express();

// In-memory storage for blog posts
const blogPosts = [];

// Pre-populate in-memory blogPosts with static blogData
if (Array.isArray(blogData)) {
  blogData.forEach(post => blogPosts.push({ ...post }));
}
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/blog', (req, res) => {
  console.log('Received new blog post:', req.body);
  // Save the blog post to in-memory array
  blogPosts.push(req.body);
  res.status(201).json({ message: 'Blog post created successfully', data: req.body });
});

app.get('/blog/new', (req, res) => {
  res.json({ message: 'New blog post form data placeholder' });
});

// Endpoint to get all blog posts
app.get('/blog', (req, res) => {
  res.json(blogPosts);
});


// Endpoint to get a blog post by slug
app.get('/api/blog', (req, res) => {
  const slug = req.query.slug;
  if (!slug) {
    return res.status(400).json({ error: 'Missing slug parameter' });
  }
  let post = blogPosts.find(p => p.slug === slug);
  if (!post) {
    post = blogData.find(p => p.slug === slug);
  }
  if (!post) {
    return res.status(404).json({ error: 'Blog post not found' });
  }
  res.json(post);
});
app.listen(PORT, () => {
  console.log(`Backend API server running on http://localhost:${PORT}`);
});

// GET all blog posts (static + in-memory)
app.get('/api/blog', (req, res) => {
  const allPosts = [...blogData, ...blogPosts];
  res.json(allPosts);
});
app.put('/api/blog', (req, res) => {
  const slug = req.query.slug;
  if (!slug) {
    return res.status(400).json({ error: 'Missing slug parameter' });
  }

  const index = blogPosts.findIndex(p => p.slug === slug);
  if (index === -1) {
    return res.status(404).json({ error: 'Blog post not found' });
  }

  blogPosts[index] = { ...blogPosts[index], ...req.body };
  res.json(blogPosts[index]);
});

// POST create a new blog post
app.post('/api/blog', (req, res) => {
  const newPost = req.body;
  if (!newPost.slug) {
    return res.status(400).json({ error: 'Missing slug in request body' });
  }
  blogPosts.push(newPost);
  res.status(201).json({ message: 'Blog post created successfully', data: newPost });
});

// PUT update a blog post by slug
app.put('/api/blog', (req, res) => {
  const slug = req.query.slug;
  if (!slug) {
    return res.status(400).json({ error: 'Missing slug parameter' });
  }
  let index = blogPosts.findIndex(p => p.slug === slug);
  if (index === -1) {
    // Try to find in static blogData
    const staticPost = Array.isArray(blogData) ? blogData.find(p => p.slug === slug) : null;
    if (staticPost) {
      blogPosts.push({ ...staticPost });
      index = blogPosts.length - 1;
    } else {
      return res.status(404).json({ error: 'Blog post not found' });
    }
  }
  blogPosts[index] = { ...blogPosts[index], ...req.body };
  res.json({ message: 'Blog post updated successfully', data: blogPosts[index] });
});

// DELETE a blog post by slug
app.delete('/api/blog', (req, res) => {
  const slug = req.query.slug;
  if (!slug) {
    return res.status(400).json({ error: 'Missing slug parameter' });
  }

  const index = blogPosts.findIndex(p => p.slug === slug);
  if (index !== -1) {
    blogPosts.splice(index, 1);
    return res.json({ message: 'Blog post deleted successfully' });
  }

  // Do not attempt to delete from static blogData, which is read-only

  return res.status(404).json({ error: 'Blog post not found' });
});
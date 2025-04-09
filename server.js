import dotenv from 'dotenv';
import express from 'express';
import pkg from 'pg';
import cors from 'cors';

dotenv.config();

const { Pool } = pkg;
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Affiliate API is running');
});

app.use(cors());
app.use(express.json());

// Connect to Neon Postgres
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Test connection
pool.connect()
  .then(() => console.log('Connected to Neon Postgres'))
  .catch(err => console.error('Connection error', err.stack));

// Create affiliate
app.post('/api/affiliates', async (req, res) => {
  const { name, email, referral_code } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO affiliates (name, email, referral_code) VALUES ($1, $2, $3) RETURNING *',
      [name, email, referral_code]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add affiliate' });
  }
});

// Get all affiliates
app.get('/api/affiliates', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM affiliates ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch affiliates' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
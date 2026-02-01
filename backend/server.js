const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/supermarket-simulator')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Supermarket Simulator Backend is Running');
});

// Simple API endpoint
app.get('/api/status', (req, res) => {
  res.json({ status: 'online', message: 'Backend is fully operational' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

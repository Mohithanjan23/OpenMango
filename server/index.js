const express = require('express');
const cors = require('cors');
const { songs, dailyMixes, genres } = require('./store');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/songs', (req, res) => {
  res.json(songs);
});

app.get('/api/daily-mixes', (req, res) => {
  res.json(dailyMixes);
});

app.get('/api/genres', (req, res) => {
  res.json(genres);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

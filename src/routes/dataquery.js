const express = require('express');
const path = require('path');
const fs = require('fs');
const dataQuery = express.Router();

let databases = null;

try {
  const raw = fs.readFileSync(path.join(__dirname, '../data/data.json'), 'utf8');
  databases = JSON.parse(raw);
} catch (err) {
  console.error('Failed to load data.json at startup:', err.message);
}

dataQuery.get('/api/*', (req, res) => {
  if (!databases) {
    return res.status(503).json({ error: 'Data unavailable' });
  }
  res.json(databases);
});

module.exports = dataQuery;

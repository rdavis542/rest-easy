const express = require('express');
const users = express.Router();
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  

// Example route to insert data into the "users" table
users.post('/', async (req, res) => {
  const { name, email } = req.body;
  console.log('Received:', { name, email });


});

module.exports = users;
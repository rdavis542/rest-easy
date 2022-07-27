const express = require('express');
const dataRead = express.Router();
const path = require('path');

dataRead.get('/', (req, res) => {
  console.log(res)

  res.sendFile(path.join(__dirname, '../external_data', 'data.json'));
});

module.exports = dataRead;
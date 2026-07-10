const express = require('express');
const path = require('path');
const dataRead = express.Router();

const dataFile = path.join(__dirname, '../data/data.json');

dataRead.get('/', (req, res, next) => {
  res.sendFile(dataFile, err => { if (err) next(err); });
});

module.exports = dataRead;

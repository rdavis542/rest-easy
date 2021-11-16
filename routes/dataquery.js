const express = require('express');
const dataQuery = express.Router();
const path = require('path');

// include file system module
var fs = require('fs');
let databases = null;

try {

    const data = fs.readFileSync(path.join(__dirname, '../external_data', 'data.json'));

    // parse JSON string to JSON object
    databases = JSON.parse(data);

} catch (err) {
    console.log(`Error reading file from disk: ${err}`);
}

dataQuery.get('/api/*', (req, res) => {
    res.json(databases);
})



module.exports = dataQuery;
const express = require('express');
const serverstatus = express.Router();
const si = require('systeminformation');

serverstatus.get('/', (req, res, next) => {
    si.getAllData().then(data => res.send(data));
    
    });

serverstatus.get('/cpu', (req, res, next) => {
    si.cpu().then(data => res.send(data));
    
});

serverstatus.get('/mem', (req, res, next) => {
    si.mem().then(data => res.send(data));
});

serverstatus.get('/os', (req, res, next) => {
    si.osInfo().then(data => res.send(data));
});

serverstatus.get('/network', (req, res, next) => {
    si.networkInterfaces().then(data => res.send(data));
});

serverstatus.get('/disk', (req, res, next) => {
    si.fsSize().then(data => res.send(data));
});

module.exports = serverstatus;
const express = require('express');
const serverstatus = express.Router();
const si = require('systeminformation');

serverstatus.get('/', (req, res, next) => {
  si.getAllData().then(data => res.json(data)).catch(next);
});

serverstatus.get('/cpu', (req, res, next) => {
  si.cpu().then(data => res.json(data)).catch(next);
});

serverstatus.get('/mem', (req, res, next) => {
  si.mem().then(data => res.json(data)).catch(next);
});

serverstatus.get('/os', (req, res, next) => {
  si.osInfo().then(data => res.json(data)).catch(next);
});

serverstatus.get('/network', (req, res, next) => {
  si.networkInterfaces().then(data => res.json(data)).catch(next);
});

serverstatus.get('/disk', (req, res, next) => {
  si.fsSize().then(data => res.json(data)).catch(next);
});

module.exports = serverstatus;

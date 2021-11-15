const moment = require('moment');

const logger = (req, res, next) => {
    console.log(`${moment().format()}:  ${req.ip} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    console.log('Request Headers:', req.headers);
    console.log('Request Query Params:', req.query); // for all query params
    console.log('Request Path:', req.path);
    console.log('Request Route:', req.route);
  next();
};

module.exports = logger;
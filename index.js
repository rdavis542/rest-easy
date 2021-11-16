const express = require('express');
const app = express();

const path = require('path');
const https = require('https');
const fs = require('fs');

const logger = require('./middleware/logger');

//const options = {
//    key: fs.readFileSync("./keys/privkey1.pem"),
//    cert: fs.readFileSync("./keys/fullchain1.pem")
//  };

app.use(logger);
app.use('/server-status', require('./routes/server-status'));
app.use('/math', require('./routes/math'));
app.use('/dataread', require('./routes/dataread'));
app.use('/dataquery', require('./routes/dataquery'));

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port)
 })
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const https = require('https');
const fs = require('fs');

const logger = require('./middleware/logger');
const bodyParser = require('body-parser');

const options = {
    key: fs.readFileSync("./keys/privkey8.pem"),
    cert: fs.readFileSync("./keys/fullchain8.pem")
  };

app.use(logger);
app.use(express.json());
app.use(bodyParser.json());
app.use('/server-status', require('./routes/server-status'));
app.use('/math', require('./routes/math'));
app.use('/dataread', require('./routes/dataread'));
app.use('/dataquery', require('./routes/dataquery'));
app.use('/users', require('./routes/users'));

//https.createServer(options, app).listen(8443, () => console.log (`Secure listener start on port 8443`));

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port)
 })
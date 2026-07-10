const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const logger = require('./middleware/logger');
const apiKeyAuth = require('./middleware/apiKeyAuth');

const app = express();

app.use(helmet());
app.use(rateLimit({ windowMs: 60_000, max: 100 }));
app.use(logger);
app.use(express.json());

app.get('/healthz', (req, res) => res.status(200).json({ status: 'ok' }));

app.use('/server-status', apiKeyAuth, require('./routes/server-status'));
app.use('/math', require('./routes/math'));
app.use('/dataread', require('./routes/dataread'));
app.use('/dataquery', require('./routes/dataquery'));
app.use('/users', require('./routes/users'));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status ?? 500).json({ error: err.message });
});

module.exports = app;

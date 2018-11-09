const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = require('./middlewares/router');
const logger = require('./logger');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static('dist'));

app.use('/api', router);

// handles any requests that don't match the ones above
app.get('*', (req, res) => res.sendFile(path.resolve('dist', 'index.html')));

app.listen(port, () => logger.appStarted(port));

const path = require('path');
const express = require('express');
const router = require('./routes.js');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../../dist')));
app.use('/', router);
app.use(morgan('dev'));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`We in this port ${PORT} !`)
});



module.exports = app;
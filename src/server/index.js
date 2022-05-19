const path = require('path');
const express = require('express');
const router = require('./routes.js');
const app = express();
// const db = require('../db/index.js')

app.use(express.json());
app.use(express.static(path.join(__dirname, '../../dist')));
app.use('/', router);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`We in this port ${PORT} !`)
});



module.exports = {app};
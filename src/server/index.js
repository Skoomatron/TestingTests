const path = require('path');
const express = require('express');
const app = express();
const db = require('../db/index.js')

app.use(express.json());
app.use(express.static(path.join(__dirname, '../../dist')));

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`We in this port ${PORT} !`)
});



module.exports = app;
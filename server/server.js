const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const DIST_DIR = path.join(__dirname, 'build/static');
const HTML_FILE = path.join(__dirname, './src/index.html');

app.use(express.static(DIST_DIR));
app.get('/', (req, res) => {
  express.sendFile(HTML_FILE);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;

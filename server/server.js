const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');

const DIST_DIR = path.join(__dirname, 'build/static');
const HTML_FILE = path.join(__dirname, './src/index.html');
const SCSS_FILE = path.join(__dirname, './src/App.scss');

app.use(express.json());
app.use(cors());

app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
  express.sendFile(HTML_FILE);
});

app.get('/client/src/App.scss', (req, res) => {
  express.sendFile(SCSS_FILE);
});

app.post('/api', async (req, res) => {
  const fetchUrl = `https://api.api-ninjas.com/v1/quotes?category=${req.body.category}`;
  const fetchedQuote = await fetch(fetchUrl, {
    method: 'GET',
    headers: { 'X-Api-Key': 'RW2z72sDh5rhcuMRGN/DMQ==rITkXYIbLpquXurI' },
    contentType: 'application/json',
  });
  const quote = await fetchedQuote.json();
  return res.status(200).send(quote);
});

app.use((res, req) =>
  res.status(404).send('This is not the page you are looking for...')
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown error',
    status: 500,
    message: { err: 'An error occured' },
  };
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;

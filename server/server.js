const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');

const DIST_DIR = path.join(__dirname, 'build/static');
const HTML_FILE = path.join(__dirname, './src/index.html');

app.use(express.json());
app.use(cors());

app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
  express.sendFile(HTML_FILE);
});

app.post('/api', async (req, res) => {
  console.log(req);
  const fetchedQuote = await fetch(
    'https://api.api-ninjas.com/v1/quotes?category=' + req.body.category,
    {
      method: 'GET',
      headers: { 'X-Api-Key': 'RW2z72sDh5rhcuMRGN/DMQ==rITkXYIbLpquXurI' },
      contentType: 'application/json',
    }
  );
  // console.log(fetchedQuote);
  res.locals.quote = fetchedQuote;
  return res.status(200).send(res.locals.quote);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;

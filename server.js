const express = require('express');
const path = require('path');
const fetchNewsData = require('./controllers/cryptoNewsApiController');

const app = express();

const PORT = process.env.port || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/news/search', fetchNewsData);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.port || 5000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

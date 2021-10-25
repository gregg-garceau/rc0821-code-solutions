const express = require('express');
const path = require('path');
const app = express();

const publicDirectory = path.join(__dirname, 'public');

const files = express.static(publicDirectory);

app.use(files);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

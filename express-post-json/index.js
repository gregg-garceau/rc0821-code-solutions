const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', function (req, res) {
  const userArray = [];
  for (const id in grades) {
    userArray.push(grades[id]);
  }
  res.json(userArray);
});

express.json();

app.use(express.json());

app.post('/api/grades', function (req, res) {
  req.body.id = nextId;
  nextId++;
  grades[req.body.id] = req.body;
  res.status(201).send(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

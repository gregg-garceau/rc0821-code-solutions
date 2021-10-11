const data = require('./data.json');
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/api/notes', (req, res) => {
  const userArray = [];
  for (const id in data.notes) {
    userArray.push(data.notes[id]);
  }
  res.json(userArray);
});

app.get('/api/notes/:id', (req, res) => {
  const userId = req.params.id;

  if (userId < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (data.notes[userId] !== undefined) {
    res.status(200).json(data.notes[userId]);
  } else {
    res.status(404).json({ error: 'cannot find note with id ' + userId });
  }
});

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.post('/api/notes', (req, res) => {

  const userNote = req.body;

  if (!userNote.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (userNote.content) {

    userNote.id = data.nextId;
    data.nextId++;
    data.notes[userNote.id] = userNote;

    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', jsonData, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occured.' });
      } else {
        res.status(201).send(userNote);
      }
    });
  }

});

app.delete('/api/notes/:id', (req, res) => {
  const userId = req.params.id;

  if (userId < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (data.notes[userId] === undefined) {
    res.status(404).json({ error: 'cannot find note with id ' + userId });
  } else {

    delete data.notes[userId];
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', jsonData, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occured.' });
      } else {
        res.status(204).send();
      }
    });
  }

});

app.put('/api/notes/:id', (req, res) => {
  const userId = req.params.id;
  const userNote = req.body;

  if (userId < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!userNote.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (data.notes[userId] === undefined) {
    res.status(404).json({ error: 'cannot find note with id ' + userId });
  } else {

    userNote.id = parseInt(userId);
    data.notes[userId] = userNote;
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', jsonData, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occured.' });
      } else {
        res.status(200).send(userNote);
      }
    });
  }

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

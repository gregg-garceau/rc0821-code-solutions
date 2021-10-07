const data = require('./data.json');
const fs = require('fs');

const { notes } = data;
const input = process.argv[2].toLowerCase();

const userRead = () => {

  for (const id in notes) {
    console.log(`${id}: ${notes[id]}`);
  }

};

const userAdd = () => {

  const noteText = process.argv[3];
  const nextId = data.nextId;

  data.notes[nextId] = noteText;

  data.nextId++;

  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', jsonData, err => {
    if (err) throw err;
  });

};

const userDelete = () => {

  const deleteId = process.argv[3];

  if (deleteId.toString() in notes) {

    delete notes[deleteId];

    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', jsonData, err => {
      if (err) throw err;
    });

  } else {
    console.log('ID number is invalid. Please enter a valid ID!');
  }

};

const userUpdate = () => {

  const updateId = process.argv[3];
  const updateText = process.argv[4];

  if (updateId.toString() in notes) {

    notes[updateId] = updateText;

    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', jsonData, err => {
      if (err) throw err;
    });

  } else {
    console.log('ID number is invalid. Please enter a valid ID!');
  }

};

if (input === 'read') {
  userRead();
} else if (input === 'add') {
  userAdd();
} else if (input === 'delete') {
  userDelete();
} else if (input === 'update') {
  userUpdate();
} else {
  console.log('Please type a valid command!');
}

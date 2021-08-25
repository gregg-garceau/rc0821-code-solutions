var numOne = 10;
var numTwo = 20;
var numThree = 30;

var maximumValue = Math.max(numOne, numTwo, numThree);
console.log('Maximum value: ', maximumValue);

var heroes = ['Superman', 'Spiderman', 'Iron Man', 'The Hulk'];

var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Random index: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('Random hero: ', randomHero);

var library = [
  {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes'
  },

  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },

  {
    title: 'The Odyssey',
    author: 'Homer'
  }

];

var lastBook = library.pop();
console.log('last book: ', lastBook);

var firstBook = library.shift();
console.log('first book: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library: ', library);

var fullName = 'Gregg Garceau';
var firstAndLastName = fullName.split(' ');

console.log('first and last name: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('sayMyName: ', sayMyName);

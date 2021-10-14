const takeAChance = require('./take-a-chance');

const promiseOne = takeAChance('Gregg');

promiseOne.then(value => {
  console.log(value);
});

promiseOne.catch(error => {
  console.error(error);
});

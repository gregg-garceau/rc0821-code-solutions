const addition = require('./add');
const subtraction = require('./subtract');
const multiplication = require('./multiply');
const division = require('./divide');

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[4]);

if (process.argv[3] === '+') {
  const sum = addition.add(num1, num2);
  console.log('Sum: ', sum);
}

if (process.argv[3] === '-') {
  const difference = subtraction.subtract(num1, num2);
  console.log('Difference: ', difference);
}

if (process.argv[3] === '/') {
  const quotient = division.divide(num1, num2);
  console.log('Quotient: ', quotient);
}

if (process.argv[3] === 'x') {
  const product = multiplication.multiply(num1, num2);
  console.log('Product: ', product);
}

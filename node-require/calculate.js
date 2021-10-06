const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const num1 = parseFloat(process.argv[2]);
const num2 = parseFloat(process.argv[4]);

if (process.argv[3] === '+') {
  const sum = add.add(num1, num2);
  console.log('Sum: ', sum);
}

if (process.argv[3] === '-') {
  const difference = subtract.subtract(num1, num2);
  console.log('Difference: ', difference);
}

if (process.argv[3] === '/') {
  const quotient = divide.divide(num1, num2);
  console.log('Quotient: ', quotient);
}

if (process.argv[3] === 'x') {
  const product = multiply.multiply(num1, num2);
  console.log('Product: ', product);
}

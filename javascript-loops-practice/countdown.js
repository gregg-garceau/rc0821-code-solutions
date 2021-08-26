/* exported countdown */
function countdown(number) {
  var numbers = [];
  var c = number;
  while (c >= 0) {
    numbers.push(c);
    c -= 1;
  }
  return numbers;
}

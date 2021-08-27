/* exported reverse */
function reverse(array) {
  var reverseValues = [];
  var count = array.length - 1;

  while (count >= 0) {
    reverseValues.push(array[count]);
    count--;
  }
  return reverseValues;
}

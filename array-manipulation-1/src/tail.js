/* exported tail */
function tail(array) {
  var tailArray = [];
  var count = 1;

  while (count < array.length) {
    tailArray.push(array[count]);
    count++;
  }
  return tailArray;
}

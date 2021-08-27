/* exported takeRight */
function takeRight(array, count) {
  var rightArray = [];
  var rightNum = array.length - count;

  if (array.length === 0) {
    return rightArray;
  } else {
    while (rightNum < array.length) {
      rightArray.push(array[rightNum]);
      rightNum++;
    }
  }
  return rightArray;
}

/* exported dropRight */
function dropRight(array, count) {
  var dropArray = [];
  var dropLength = array.length - count;

  if (array.length === 0) {
    return dropArray;
  } else {
    for (let i = 0; i < dropLength; i++) {
      dropArray.push(array[i]);
    }
  }
  return dropArray;
}

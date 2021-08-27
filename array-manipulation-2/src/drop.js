/* exported drop */
function drop(array, count) {
  var i = count;
  var dropArray = [];

  while (i < array.length) {
    dropArray.push(array[i]);
    i++;
  }
  return dropArray;
}
